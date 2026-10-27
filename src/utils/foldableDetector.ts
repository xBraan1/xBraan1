/**
 * Foldable Device Detection Utility
 * Detects foldable devices and provides information about fold state
 */

export interface FoldableInfo {
  isFoldable: boolean;
  isFolded: boolean;
  isSpanned: boolean;
  segmentCount: number;
  orientation: 'portrait' | 'landscape';
}

export class FoldableDetector {
  private static instance: FoldableDetector;
  private listeners: Set<(info: FoldableInfo) => void> = new Set();
  private currentInfo: FoldableInfo = {
    isFoldable: false,
    isFolded: false,
    isSpanned: false,
    segmentCount: 1,
    orientation: 'portrait',
  };

  private constructor() {
    this.init();
  }

  static getInstance(): FoldableDetector {
    if (!FoldableDetector.instance) {
      FoldableDetector.instance = new FoldableDetector();
    }
    return FoldableDetector.instance;
  }

  private init() {
    if (typeof window === 'undefined') return;

    // Detect foldable devices
    this.detectFoldable();

    // Listen for viewport segment changes (Surface Duo, etc.)
    if ('addEventListener' in window) {
      window.addEventListener('resize', this.handleResize.bind(this));
      window.addEventListener('orientationchange', this.handleOrientationChange.bind(this));
    }

    // Listen for CSS environment variables changes
    if ('CSS' in window && 'env' in window.CSS) {
      this.watchEnvironmentChanges();
    }

    // Listen for Visual Viewport API (for fold detection)
    if ('visualViewport' in window) {
      window.visualViewport?.addEventListener('resize', this.handleViewportResize.bind(this));
    }
  }

  private detectFoldable() {
    // Check for foldable indicators
    const userAgent = navigator.userAgent.toLowerCase();
    const isFoldableUA = 
      userAgent.includes('sm-f9') || // Samsung Galaxy Fold
      userAgent.includes('sm-w20') || // Samsung Galaxy Z Fold
      userAgent.includes('sm-z fold') ||
      userAgent.includes('huawei mate x') ||
      userAgent.includes('surface duo');

    // Check for CSS environment variables (foldable indicators)
    const hasEnvSupport = CSS.supports('top: env(titlebar-area-y, 0)');
    
    // Check for viewport segments (Surface Duo)
    const hasViewportSegments = CSS.supports('left: env(viewport-segment-left-0-0-0-0, 0)');

    this.currentInfo = {
      isFoldable: isFoldableUA || hasEnvSupport || hasViewportSegments,
      isFolded: this.checkIfFolded(),
      isSpanned: this.checkIfSpanned(),
      segmentCount: this.getSegmentCount(),
      orientation: this.getOrientation(),
    };

    this.notifyListeners();
  }

  private checkIfFolded(): boolean {
    // Check if device is in folded state (narrow viewport)
    const aspectRatio = window.innerWidth / window.innerHeight;
    const isNarrow = aspectRatio < 0.5; // Very narrow aspect ratio suggests folded state
    const isSmall = window.innerWidth < 400; // Small width suggests folded
    
    return this.currentInfo.isFoldable && (isNarrow || isSmall);
  }

  private checkIfSpanned(): boolean {
    // Check if device is spanned across multiple screens (Surface Duo)
    if (!('visualViewport' in window)) return false;
    
    const viewport = window.visualViewport;
    if (!viewport) return false;

    // Spanned devices have multiple viewport segments
    // This is a simplified check - real implementation would check viewport-segment-* env vars
    return viewport.width > window.innerWidth * 1.5;
  }

  private getSegmentCount(): number {
    // Check for viewport segments
    if (this.currentInfo.isSpanned) {
      return 2; // Dual-screen devices
    }
    return 1;
  }

  private getOrientation(): 'portrait' | 'landscape' {
    return window.innerWidth > window.innerHeight ? 'landscape' : 'portrait';
  }

  private handleResize() {
    this.updateInfo();
  }

  private handleOrientationChange() {
    setTimeout(() => this.updateInfo(), 100); // Delay to allow orientation change to complete
  }

  private handleViewportResize() {
    this.updateInfo();
  }

  private watchEnvironmentChanges() {
    // Watch for CSS environment variable changes
    // This is a simplified implementation
    const observer = new MutationObserver(() => {
      this.updateInfo();
    });

    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['style', 'class'],
    });
  }

  private updateInfo() {
    const newInfo: FoldableInfo = {
      isFoldable: this.currentInfo.isFoldable,
      isFolded: this.checkIfFolded(),
      isSpanned: this.checkIfSpanned(),
      segmentCount: this.getSegmentCount(),
      orientation: this.getOrientation(),
    };

    // Only notify if something changed
    if (JSON.stringify(newInfo) !== JSON.stringify(this.currentInfo)) {
      this.currentInfo = newInfo;
      this.notifyListeners();
    }
  }

  private notifyListeners() {
    this.listeners.forEach(listener => listener(this.currentInfo));
  }

  getInfo(): FoldableInfo {
    return { ...this.currentInfo };
  }

  subscribe(listener: (info: FoldableInfo) => void): () => void {
    this.listeners.add(listener);
    listener(this.currentInfo); // Call immediately with current state
    
    return () => {
      this.listeners.delete(listener);
    };
  }
}

// React hook for using foldable detection
export function useFoldable() {
  const detector = FoldableDetector.getInstance();
  
  if (typeof window === 'undefined') {
    return {
      isFoldable: false,
      isFolded: false,
      isSpanned: false,
      segmentCount: 1,
      orientation: 'portrait' as const,
    };
  }

  const [info, setInfo] = useState<FoldableInfo>(detector.getInfo());

  useEffect(() => {
    const unsubscribe = detector.subscribe(setInfo);
    return unsubscribe;
  }, []);

  return info;
}

// Need to import these for the hook
import { useState, useEffect } from 'react';

// Export singleton instance
export const foldableDetector = FoldableDetector.getInstance();

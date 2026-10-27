/**
 * Code Protection Utility
 * Provides basic client-side code protection measures
 */

export class CodeProtection {
  private static instance: CodeProtection;
  private devToolsOpen = false;
  private checkInterval: number | null = null;

  private constructor() {}

  static getInstance(): CodeProtection {
    if (!CodeProtection.instance) {
      CodeProtection.instance = new CodeProtection();
    }
    return CodeProtection.instance;
  }

  /**
   * Initialize all protection measures
   */
  init(): void {
    if (typeof window === 'undefined') return;

    this.disableRightClick();
    this.disableTextSelection();
    this.detectDevTools();
    this.disableKeyboardShortcuts();
    this.disableDrag();
    this.addWatermark();
  }

  /**
   * Disable right-click context menu
   */
  private disableRightClick(): void {
    document.addEventListener('contextmenu', (e) => {
      e.preventDefault();
      return false;
    });
  }

  /**
   * Disable text selection on sensitive elements
   */
  private disableTextSelection(): void {
    const style = document.createElement('style');
    style.textContent = `
      body {
        -webkit-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        user-select: none;
      }
      input, textarea, [contenteditable="true"] {
        -webkit-user-select: text;
        -moz-user-select: text;
        -ms-user-select: text;
        user-select: text;
      }
    `;
    document.head.appendChild(style);
  }

  /**
   * Detect if developer tools are open
   */
  private detectDevTools(): void {
    const threshold = 160;
    
    this.checkInterval = window.setInterval(() => {
      const widthThreshold = window.outerWidth - window.innerWidth > threshold;
      const heightThreshold = window.outerHeight - window.innerHeight > threshold;
      
      if (widthThreshold || heightThreshold) {
        if (!this.devToolsOpen) {
          this.devToolsOpen = true;
          this.onDevToolsOpen();
        }
      } else {
        if (this.devToolsOpen) {
          this.devToolsOpen = false;
          this.onDevToolsClose();
        }
      }
    }, 1000);
  }

  /**
   * Handle devtools open event
   */
  private onDevToolsOpen(): void {
    console.clear();
    console.log('%c⚠️ Warning', 'color: red; font-size: 40px; font-weight: bold;');
    console.log('%cThis browser feature is intended for developers. If someone told you to copy-paste something here, it is likely a scam.', 'font-size: 16px;');
    console.log('%c© xBraan1 - Protected Content', 'color: blue; font-size: 14px;');
  }

  /**
   * Handle devtools close event
   */
  private onDevToolsClose(): void {
    // DevTools closed
  }

  /**
   * Disable common keyboard shortcuts for viewing source
   */
  private disableKeyboardShortcuts(): void {
    document.addEventListener('keydown', (e) => {
      // Disable F12
      if (e.key === 'F12') {
        e.preventDefault();
        return false;
      }
      
      // Disable Ctrl+Shift+I (DevTools)
      if (e.ctrlKey && e.shiftKey && e.key === 'I') {
        e.preventDefault();
        return false;
      }
      
      // Disable Ctrl+Shift+J (Console)
      if (e.ctrlKey && e.shiftKey && e.key === 'J') {
        e.preventDefault();
        return false;
      }
      
      // Disable Ctrl+Shift+C (Inspect element)
      if (e.ctrlKey && e.shiftKey && e.key === 'C') {
        e.preventDefault();
        return false;
      }
      
      // Disable Ctrl+U (View source)
      if (e.ctrlKey && e.key === 'u') {
        e.preventDefault();
        return false;
      }
      
      // Disable Ctrl+S (Save page)
      if (e.ctrlKey && e.key === 's') {
        e.preventDefault();
        return false;
      }
    });
  }

  /**
   * Disable drag and drop
   */
  private disableDrag(): void {
    document.addEventListener('dragstart', (e) => {
      e.preventDefault();
    });
  }

  /**
   * Add subtle watermark to console
   */
  private addWatermark(): void {
    console.log('%c🎨 xBraan1', 'color: #000; font-size: 60px; font-weight: bold; text-shadow: 2px 2px 4px rgba(0,0,0,0.1);');
    console.log('%cPremium Salon & Barbershop', 'color: #666; font-size: 16px;');
    console.log('%c© 2024 xBraan1. All rights reserved.', 'color: #999; font-size: 12px;');
    console.log('%c⚠️ This is a protected website. Unauthorized copying or distribution is prohibited.', 'color: #ff0000; font-size: 14px; font-weight: bold;');
  }

  /**
   * Cleanup
   */
  destroy(): void {
    if (this.checkInterval) {
      clearInterval(this.checkInterval);
    }
  }
}

// Export singleton instance
export const codeProtection = CodeProtection.getInstance();

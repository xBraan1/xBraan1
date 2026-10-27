import { ReactNode } from 'react';
import { useFoldable } from '../utils/foldableDetector';

interface FoldableLayoutProps {
  children: ReactNode;
  folded?: ReactNode;
  unfolded?: ReactNode;
  spanned?: ReactNode;
  default?: ReactNode;
}

/**
 * FoldableLayout - Renders different layouts based on foldable device state
 * 
 * @param children - Default content to render
 * @param folded - Content to render when device is folded
 * @param unfolded - Content to render when device is unfolded
 * @param spanned - Content to render when device is spanned across screens
 * @param default - Alias for children (default content)
 */
export default function FoldableLayout({ 
  children, 
  folded, 
  unfolded, 
  spanned, 
  default: defaultContent 
}: FoldableLayoutProps) {
  const { isFoldable, isFolded, isSpanned } = useFoldable();

  // If not a foldable device, render default content
  if (!isFoldable) {
    return <>{defaultContent || children}</>;
  }

  // Render based on fold state
  if (isSpanned && spanned) {
    return <>{spanned}</>;
  }

  if (isFolded && folded) {
    return <>{folded}</>;
  }

  if (!isFolded && unfolded) {
    return <>{unfolded}</>;
  }

  // Fallback to default content
  return <>{defaultContent || children}</>;
}

/**
 * Hook to get foldable-specific class names
 */
export function useFoldableClasses() {
  const { isFoldable, isFolded, isSpanned, orientation } = useFoldable();

  const classes: string[] = [];

  if (isFoldable) {
    classes.push('foldable-device');
    
    if (isFolded) {
      classes.push('foldable-folded');
    } else {
      classes.push('foldable-unfolded');
    }

    if (isSpanned) {
      classes.push('foldable-spanned');
    }

    classes.push(`foldable-${orientation}`);
  }

  return classes.join(' ');
}

/**
 * Component that applies foldable-specific classes
 */
export function FoldableContainer({ 
  children, 
  className = '',
  ...props 
}: { 
  children: ReactNode; 
  className?: string;
  [key: string]: any;
}) {
  const foldableClasses = useFoldableClasses();
  
  return (
    <div className={`${className} ${foldableClasses}`} {...props}>
      {children}
    </div>
  );
}

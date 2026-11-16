import type { CSSProperties, ReactNode } from "react";

type Props = {
  children: ReactNode;
  className?: string;
  delay?: number;
  fade?: boolean;
};

export function Reveal({
  children,
  className,
  delay = 0,
  fade = true,
}: Props) {
  const style = delay
    ? ({ "--reveal-delay": `${delay}s` } as CSSProperties)
    : undefined;

  const classes = [className, fade ? "reveal" : null].filter(Boolean).join(" ");

  return (
    <div className={classes} style={style}>
      {children}
    </div>
  );
}

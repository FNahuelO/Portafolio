type Props = {
  className?: string;
  title?: string;
};

/** Monograma FO — Franco Osorio */
export function LogoMark({ className, title = "Franco Osorio" }: Props) {
  return (
    <svg
      className={className}
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label={title}
    >
      <title>{title}</title>
      <rect width="64" height="64" rx="16" className="fill-bg-elevated" />
      <rect
        x="1.5"
        y="1.5"
        width="61"
        height="61"
        rx="14.5"
        className="stroke-line"
        strokeWidth="1.5"
      />
      {/* F */}
      <path
        d="M14 46V18h18.2c5.9 0 9.7 3.3 9.7 8.4 0 3.4-1.7 6-4.5 7.3L42 46h-8.4l-4.1-11.2H22.2V46H14Zm8.2-18.4h8.6c2.4 0 3.9-1.3 3.9-3.3s-1.5-3.2-3.9-3.2h-8.6v6.5Z"
        className="fill-accent"
      />
      {/* O ring */}
      <circle
        cx="48"
        cy="40"
        r="10"
        className="stroke-accent"
        strokeWidth="4.5"
        fill="none"
      />
    </svg>
  );
}

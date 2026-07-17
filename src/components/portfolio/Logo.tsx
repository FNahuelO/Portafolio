type Props = {
  className?: string;
  title?: string;
};

/**
 * Logo legible FO — F y O lado a lado, misma altura, tipografía geométrica.
 */
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
      <rect width="64" height="64" rx="14" className="fill-bg-elevated" />
      <rect
        x="1.25"
        y="1.25"
        width="61.5"
        height="61.5"
        rx="12.75"
        className="stroke-line"
        strokeWidth="1.5"
      />
      {/* F — trazo grueso legible */}
      <path
        className="fill-accent"
        d="M11 15h20v6H18v8h11v6H18v14H11V15Z"
      />
      {/* O — anillo claro al mismo alto */}
      <path
        className="fill-accent"
        fillRule="evenodd"
        d="M46 15c9.39 0 17 7.61 17 17s-7.61 17-17 17-17-7.61-17-17 7.61-17 17-17Zm0 6c-6.075 0-11 4.925-11 11s4.925 11 11 11 11-4.925 11-11-4.925-11-11-11Z"
      />
    </svg>
  );
}

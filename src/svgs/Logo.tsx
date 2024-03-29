export const Logo = ({
  width = 25,
  height = 33,
  color = "#0A2640",
  className,
}: {
  height?: number | string;
  width?: number | string;
  color?: string;
  className?: string;
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 25 33"
      fill={color}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M0 15.5H16.2851C21.0522 15.5 24.9167 19.3645 24.9167 24.1316C24.9167 28.8987 21.0522 32.7632 16.2851 32.7632H0V15.5Z"
        fill={color}
      />
      <path
        d="M0 0.394531H10.8597C14.435 0.394531 17.3333 3.2929 17.3333 6.86822C17.3333 10.4435 14.435 13.3419 10.8597 13.3419H0V0.394531Z"
        fill={color}
      />
    </svg>
  );
};

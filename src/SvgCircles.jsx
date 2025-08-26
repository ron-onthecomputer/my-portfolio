export default function SvgCircles({ dimensions, className, circle }) {
  return (
    <>
      <svg
        height={dimensions}
        width={dimensions}
        className={className}
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle r={circle} cx={circle} cy={circle} />
      </svg>
    </>
  );
}
export const SvgCirclesData = [
  {
    dimensions: "400",
    className: "svg-first",
    circle: "200",
  },
  {
    dimensions: "300",
    className: "svg-second",
    circle: "150",
  },
  {
    dimensions: "300",
    className: "svg-third",
    circle: "150",
  },
];

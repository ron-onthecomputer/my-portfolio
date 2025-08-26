export default function NavbarItems({
  className,
  link,
  name,
  current,
  isActive,
}) {
  return (
    <a
      className={`${className} ${isActive ? "active" : ""}`}
      aria-current={current}
      href={link}
    >
      {name}
    </a>
  );
}

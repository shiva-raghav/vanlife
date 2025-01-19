import clsx from "clsx";
import "./badge.css";
export default function Badge({ type, children }) {
  const className = clsx("badge", {
    simple: type === "simple",
    luxury: type === "luxury",
    rugged: type === "rugged",
  });
  return (
    <>
      <div className={className}>{children}</div>
    </>
  );
}

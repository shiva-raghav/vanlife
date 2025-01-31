import clsx from "clsx";
import "./button.css";

export default function Button({ children, className, onClickHandler }) {
  const classname = clsx("btn", className);
  return (
    <button className={classname} onClick={onClickHandler}>
      {children}
    </button>
  );
}

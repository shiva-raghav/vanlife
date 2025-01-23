import "./nav.css";

export default function Nav({ children }) {
  return (
    <>
      <div className="navigation">
        <nav>{children && <ul>{children}</ul>}</nav>
      </div>
    </>
  );
}

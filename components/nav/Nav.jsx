import "./nav.css";

export default function Nav({ children }) {
  return (
    <>
      <nav>
        {children && (
          <div className="navigation">
            <ul>{children}</ul>
          </div>
        )}
      </nav>
    </>
  );
}

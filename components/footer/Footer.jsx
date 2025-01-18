import "./footer.css";

export default function Footer() {
  let currentYear = new Date().getFullYear();
  return (
    <>
      <footer>
        <p>
          <span>&copy;</span>
          {` ${currentYear} #VANLIFE`}
        </p>
      </footer>
    </>
  );
}

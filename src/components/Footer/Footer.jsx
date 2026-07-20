import classes from "./Footer.module.scss";

function Footer() {
  return (
    <footer className={classes.footer}>
      <p>© 2026 Jasmine Yu</p>
      <p className={classes.meta}>
        Powered by{" "}
        <a
          href="https://books.google.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Google Books API
        </a>{" "}
        · Made with React + Vite
      </p>
    </footer>
  );
}

export default Footer;

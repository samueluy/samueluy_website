const Footer = () => {
  return (
    <footer className="footer">
      <div className="copy">
        <p>E: contact@samueluy.com</p>
        <p>T: +63 956 381 2141</p>
      </div>
      <div className="soc-box">
        <div className="follow-label">Follow Me</div>
        <div className="soc">
          <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/samueluy/">
            <span className="icon fab fa-linkedin" />
          </a>
          <a target="_blank" rel="noreferrer" href="https://www.tiktok.com/@samueluyyt/">
            <span className="icon fab fa-tiktok" />
          </a>
          <a target="_blank" rel="noreferrer" href="https://www.facebook.com/samuyyt/">
            <span className="icon fab fa-facebook" />
          </a>
          <a target="_blank" rel="noreferrer" href="https://www.instagram.com/samueluyyt/">
            <span className="icon fab fa-instagram" />
          </a>
          <a target="_blank" rel="noreferrer" href="https://www.youtube.com/samueluy">
            <span className="icon fab fa-youtube" />
          </a>
          <a target="_blank" rel="noreferrer" href="https://github.com/samueluy">
            <span className="icon fab fa-github" />
          </a>
        </div>
      </div>
      <div className="clear" />
    </footer>
  );
};
export default Footer;

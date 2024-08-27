import Link from "next/link";
import { Fragment, useState } from "react";

const Menu = () => (
  <Fragment>
    <div className="logo hover-masks-logo">
      <a href="/documents/Samuel_Uy_Resume_2024.pdf" download="Samuel_Uy_Resume_2024.pdf">
        <span className="mask-lnk">
          Samuel <strong>Uy</strong>
        </span>
        <span className="mask-lnk mask-lnk-hover">
          Download <strong>CV</strong>
        </span>
      </a>
    </div>
    {/* top menu */}
    <div className="top-menu hover-masks">
      <div className="top-menu-nav">
        <div className="menu-topmenu-container">
          <ul className="menu">
            <li className="menu-item menu-item-has-children">
              <Link href="/">
                <a>
                {/* Removed class name mask-lnk and mask-lnk-hover from span*/}
                  <span>Home</span>
                </a>
              </Link>
            </li>
            <li className="menu-item menu-item-has-children">
                <a>
                  <span className="mask-lnk">Resume</span>
                  <span className="mask-lnk mask-lnk-hover">Resume</span>
                </a>
              <ul className="sub-menu">
                <li className="menu-item">
                  <Link href="/resume_tech">
                    <a>
                      <span className="mask-lnk">Data Engineering</span>
                      <span className="mask-lnk mask-lnk-hover">
                      Data Engineering
                      </span>
                    </a>
                  </Link>
                </li>
                <li className="menu-item">
                  <Link href="/resume_cc">
                    <a>
                      <span className="mask-lnk">Content Creation</span>
                      <span className="mask-lnk mask-lnk-hover">
                      Content Creation
                      </span>
                    </a>
                  </Link>
                </li>
              </ul>
            </li>
            <li className="menu-item menu-item-has-children">
              <Link href="/contacts">
                <a>
                  <span>Contact</span>
                </a>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </Fragment>
);

const Header = () => {
  return (
    <Fragment>
      <MobileHeader />
      <DeskTopHeader />
    </Fragment>
  );
};
export default Header;

const DeskTopHeader = () => (
  <header className={`header desktopHeader`}>
    <div className="head-top">
      <Menu />
    </div>
  </header>
);

const MobileHeader = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <header className={`header mobileHeader ${toggle ? "active" : ""}`}>
      <div className="head-top">
        {/* menu button */}
        <a href="#" className="menu-btn" onClick={() => setToggle(!toggle)}>
          <span />
        </a>
        {/* logo */}
        <Menu />
      </div>
    </header>
  );
};

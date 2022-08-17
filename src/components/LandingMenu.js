import { NavLink, Link } from "react-router-dom";
import Whiteham from "../images/hamburger-white.png";
import WhiteXham from "../images/x-ham-white.png";
import IconBlack from "../images/icon-black.png";
import Linkedin from "../images/linkedin-pink.svg";
import Github from "../images/github-pink.svg";
import Codepen from "../images/codepen-pink.svg";

const SideMenu = () => {
  function ToggleMenu() {
    const Hiddenmenu = document.querySelector(".main-menu");
    Hiddenmenu.classList.toggle("active-menu");
  }
  function HideMenu() {
    const Hiddenmenu = document.querySelector(".main-menu");
    Hiddenmenu.classList.remove("active-menu");
    const HamIcon = document.querySelector(".ham-menu");
    HamIcon.src = Whiteham;
  }
  function ResetLocation() {
    window.scrollTo(0, 0);
  }
  function changeHamburger() {
    const Hiddenmenu = document.querySelector(".main-menu");
    const HamIcon = document.querySelector(".ham-menu");
    if (Hiddenmenu.classList.contains("active-menu")) {
      HamIcon.src = WhiteXham;
    } else {
      HamIcon.src = Whiteham;
    }
  }
  return (
    <article className="side-menu">
      <section className="ham-section">
        <img
          className="ham-menu"
          src={Whiteham}
          alt=""
          onClick={() => {
            ToggleMenu();
            changeHamburger();
          }}
        ></img>
      </section>

      <section className="main-menu">
        <Link
          to="/personal-portfolio"
          className="logo-section"
          onClick={() => {
            ResetLocation();
            HideMenu();
          }}
        >
          <img src={IconBlack} alt=""></img>
        </Link>

        <section className="menu-links">
          <NavLink
            to="/"
            className=" gray-text "
            onClick={() => {
              ResetLocation();
              HideMenu();
            }}
          >
            Main
          </NavLink>
          <NavLink
            to="/personal-portfolio/about"
            className="gray-text"
            onClick={() => {
              ResetLocation();
              HideMenu();
            }}
            style={({ isActive }) =>
              isActive
                ? {
                    textDecoration: "none",
                    color: "#fd1056",
                  }
                : {}
            }
          >
            About
          </NavLink>
          <NavLink
            to="/personal-portfolio/portfolio"
            className="gray-text"
            onClick={() => {
              ResetLocation();
              HideMenu();
            }}
            style={({ isActive }) =>
              isActive
                ? {
                    textDecoration: "none",
                    color: "#fd1056",
                  }
                : {}
            }
          >
            Portfolio
          </NavLink>
          <NavLink
            to="/personal-portfolio/contact"
            className="gray-text"
            onClick={() => {
              ResetLocation();
              HideMenu();
            }}
            style={({ isActive }) =>
              isActive
                ? {
                    textDecoration: "none",
                    color: "#fd1056",
                  }
                : {}
            }
          >
            Contact
          </NavLink>
        </section>
        <section className="social-media">
         
          <a
            href="https://github.com/SNATechFirm"
            target="_blank"
            rel="noreferrer"
          >
            <img src={Github} alt="github" />
          </a>
          
        </section>
        <section className="menu-email">
          <span className="myemail-txt">
            &lt; /snacorporations@gmail.com &gt;
          </span>
        </section>
      </section>
    </article>
  );
};

export default SideMenu;

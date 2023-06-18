import { HomeLink, AboutLink,MyMusic, Resume } from "./Menu";
import "../../Css/Header.css";
import { Icon } from "@iconify/react";

const Header = () => {
  return (
    <nav className="navigation">
      <div class="nav-wrapper">
        <a href="#" class="brand-logo">
          <Icon className="guitar" icon="mdi:guitar-electric" color="#fff" width="70" />
        </a>
        <ul id="nav-mobile" class="menu right hide-on-med-and-down">
          <li>
            <HomeLink  />
          </li>
          <li>
            <AboutLink />
          </li>
          <li>
            <MyMusic/>
          </li>
          <li>
            <Resume/>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Header;

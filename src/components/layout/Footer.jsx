import "../../Css/Footer.css";
import { Icon } from "@iconify/react";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <>
      <footer class="page-footer">
        <div class="container center">
          <div class="row">
            <div class="col l6 s12">
              <h5 class="white-text">Footer Content</h5>
              <p class="grey-text text-lighten-4">
                You can use rows and columns here to organize your footer
                content.
              </p>
            </div>
            <div class="col l4 offset-l2 s12">
              <ul className="iconSocial">
                <li>
                  <Link>
                    <Icon
                      icon="uit:twitter-alt"
                      className="icons iconTwitter"
                      color="#55aace "
                      width={"40px"}
                    />
                  </Link>
                </li>
                <li>
                  <Icon
                    icon="bxl:instagram"
                    className="icons iconInstagram"
                    width={"40px"}
                  />
                </li>
                <li>
                  <Icon
                    icon="jam:spotify"
                    className="icons iconSpotify"
                    width={"40px"}
                  />
                </li>
                <li>
                  <Icon
                    icon="ion:logo-soundcloud"
                    className="icons iconSoundCloud"
                    width={"40px"}
                  />
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div class="row">
          <form class="col s12 container right">
            <div class="row">
              <div class="input-field col s3">
                <input id="first_name" type="text" class="validate" />
                <label for="first_name">First Name</label>
              </div>
              <div class="input-field col s3">
                <input id="last_name" type="text" class="validate" />
                <label for="last_name">Last Name</label>
              </div>
            </div>
            <div class="row"></div>
            <div class="row">
              <div class="input-field col s3">
                <input id="password" type="password" class="validate" />
                <label for="password">Password</label>
              </div>
            </div>

            <div class="row">
              <div class="input-field col s6">
                <input id="email" type="email" class="validate" />
                <label for="email">Email</label>
                <span
                  class="helper-text"
                  data-error="wrong"
                  data-success="right"
                ></span>
              </div>
            </div>
            <div class="row">
              <div class="input-field col s6">
                <textarea
                  id="textarea1"
                  class="materialize-textarea"
                ></textarea>
                <label for="textarea1">Send Me Message</label>
              </div>
            </div>
          </form>
        </div>

        <div class="footer-copyright">
          <div class="container">© 2014 Copyright </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;

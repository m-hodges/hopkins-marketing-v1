import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import useWindowSize from "../hooks/useWindowSize";
import { MdMenu } from "react-icons/md";
import classnames from "classnames";

type Props = {
  isHeaderVisible: boolean;
};

const Header = ({ isHeaderVisible }: Props) => {
  const [dropDownVisibility, setDropdownVisibility] = useState(false);
  const [width, height] = useWindowSize();
  return (
    <>
      <div
        className={classnames("header", dropDownVisibility && "header__active")}
      >
        {width <= 600 ? (
          <>
            <MdMenu
              size={36}
              className={classnames(
                "header--burger",
                dropDownVisibility && "header--burger__active"
              )}
              onClick={() => {
                setDropdownVisibility(!dropDownVisibility);
              }}
            />
            {dropDownVisibility && <NavLinks />}
          </>
        ) : (
          <>
            <div
              className={
                isHeaderVisible
                  ? "header--background header--background__backgroundVisible"
                  : "header--background"
              }
            ></div>
            {width > 600 && isHeaderVisible && (
              <>
                <a href="#" className="header--brand">
                  <img
                    src="/images/hopkins-marketing-logo.png"
                    alt="Hopkins Marketing Group"
                    className="header--brand__logo"
                  />
                  <span>Hopkins Marketing Group</span>
                </a>
              </>
            )}
            <NavLinks />
          </>
        )}
      </div>
    </>
  );
};

function NavLinks() {
  return (
    <div className="header--linkContainer">
      <NavLink
        to="/"
        exact={true}
        activeClassName="activeNavLink"
        className="header--link"
      >
        Home
      </NavLink>
      <NavLink
        to="/about"
        activeClassName="activeNavLink"
        className="header--link"
      >
        About
      </NavLink>
      <NavLink
        to="/services"
        activeClassName="activeNavLink"
        className="header--link"
      >
        Services
      </NavLink>
      <NavLink
        to="/clients"
        activeClassName="activeNavLink"
        className="header--link"
      >
        Clients
      </NavLink>
      <NavLink
        to="/contact"
        activeClassName="activeNavLink"
        className="header--link"
      >
        Contact
      </NavLink>
    </div>
  );
}
export default Header;

import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import useWindowSize from "../hooks/useWindowSize";
import { MdMenu } from "react-icons/md";
import classnames from "classnames";

type Props = {
  isHeaderVisible: boolean;
};

const Header = ({ isHeaderVisible }: Props) => {
  const [dropdownVisibility, setDropdownVisibility] = useState(false);
  const [width, height] = useWindowSize();
  return (
    <>
      <div
        className={classnames("header", dropdownVisibility && "header__active")}
      >
        {width <= 600 ? (
          <>
            <MdMenu
              size={36}
              className={classnames(
                "header--burger",
                dropdownVisibility && "header--burger__active"
              )}
              onClick={() => {
                setDropdownVisibility(!dropdownVisibility);
              }}
            />
            {dropdownVisibility && (
              <NavLinks setDropdownVisibility={setDropdownVisibility} />
            )}
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

type NavLinkProps = {
  setDropdownVisibility?: (arg: boolean) => void;
};

function NavLinks({ setDropdownVisibility }: NavLinkProps) {
  const clickHandler = () => {
    if (setDropdownVisibility) {
      setDropdownVisibility(false);
    }
  };
  return (
    <div className="header--linkContainer">
      <NavLink
        to="/"
        exact={true}
        activeClassName="activeNavLink"
        className="header--link"
        onClick={clickHandler}
      >
        Home
      </NavLink>
      <NavLink
        to="/about"
        activeClassName="activeNavLink"
        className="header--link"
        onClick={clickHandler}
      >
        About
      </NavLink>
      <NavLink
        to="/services"
        activeClassName="activeNavLink"
        className="header--link"
        onClick={clickHandler}
      >
        Services
      </NavLink>
      <NavLink
        to="/clients"
        activeClassName="activeNavLink"
        className="header--link"
        onClick={clickHandler}
      >
        Clients
      </NavLink>
      <NavLink
        to="/contact"
        activeClassName="activeNavLink"
        className="header--link"
        onClick={clickHandler}
      >
        Contact
      </NavLink>
    </div>
  );
}
export default Header;

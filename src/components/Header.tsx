import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import useWindowSize from "../hooks/useWindowSize";
import { MdMenu } from "react-icons/md";
import classnames from "classnames";

type Props = {
  isHeaderVisible: boolean;
};

const Header = ({ isHeaderVisible }: Props) => {
  const [width, height] = useWindowSize();
  const [dropdownVisibility, setDropdownVisibility] = useState(false);
  const [dropdownAnimation, setDropdownAnimation] = useState(false);

  function clickHandler() {
    console.log(dropdownAnimation);
    setDropdownVisibility(!dropdownVisibility);
    if (!dropdownAnimation) {
      setTimeout(() => {
        setDropdownAnimation(true);
      }, 100);
    } else {
      setDropdownAnimation(false);
    }
  }

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
              onClick={clickHandler}
            />
            {dropdownVisibility && (
              <div
                className={classnames(
                  "dropdown",
                  dropdownAnimation && "dropdown--visible"
                )}
              >
                <NavLinks
                  setDropdownVisibility={setDropdownVisibility}
                  setDropdownAnimation={setDropdownAnimation}
                />
              </div>
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
                  <span className="header--link">Hopkins Marketing Group</span>
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
  setDropdownAnimation?: (arg: boolean) => void;
};

function NavLinks({
  setDropdownVisibility,
  setDropdownAnimation
}: NavLinkProps) {
  const clickHandler = () => {
    if (setDropdownVisibility) {
      setDropdownVisibility(false);
    }
    if (setDropdownAnimation) {
      setDropdownAnimation(false);
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

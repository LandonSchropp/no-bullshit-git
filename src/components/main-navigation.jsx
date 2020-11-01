import { slide as Menu } from "react-burger-menu";
import AnchorLink from "react-anchor-link-smooth-scroll";
import React, { useState } from "react";
import classNames from "classnames";
import useScrollPosition from "@react-hook/window-scroll";

import { Logo } from "./logo";
import close from "../images/icons/x.svg";
import hamburger from "../images/icons/hamburger.svg";

const NAVIGATIN_OFFSET = 76;

export function MainNavigation({ className }) {
  let [ open, setOpen ] = useState(false);
  const scrollY = useScrollPosition();

  let combinedClassName = classNames(
    "main-navigation",
    { "main-navigation--scrolled": scrollY !== 0 },
    className
  );

  let hamburgerIcon = <img className="main-navigation__menu-icon" src={ hamburger } alt="Menu" />;
  let closeIcon = <img className="main-navigation__close-icon" src={ close } alt="Close" />;

  let closeMenu = () => {
    setOpen(false);
  };

  let menuItems = <>
    <AnchorLink
      offset={ NAVIGATIN_OFFSET }
      className="main-navigation__link"
      href="#learn"
      onClick={ closeMenu }
    >
      Learn
    </AnchorLink>

    <AnchorLink
      offset={ NAVIGATIN_OFFSET }
      className="main-navigation__link"
      href="#benefits"
      onClick={ closeMenu }
    >
      Benefits
    </AnchorLink>

    <AnchorLink
      offset={ NAVIGATIN_OFFSET }
      className="main-navigation__link"
      href="#faq"
      onClick={ closeMenu }
    >
      FAQ
    </AnchorLink>

    <AnchorLink
      offset={ NAVIGATIN_OFFSET }
      className="main-navigation__link"
      href="#pricing"
      onClick={ closeMenu }
    >
      Pricing
    </AnchorLink>

    <AnchorLink
      className="main-navigation__button button"
      href="#download"
      onClick={ closeMenu }
    >
      Get a Free Sample
    </AnchorLink>
  </>;

  // TODO: The main problem here is that the scrollable anchor elements that are passed in as
  // children eat the click events, preventing the menu from closing. :(
  //
  // The solution is to either hook into the DOM events of these elements directly, or figure out a
  // way to prevent this library from eating eventHs.
  return <nav className={ combinedClassName }>
    <a className="main-navigation__title" href="/">
      <Logo className="main-navigation__logo" />
      No Bullshit Git
    </a>

    <div className="main-navigation__items">
      { menuItems }
    </div>

    <Menu
      isOpen={ open }
      onStateChange={ ({ isOpen }) => setOpen(isOpen) }
      pageWrapId="main__content"
      outerContainerId="main"
      customBurgerIcon={ hamburgerIcon }
      customCrossIcon={ closeIcon }
      noOverlay
      disableAutoFocus
    >
      { menuItems }
    </Menu>
  </nav>;
}

import { slide as Menu } from "react-burger-menu";
import AnchorLink from "react-anchor-link-smooth-scroll";
import React, { useState } from "react";
import classNames from "classnames";
import useScrollPosition from "@react-hook/window-scroll";

import { Logo } from "./logo";
import { MobileNavigationItems } from "./mobile-navigation-items";
import hamburger from "../images/icons/hamburger.svg";

const NAVIGATIN_OFFSET = 76;

function DesktopNavigationItems({ onClick }) {
  return <>
    <AnchorLink
      offset={ NAVIGATIN_OFFSET }
      className="main-navigation__link"
      href="#learn"
      onClick={ onClick }
    >
      Learn
    </AnchorLink>

    <AnchorLink
      offset={ NAVIGATIN_OFFSET }
      className="main-navigation__link"
      href="#benefits"
      onClick={ onClick }
    >
      Benefits
    </AnchorLink>

    <AnchorLink
      offset={ NAVIGATIN_OFFSET }
      className="main-navigation__link"
      href="#faq"
      onClick={ onClick }
    >
      FAQ
    </AnchorLink>

    <AnchorLink
      offset={ NAVIGATIN_OFFSET }
      className="main-navigation__link"
      href="#pricing"
      onClick={ onClick }
    >
      Pricing
    </AnchorLink>

    <AnchorLink
      className="main-navigation__button button"
      href="#download"
      onClick={ onClick }
    >
      Get a Free Sample
    </AnchorLink>
  </>;
}

export function MainNavigation({ className }) {
  let [ open, setOpen ] = useState(false);
  const scrollY = useScrollPosition();

  let combinedClassName = classNames(
    "main-navigation",
    { "main-navigation--scrolled": scrollY !== 0 },
    className
  );

  let hamburgerIcon = <img className="main-navigation__menu-icon" src={ hamburger } alt="Menu" />;

  return <nav className={ combinedClassName }>
    <a className="main-navigation__title" href="/">
      <Logo className="main-navigation__logo" />
      No Bullshit Git
    </a>

    <div className="main-navigation__items">
      <DesktopNavigationItems onClick={ () => setOpen(false) } />
    </div>

    <Menu
      isOpen={ open }
      onStateChange={ ({ isOpen }) => setOpen(isOpen) }
      pageWrapId="main__content"
      outerContainerId="main"
      customBurgerIcon={ hamburgerIcon }
      customCrossIcon={ false }
      itemListClassName="mobile-navigation-items__items"
      className="mobile-navigation-items"
      noOverlay
      disableAutoFocus
    >
      <MobileNavigationItems onClick={ () => setOpen(false) } />
    </Menu>
  </nav>;
}

import { slide as Menu } from "react-burger-menu";
import AnchorLink from "react-anchor-link-smooth-scroll";
import React, { useState } from "react";
import classNames from "classnames";
import useScrollPosition from "@react-hook/window-scroll";

import _ from "lodash";

import { LANDING_PAGE_SECTIONS } from "../hooks/landing-page-data";
import { Logo } from "./logo";
import { findImage, importHash } from "../../lib/import";
import hamburger from "../images/icons/hamburger.svg";

const images = importHash(require.context("../images/navigation-icons", false, /\.svg$/));

const NAVIGATIN_OFFSET = 76;

function MobileNavigationItems({ onClick }) {
  let sections = _.slice(LANDING_PAGE_SECTIONS, 1).map(({ header, anchor }) => {

    return <AnchorLink
      key={ header }
      offset={ NAVIGATIN_OFFSET }
      className="main-navigation__menu-link"
      href={ `#${ anchor }` }
      onClick={ onClick }
    >
      <img
        className="main-navigation__menu-icon"
        src={ findImage(images, anchor) }
        alt={ header }
      />
      { header }
    </AnchorLink>;
  });

  return [
    ...sections,
    <div
      key="get-your-copy"
      className="main-navigation__menu-call-to-action"
    >
      <AnchorLink
        className="button main-navigation__menu-button"
        href="#pricing"
        onClick={ onClick }
      >
        Get Your Copy
      </AnchorLink>
    </div>,
    <p key="questions" className="main-navigation__menu-questions">
      Questions? Reach out to <a href="mailto:schroppl@gmail.com">schroppl@gmail.com</a>.
    </p>
  ];
}

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
      noOverlay
      disableAutoFocus
    >
      <MobileNavigationItems onClick={ () => setOpen(false) } />
    </Menu>
  </nav>;
}

import { slide as Menu } from "react-burger-menu";
import AnchorLink from "react-anchor-link-smooth-scroll";
import React, { useState, useEffect } from "react";
import classNames from "classnames";
import useScrollPosition from "@react-hook/window-scroll";
import { useLocation } from "@reach/router";

import { Logo } from "./logo";
import { MobileNavigationItems } from "./mobile-navigation-items";
import hamburger from "../images/icons/hamburger.svg";

// BUG FIX: This is a workaround for an issue with react-anchor-link-smooth-scroll:
// https://github.com/mauricevancooten/react-anchor-link-smooth-scroll/issues/36.
function Anchor({ children, href, ...props }) {
  let location = useLocation();

  return location.pathname === "/"
    ? <AnchorLink href={ href.replace(/^\//, "") } { ...props }>{ children }</AnchorLink>
    : <a href={ href } { ...props }>{ children }</a>;
}

// NOTE: It's very difficult to determine the navigation height computationally. I'm hardcoding it
// instead.
const NAVIGATIN_OFFSET = 60;

function DesktopNavigationItems({ onClick }) {
  return <>

    <Anchor
      offset={ NAVIGATIN_OFFSET }
      className="main-navigation__link"
      href="/#benefits"
      onClick={ onClick }
    >
      Why Itʼs Different
    </Anchor>

    <Anchor
      offset={ NAVIGATIN_OFFSET }
      className="main-navigation__link"
      href="/#learn"
      onClick={ onClick }
    >
      What Youʼll Learn
    </Anchor>

    <Anchor
      className="main-navigation__link"
      href="/#author"
      onClick={ onClick }
    >
      About the Author
    </Anchor>

    <Anchor
      offset={ NAVIGATIN_OFFSET }
      className="main-navigation__link"
      href="/#pricing"
      onClick={ onClick }
    >
      Pricing
    </Anchor>

    <a
      className="main-navigation__button button"
      href="/free-intro-course"
      onClick={ onClick }
    >
      <em>Free</em> Intro Course
    </a>
  </>;
}

export function MainNavigation({ className }) {
  let [ open, setOpen ] = useState(false);
  const scrollY = useScrollPosition();

  // BUG FIX: These three lines below fix a bug where the main navigation wouldn't display a
  // background when the page was refresh while scrolled. Fore more information, check out this
  // article: https://joshwcomeau.com/react/the-perils-of-rehydration/.
  const [ mounted, setMounted ] = useState(false);
  useEffect(() => setMounted(true));
  if (!mounted) { return null; }

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
      burgerButtonClassName="main-navigation__menu-button"
      className="mobile-navigation-items"
      noOverlay
      disableAutoFocus
    >
      <MobileNavigationItems onClick={ () => setOpen(false) } />
    </Menu>
  </nav>;
}

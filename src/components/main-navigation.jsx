import AnchorLink from "react-anchor-link-smooth-scroll";
import React from "react";
import classNames from "classnames";
import useScrollPosition from "@react-hook/window-scroll";

import { Logo } from "./logo";

const NAVIGATIN_OFFSET = 76;

export function MainNavigation() {
  const scrollY = useScrollPosition();
  let className = classNames("main-navigation", { "main-navigation--scrolled": scrollY !== 0 });

  return <nav className={ className }>
    <a className="main-navigation__title" href="/">
      <Logo className="main-navigation__logo" />
      No Bullshit Git
    </a>

    <AnchorLink offset={ NAVIGATIN_OFFSET } className="main-navigation__link" href="#why">
      Why?
    </AnchorLink>

    <AnchorLink offset={ NAVIGATIN_OFFSET } className="main-navigation__link" href="#benefits">
      Benefits
    </AnchorLink>

    <AnchorLink offset={ NAVIGATIN_OFFSET } className="main-navigation__link" href="#faq">
      FAQ
    </AnchorLink>

    <AnchorLink offset={ NAVIGATIN_OFFSET } className="main-navigation__link" href="#pricing">
      Pricing
    </AnchorLink>

    <AnchorLink className="main-navigation__button button" href="#download">
      Get a Free Sample
    </AnchorLink>
  </nav>;
}

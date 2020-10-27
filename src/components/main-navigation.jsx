import AnchorLink from "react-anchor-link-smooth-scroll";
import React from "react";

import { Logo } from "./logo";
import { Navigation } from "./navigation";

const NAVIGATIN_OFFSET = 76;

export function MainNavigation() {

  return <Navigation className="main-navigation">

    <a className="main-navigation__title" href="/">
      <Logo className="main-navigation__logo" />
      No Bullshit Git
    </a>

    <AnchorLink offset={ NAVIGATIN_OFFSET } className="main-navigation__link" href="#learn">
      Learn
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
  </Navigation>;
}

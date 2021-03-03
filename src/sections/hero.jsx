import AnchorLink from "react-anchor-link-smooth-scroll";
import React from "react";

import { useSectionData } from "../hooks/landing-page-data";
import logo from "../images/logo.svg";

export function Hero() {
  let data = useSectionData("Hero");

  return <header className="hero">
    <h1 className="hero__header">
      <img className="hero__logo" src={ logo } alt={ data.header } />
      { data.header }
    </h1>
    <p className="subhead hero__subhead">{ data.subhead }</p>
    <div className="call-to-action">
      <AnchorLink
        className="call-to-action__button button"
        href="#pricing"
      >
        Get the Course
      </AnchorLink>
      <a
        href="/free-intro-course"
        className="call-to-action__button button"
      >
        <em>Free</em> Intro Course
      </a>
    </div>
  </header>;
}

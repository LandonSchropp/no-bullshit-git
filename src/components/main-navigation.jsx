import React from "react";
import classNames from "classnames";
import useScrollPosition from "@react-hook/window-scroll";

export function MainNavigation() {
  const scrollY = useScrollPosition();
  let className = classNames("main-navigation", { "main-navigation--scrolled": scrollY !== 0 });

  return <nav className={ className }>
    <a className="main-navigation__title">No Bullshit Git</a>
    <a className="main-navigation__link" href="#pricing">Why?</a>
    <a className="main-navigation__link" href="#pricing">Benefits</a>
    <a className="main-navigation__link" href="#pricing">FAQ</a>
    <a className="main-navigation__link" href="#pricing">Pricing</a>
    <a className="main-navigation__button button" href="#pricing">Get a Free Sample</a>
  </nav>;
}

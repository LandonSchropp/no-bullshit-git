import React, { useState } from "react";
import classNames from "classnames";
import useScrollPosition from "@react-hook/window-scroll";

import _ from "lodash";

import hamburger from "../images/icons/hamburger.svg";

/**
 * This is a generic component that can be used to create menu-based navigation systems. This
 * component is responsible for controlling the responsive layout  of the items inside of it, but
 * not what those items are or how they're displayed.
 *
 * To use this component, simply put your content inside of it and set the class.
 *
 * ```
 * <Navigation className="my-awesome-navigation">
 *   <a href="#">My Awesome Site</a>
 *   <a href="#">Awesome Link 1</a>
 *   <a href="#">Awesome Link 2</a>
 *   <a href="#">Awesome Link 3</a>
 * </Navigation>
 *
 * Do *not* place the children in a container element or this component will no longer work.
 *
 * This component provides the `.navigation--open` and `navigation--scrolled` classes that can be
 * used to style the component. Please note that the `.navigation-open` class can be applied even in
 * desktop mode, but the mobile layout will not be applied to the component in this style.
 * ```
 */
export function Navigation({ className, children }) {
  let [ open, setOpen ] = useState(true);
  const scrollY = useScrollPosition();

  let combinedClassName = classNames(
    "navigation",
    {
      "navigation--open": open,
      "navigation--scrolled": scrollY !== 0
    },
    className
  );

  return <nav className={ combinedClassName }>
    { _.head(children) }

    <div className="navigation__items">
      { _.tail(children) }
    </div>

    <button type="button" className="navigation__menu-button" onClick={ () => setOpen(!open) }>
      <img className="navigation__menu-icon" src={ hamburger } alt="Menu" />
    </button>
  </nav>;
}

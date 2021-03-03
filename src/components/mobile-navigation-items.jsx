import AnchorLink from "react-anchor-link-smooth-scroll";
import React from "react";

import _ from "lodash";

import { LANDING_PAGE_SECTIONS } from "../hooks/landing-page-data";
import { findImage, importHash } from "../../lib/import";

const images = importHash(require.context("../images/navigation-icons", false, /\.svg$/));

// HACK: It's difficult to computationally determine this value. Instead, I'm hard-coding it.
const NAVIGATIN_OFFSET = 48;

function MobileNavigationItem({ header, anchor, onClick }) {
  return <AnchorLink
    key={ header }
    offset={ NAVIGATIN_OFFSET }
    className="mobile-navigation-items__link"
    href={ `#${ anchor }` }
    onClick={ onClick }
  >
    <img
      className="mobile-navigation-items__icon"
      src={ findImage(images, anchor) }
      alt={ header }
    />
    { header }
  </AnchorLink>;
}

/**
 * This styles the mobile navigation items. This component is a little strange because the
 * react-burger-menu library is responsible for supplying the parent component.
 */
export function MobileNavigationItems({ onClick }) {
  let sections = _
    .slice(LANDING_PAGE_SECTIONS, 1)
    .filter(({ header }) => !/intro course/i.test(header))
    .map((section) => {
      return <MobileNavigationItem
        { ...section }
        key={ section.header }
        onClick={ onClick }
      />;
    });

  return [
    ...sections,
    <div
      key="free-intro-course"
      className="mobile-navigation-items__call-to-action"
    >
      <a
        className="button mobile-navigation-items__button"
        href="/free-intro-course"
        onClick={ onClick }
      >
        Free Intro Course
      </a>
    </div>,
    <p key="questions" className="mobile-navigation-items__questions">
      Questions? Reach out to <a href="mailto:schroppl@gmail.com">schroppl@gmail.com</a>.
    </p>
  ];
}

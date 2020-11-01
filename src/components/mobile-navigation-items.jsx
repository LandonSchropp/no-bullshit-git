import AnchorLink from "react-anchor-link-smooth-scroll";
import React from "react";

import _ from "lodash";

import { LANDING_PAGE_SECTIONS } from "../hooks/landing-page-data";
import { findImage, importHash } from "../../lib/import";

const images = importHash(require.context("../images/navigation-icons", false, /\.svg$/));

// HACK: It's difficult to computationally determine this value. Instead, I'm hard-coding it.
const NAVIGATIN_OFFSET = 48;

/**
 * This styles the mobile navigation items. This component is a little strange because the
 * react-burger-menu library is responsible for supplying the parent component.
 */
export function MobileNavigationItems({ onClick }) {
  let sections = _.slice(LANDING_PAGE_SECTIONS, 1).map(({ header, anchor }) => {

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
  });

  return [
    ...sections,
    <div
      key="get-your-copy"
      className="mobile-navigation-items__call-to-action"
    >
      <AnchorLink
        className="button mobile-navigation-items__button"
        href="#pricing"
        onClick={ onClick }
      >
        Get Your Copy
      </AnchorLink>
    </div>,
    <p key="questions" className="mobile-navigation-items__questions">
      Questions? Reach out to <a href="mailto:schroppl@gmail.com">schroppl@gmail.com</a>.
    </p>
  ];
}

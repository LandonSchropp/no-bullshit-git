import React from "react";
import classNames from "classnames";

import { useSectionData } from "../hooks/landing-page-data";
import shield from "../images/icons/shield.png";
import lock from "../images/icons/lock.png";

function Tier({ tier: { header, price, discountedPrice, dimensions } }) {
  return <div className="tier">
    <h3 className="tier__header">{ header }</h3>
    <p className="tier__price">
      <strike className="tier__regular-price">{ price }</strike>
      { " " }
      <span className="tier__discounted-price">{ discountedPrice }</span>
    </p>
    <ul className="icon-list icon-list--check">
      {
        dimensions.map(({ text, checked }) => {
          let className = classNames("icon-list__item", { "icon-list__item--unchecked": !checked });
          return <li className={ className } key={ text }>{ text }</li>;
        })
      }
    </ul>

    { /* TODO: Figure out how to place this somewhere better. */ }
    <div className="call-to-action">
      <a
        className="button"
        data-gumroad-params="email=sahil@gumroad.com&price=10"
        href="https://gum.co/no-bullshit-git"
      >
        Purchase
      </a>
    </div>
  </div>;
}

export function Pricing() {
  let data = useSectionData(/pricing/i);

  return <section className="pricing" id="pricing">
    <h2>{ data.header }</h2>

    <p className="subhead">
      <img className="inline-icon" src={ shield } />
      { " " }
      { data.guarantee }
    </p>

    <p className="pricing__discount">{ data.discount }</p>

    <div className="pricing__tiers tiers">
      {
        data.tiers.map(tier => <Tier key={ tier.header } tier={ tier } />)
      }
    </div>

    <p className="subhead">
      <img className="inline-icon" src={ lock } />
      { " " }
      { data.secure }
    </p>
  </section>;
}

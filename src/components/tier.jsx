import React from "react";
import classNames from "classnames";

export function Tier({ tier: { header, price, discountedPrice, dimensions } }) {

  // For some reason, Gumroad won't accept an unencoded plus character in the URL variant.
  let gumroadVariant = encodeURI(header).replace(/\+/g, "%2B");

  return <div className="tier">
    <h3 className="tier__header">{ header }</h3>
    <p className="tier__price">
      <strike className="tier__regular-price">{ price }</strike>
      { " " }
      <span className="tier__discounted-price">{ discountedPrice }</span>
    </p>
    <ul className="icon-list icon-list--pricing tier__list">
      {
        dimensions.map(({ text, checked }) => {
          let className = classNames("icon-list__item", {
            "icon-list__item--disabled": !checked,
            "tier__item--disabled": !checked
          });

          return <li className={ className } key={ text }>{ text }</li>;
        })
      }
    </ul>

    { /* TODO: Figure out how to place this somewhere better. */ }
    <div className="call-to-action tier__call-to-action">
      <a
        className="button"
        href={ `https://gum.co/no-bullshit-git?wanted=true&variant=${ gumroadVariant }` }
        rel="noreferrer"
      >
        Purchase
      </a>
    </div>
  </div>;
}

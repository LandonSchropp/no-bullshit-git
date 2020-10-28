import React from "react";
import classNames from "classnames";

export function Tier({ tier: { header, price, discountedPrice, dimensions } }) {
  return <div className="tier">
    <h3 className="tier__header">{ header }</h3>
    <p className="tier__price">
      <strike className="tier__regular-price">{ price }</strike>
      { " " }
      <span className="tier__discounted-price">{ discountedPrice }</span>
    </p>
    <ul className="icon-list icon-list--check tier__list">
      {
        dimensions.map(({ text, checked }) => {
          let className = classNames("icon-list__item", {
            "icon-list__item--unchecked": !checked,
            "tier__item--unchecked": !checked
          });

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

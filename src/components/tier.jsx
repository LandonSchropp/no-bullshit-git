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
  </div>;
}

import React from "react";

import { useSectionData } from "../hooks/landing-page-data";

export function Pricing() {
  let data = useSectionData(/pricing/i);

  return <section className="pricing">
    <h2 className="pricing__header">{ data.header }</h2>
    <p className="pricing__guarantee">{ data.guarantee }</p>
    <p className="pricing__discount">{ data.discount }</p>

    <div className="pricing__tiers tiers">
      {
        data.tiers.map(tier => {
          return <div className="tier" key={ tier.header }>
            <h3 className="tier__header">{ tier.header }</h3>
            <p className="tier__price">
              <strike className="tier__regular-price">{ tier.price }</strike>
              { " " }
              <span className="tier__discounted-price">{ tier.discountedPrice }</span>
            </p>
            <ul>
              {
                data.dimensions.map(dimension => <li key={ dimension }>{ dimension }</li>)
              }
            </ul>
            <button type="button">Purchase</button>
          </div>;
        })
      }
    </div>
  </section>;
}

import React from "react";

import { Tier } from "../components/tier";
import { useSectionData } from "../hooks/landing-page-data";
import lock from "../images/icons/lock.svg";
import shield from "../images/icons/shield.svg";

export function Pricing() {
  let data = useSectionData("Pricing");

  return <section className="pricing" id="pricing">
    <h2>{ data.header }</h2>

    <p className="subhead">
      <img className="inline-icon" src={ shield } alt="" />
      { " " }
      { data.guarantee }
    </p>

    <p className="pricing__discount">{ data.discount }</p>

    <div className="pricing__tiers tiers">
      {
        data.tiers.map(tier => <Tier key={ tier.header } tier={ tier } />)
      }
    </div>

    <p className="subhead pricing__secure">
      <img className="inline-icon" src={ lock } alt="" />
      { " " }
      { data.secure }
    </p>
  </section>;
}

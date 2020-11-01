import React from "react";

import { Benefit } from "../components/benefit";
import { useSectionData } from "../hooks/landing-page-data";

export function Benefits() {
  let data = useSectionData("benefits");

  return <section className="benefits" id="benefits">
    <h2>{ data.header }</h2>
    <p className="subhead benefits__subhead">{ data.subhead }</p>

    <div className="benefits__list">
      {
        data.list.map(benefit => <Benefit key={ benefit.header } benefit={ benefit } />)
      }
    </div>
  </section>;
}

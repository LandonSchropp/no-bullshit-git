import React from "react";

import { useSectionData } from "../hooks/landing-page-data";

export function Why() {
  let data = useSectionData(/why/i);

  return <section className="why">
    <h2>{ data.header }</h2>
    <p className="subhead why__subhead">{ data.subhead }</p>

    <ul className="icon-list">
      { data.list.map(item => <li className="icon-list__item" key={ item }>{ item }</li>) }
    </ul>
  </section>;
}

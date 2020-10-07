import React from "react";

import { useSectionData } from "../hooks/landing-page-data";

export function Why() {
  let data = useSectionData(/why/i);

  return <section className="why">
    <h2 className="why__header">{ data.header }</h2>
    <p className="why__subhead">{ data.subhead }</p>

    <ul>
      { data.list.map(item => <li key={ item } className="why__list-item">{ item }</li>) }
    </ul>
  </section>;
}

import React from "react";

import { useSectionData } from "../hooks/landing-page-data";

export function Learn() {
  let data = useSectionData(/learn/i);

  return <section className="learn">
    <h2>{ data.header }</h2>

    <ul className="learn-list">
      { data.list.map(item => <li key={ item } className="learn-list__item">{ item }</li>) }
    </ul>

    <p className="subhead">{ data.content[0] }</p>

    <div className="call-to-action">
      <button type="button">Download Sample</button>
    </div>
  </section>;
}

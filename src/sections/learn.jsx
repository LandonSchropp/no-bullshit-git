import React from "react";

import { useSectionData } from "../hooks/landing-page-data";

export function Learn() {
  let data = useSectionData(/learn/i);

  return <section className="learn">
    <h2 className="learn__header">{ data.header }</h2>

    <ul className="learn__list icon-list icon-list--check">
      {
        data.list.map(item => {
          return <li key={ item } className="icon-list__item learn__list-item">{ item }</li>;
        })
      }
    </ul>

    <p className="subhead">{ data.content[0] }</p>

    <div className="call-to-action">
      <button type="button">Download Sample</button>
    </div>
  </section>;
}

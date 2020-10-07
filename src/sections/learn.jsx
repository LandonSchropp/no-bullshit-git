import React from "react";

import { useSectionData } from "../hooks/landing-page-data";

export function Learn() {
  let data = useSectionData(/learn/i);

  return <section className="learn">
    <h2 className="learn__header">{ data.header }</h2>
    <p className="learn__subhead">{ data.subhead }</p>

    <ul>
      { data.list.map(item => <li key={ item } className="learn__list-item">{ item }</li>) }
    </ul>

    <p className="learn__paragraph">{ data.content[0] }</p>
  </section>;
}

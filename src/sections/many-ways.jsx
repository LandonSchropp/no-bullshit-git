import React from "react";

import { Way } from "../components/way";
import { useSectionData } from "../hooks/landing-page-data";

export function ManyWays() {
  let data = useSectionData(/many ways/i);

  return <section className="many-ways" id="many-ways">
    <h2>{ data.header }</h2>
    <p className="subhead many-ways__subhead">{ data.subhead }</p>

    <div className="many-ways__ways">
      {
        data.list.map(way => <Way key={ way.header } way={ way } />)
      }
    </div>
  </section>;
}

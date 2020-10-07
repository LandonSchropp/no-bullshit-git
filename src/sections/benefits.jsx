import React from "react";

import { useSectionData } from "../hooks/landing-page-data";

export function Benefits() {
  let data = useSectionData(/getting/i);

  return <section className="benefits">
    <h2 className="benefits__header">{ data.header }</h2>
    <p className="benefits__subhead">{ data.subhead }</p>

    {
      data.list.map(item => {
        return <div key={ item.header } className="benefit">
          <h3 className="benefit__header">{ item.header }</h3>
          <p className="benefit__content">{ item.content }</p>
        </div>;
      })
    }
  </section>;
}

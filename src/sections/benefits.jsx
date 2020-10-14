import React from "react";

import { useSectionData } from "../hooks/landing-page-data";

export function Benefits() {
  let data = useSectionData(/getting/i);

  return <section className="benefits">
    <h2>{ data.header }</h2>
    <p className="subhead benefits__subhead">{ data.subhead }</p>

    <div className="benefits__list">
      {
        data.list.map(item => {
          return <div key={ item.header } className="benefit">
            <img
              className="benefit__image"
              src="http://www.fillmurray.com/500/500"
              alt={ item.header }
            />
            <h3 className="benefit__header">{ item.header }</h3>
            <p className="benefit__content">{ item.content }</p>
          </div>;
        })
      }
    </div>
  </section>;
}

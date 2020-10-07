import React from "react";

import { useSectionData } from "../hooks/landing-page-data";

export function FAQ() {
  let data = useSectionData(/frequently asked questions/i);

  return <section className="faq">
    <h2 className="faq__header">{ data.header }</h2>

    {
      data.content.map((item, index) => {
        return index % 2 === 0
          ? <h3 key={ item }>{ item }</h3>
          : <p key={ item }>{ item }</p>;
      })
    }
  </section>;
}

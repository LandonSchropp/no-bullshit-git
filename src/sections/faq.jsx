import React from "react";

import { useSectionData } from "../hooks/landing-page-data";

export function FAQ() {
  let data = useSectionData(/frequently asked questions/i);

  return <section className="faq" id="faq">
    <h2 className="faq__header">{ data.header }</h2>

    {
      data.content.map((item, index) => {
        return index % 2 === 0
          ? <h3 className="faq__question" key={ item }>{ item }</h3>
          : <p className="faq__answer" key={ item }>{ item }</p>;
      })
    }
  </section>;
}

import React from "react";

import _ from "lodash";

import { useSectionData } from "../hooks/landing-page-data";
import landon from "../images/landon.jpg";

export function Author() {
  let data = useSectionData("Author");

  // Grabbing the paragraphs from the data gets a little weird here, but it's not worth changing the
  // HTML parsing for this one use case.
  return <section className="author" id="author">
    <h2 className="author__header">{ data.header }</h2>

    <div className="author__content">
      <img className="author__image" src={ landon } alt="Landon Schropp" />
      <p className="author__paragraph">{ data.subhead }</p>
      <p className="author__paragraph">{ _.head(data.content) }</p>
    </div>

  </section>;
}

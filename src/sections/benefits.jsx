import React from "react";
import _ from "lodash";

import { importHash } from "../../lib/import";
import { useSectionData } from "../hooks/landing-page-data";

const images = importHash(require.context("../images/benefits", false, /\.svg$/));

function findImage(benefitHeader) {
  return _.find(images, (image, path) => {
    let pathWords = path
      .replace(/\.\w*$/, "")
      .replace(/[^-\w]+/g, "")
      .split("-");

    return _.every(pathWords, word => _.includes(benefitHeader.toLowerCase(), word));
  });
}

function Benefit({ benefit: { header, content } }) {

  return <div key={ header } className="benefit">
    <img
      className="benefit__image"
      src={ findImage(header) }
      alt={ header }
    />
    <h3 className="benefit__header">{ header }</h3>
    <p className="benefit__content">{ content }</p>
  </div>;
}

export function Benefits() {
  let data = useSectionData(/getting/i);

  return <section className="benefits" id="benefits">
    <h2>{ data.header }</h2>
    <p className="subhead benefits__subhead">{ data.subhead }</p>

    <div className="benefits__list">
      {
        data.list.map(benefit => <Benefit key={ benefit.header } benefit={ benefit } />)
      }
    </div>
  </section>;
}

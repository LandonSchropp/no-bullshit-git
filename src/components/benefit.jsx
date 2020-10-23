import React from "react";

import { findImage, importHash } from "../../lib/import";

const images = importHash(require.context("../images/benefits", false, /\.svg$/));

export function Benefit({ benefit: { header, content } }) {

  return <div key={ header } className="benefit">
    <img
      className="benefit__image"
      src={ findImage(images, header) }
      alt={ header }
    />
    <h3 className="benefit__header">{ header }</h3>
    <p className="benefit__content">{ content }</p>
  </div>;
}

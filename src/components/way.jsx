import React from "react";

import { findImage, importHash } from "../../lib/import";

const images = importHash(require.context("../images/many-ways", false, /\.svg$/));

export function Way({ way: { header, content } }) {

  return <div key={ header } className="way">
    <img
      className="way__image"
      src={ findImage(images, header) }
      alt={ header }
    />
    <div className="way__description">
      <h3 className="way__header">{ header }</h3>
      <p className="way__content">{ content }</p>
    </div>
  </div>;
}

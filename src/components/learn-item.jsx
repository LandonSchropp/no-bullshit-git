import React from "react";

import { findImage, importHash } from "../../lib/import";

const images = importHash(require.context("../images/learn", false, /\.svg$/));

export function LearnItem({ content }) {

  return <div key={ content } className="learn-item">
    <img
      className="learn-item__image"
      src={ findImage(images, content) }
      alt={ content }
    />
    <p className="learn-item__content">{ content }</p>
  </div>;
}

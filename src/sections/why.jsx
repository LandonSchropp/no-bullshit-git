import React from "react";

import _ from "lodash";
import { renderToString } from "react-dom/server";

import { importHash } from "../../lib/import";
import { useSectionData } from "../hooks/landing-page-data";

const images = importHash(require.context("../images/learn", false, /\.svg$/));

function findImage(item) {
  return _.find(images, (image, path) => {
    let pathWords = path
      .replace(/\.\w*$/, "")
      .replace(/[^-\w]+/g, "")
      .split("-");

    return _.every(pathWords, word => _.includes(renderToString(item).toLowerCase(), word));
  });
}

function WhyItem({ content }) {

  return <div key={ content } className="why-item">
    <img
      className="why-item__image"
      src={ findImage(content) }
      alt={ content }
    />
    <p className="why-item__content">{ content }</p>
  </div>;
}

export function Why() {
  let data = useSectionData(/learn/i);

  let mainItems = _.slice(data.list, 0, 6);
  let secondaryItems = _.slice(data.list, 6);

  return <section className="why" id="why">
    <h2>{ data.header }</h2>
    <p className="subhead why__subhead">{ data.subhead }</p>

    <div className="why__why-items">
      {
        mainItems.map(item => <WhyItem key={ item } content={ item } />)
      }
    </div>

    <ul className="learn__list icon-list icon-list--check">
      {
        secondaryItems.map(item => {
          return <li key={ item } className="icon-list__item learn__list-item">{ item }</li>;
        })
      }
    </ul>
  </section>;
}

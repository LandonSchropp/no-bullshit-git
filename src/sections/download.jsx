import React from "react";

import _ from "lodash";

import { useSectionData } from "../hooks/landing-page-data";

const NUMBER_OF_LEAVES = 23;

export function Download() {
  let data = useSectionData("Download");

  return <section className="download" id="download">
    {
      _.times(NUMBER_OF_LEAVES, (index) => <span key={ index } className="download__leaf" />)
    }

    <h2>{ data.header }</h2>
    <p className="subhead">{ data.subhead }</p>

    <div className="call-to-action">
      <a href="/free-intro-course" className="button">{ data.content[0] }</a>
    </div>
  </section>;
}

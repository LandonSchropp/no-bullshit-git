import React from "react";

import { sectionData } from "../helpers/data-helper";

export function Hero() {
  let data = sectionData(/no bullshit/i);

  return <header className="hero">
    <h1 className="hero__header">{ data.header }</h1>
    <p className="hero__subhead">{ data.subhead }</p>
  </header>;
}

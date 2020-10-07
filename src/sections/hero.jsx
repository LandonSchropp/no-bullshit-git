import React from "react";

import { useSectionData } from "../hooks/landing-page-data";

export function Hero() {
  let data = useSectionData(/no bullshit/i);

  return <header className="hero">
    <h1 className="hero__header">{ data.header }</h1>
    <p className="hero__subhead">{ data.subhead }</p>
  </header>;
}

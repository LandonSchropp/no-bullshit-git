import React from "react";

import bull from "../images/icons/bull.svg";

import { useSectionData } from "../hooks/landing-page-data";

export function Hero() {
  let data = useSectionData(/no bullshit/i);

  return <header className="hero">
    <img className="hero__logo" src={ bull } alt="No Bullshit Git" />
    <h1 className="hero__header">{ data.header }</h1>
    <p className="subhead hero__subhead">{ data.subhead }</p>
    <div className="call-to-action">
      <button type="button">Get the Course</button>
    </div>
  </header>;
}

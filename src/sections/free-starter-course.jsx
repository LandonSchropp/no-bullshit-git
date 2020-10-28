import React from "react";

import logo from "../images/logo.svg";

import { useSectionData } from "../hooks/landing-page-data";

export function FreeStarterCourse() {
  let data = useSectionData(/git starter course/i);

  return <section className="free-starter-course">
    <img className="free-starter-course__logo" src={ logo } alt="No Bullshit Git" />

    <h1>{ data.header }</h1>
    <p className="subhead">{ data.subhead }</p>

    <form className="call-to-action">
      <label htmlFor="email">Enter Your Email</label>
      <input id="email" type="email" placeholder="tomhanks@example.com" />
      <p className="free-starter-course__reassurance">{ data.content[0] }</p>
      <button type="submit">Get the Course</button>
    </form>
  </section>;
}

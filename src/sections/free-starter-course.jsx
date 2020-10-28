import React from "react";

import logo from "../images/logo.svg";

import { useSectionData } from "../hooks/landing-page-data";

const FORM_URL = "https://landonschropp.us17.list-manage.com/subscribe/post" +
  "?u=26cdb7a71c42ac5b132805731&amp;id=6cc57c2787";

export function FreeStarterCourse() {
  let data = useSectionData(/git starter course/i);

  // HACK: This is a hack to insert non-breaking spaces in the header
  let header = <>
    The <em>Free</em> No&nbsp;Bullshit&nbsp;Git Stater Course
  </>;

  return <section className="free-starter-course">
    <img className="free-starter-course__logo" src={ logo } alt="No Bullshit Git" />

    <h1 className="free-starter-course__header">{ header }</h1>
    <p className="subhead">{ data.subhead }</p>

    <ul className="icon-list icon-list--white-check free-starter-course__list">
      { data.list.map(item => <li key={ item } className="icon-list__item">{ item }</li>) }
    </ul>

    <form className="call-to-action" action={ FORM_URL } method="post" target="_blank">
      <label htmlFor="email">Enter Your Email</label>
      <input id="email" type="email" name="EMAIL" placeholder="tomhanks@example.com" />
      <p className="free-starter-course__reassurance">{ data.content[0] }</p>

      <div className="free-starter-course__submit">
        <button type="submit">Get the Course</button>
      </div>
    </form>
  </section>;
}

import React from "react";

import { SignUpForm } from "../components/sign-up-form";
import { useSectionData } from "../hooks/landing-page-data";

export function FreeIntroCourse() {
  let data = useSectionData("FreeIntroCourse");

  // HACK: This is a hack to insert non-breaking spaces in the header
  let header = <>The <em>Free</em> { " " } No&nbsp;Bullshit&nbsp;Git Intro&nbsp;Course</>;

  return <section className="free-intro-course">
    <div className="free-intro-course__content">
      <h1 className="free-intro-course__header">{ header }</h1>
      <p className="subhead">{ data.subhead }</p>

      <SignUpForm />

      <ul className="icon-list icon-list--white-check free-intro-course__list">
        { data.list.map(item => <li key={ item } className="icon-list__item">{ item }</li>) }
      </ul>
    </div>
  </section>;
}

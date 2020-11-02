import React from "react";

import { SignUpForm } from "../components/sign-up-form";
import { useSectionData } from "../hooks/landing-page-data";

export function FreeStarterCourse() {
  let data = useSectionData("FreeStarterCourse");

  // HACK: This is a hack to insert non-breaking spaces in the header
  let header = <>The <em>Free</em> { " " } No&nbsp;Bullshit&nbsp;Git Starter&nbsp;Course</>;

  return <section className="free-starter-course">
    <h1 className="free-starter-course__header">{ header }</h1>
    <p className="subhead">{ data.subhead }</p>

    <ul className="icon-list icon-list--white-check free-starter-course__list">
      { data.list.map(item => <li key={ item } className="icon-list__item">{ item }</li>) }
    </ul>

    <SignUpForm />
  </section>;
}

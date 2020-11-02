import React from "react";

import { useSectionData } from "../hooks/landing-page-data";

const FORM_URL = "https://landonschropp.us17.list-manage.com/subscribe/post" +
  "?u=26cdb7a71c42ac5b132805731&amp;id=6cc57c2787";

export function SignUpForm() {
  let data = useSectionData("FreeStarterCourse");

  return <div className="sign-up-form">
    <h3 className="sign-up-form__header">Sign up for the Course</h3>

    <ul className="icon-list icon-list--check sign-up-form__list">
      { data.list.map(item => <li key={ item } className="icon-list__item">{ item }</li>) }
    </ul>

    <form className="sign-up-form__form" action={ FORM_URL } method="post" target="_blank">
      <label htmlFor="email">Email</label>
      <input id="email" type="email" name="EMAIL" placeholder="tomhanks@example.com" />
      <p className="sign-up-form__reassurance">{ data.content[0] }</p>

      <div className="sign-up-form__submit">
        <button
          className="button sign-up-form__submit-button"
          type="submit"
        >
          Get the Course
        </button>
      </div>
    </form>
  </div>;
}

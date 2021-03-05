import React from "react";

import { useSectionData } from "../hooks/landing-page-data";
import lock from "../images/icons/lock.svg";

const FORM_URL = "https://www.createsend.com/t/subscribeerror?description=";

const FORM_ID = "30FEA77E7D0A9B8D7616376B90063231D6D2946CD02F92CA7D9ABECC529431A98D06D8F1B3825D" +
  "CA95D7EF6B8B35AB10415E572538FED326846F465FD876B249";

export function SignUpForm() {
  let data = useSectionData("FreeIntroCourse");

  // NOTE: This HTML was mostly copied verbatim from Campaign Monitor. I specifically chose not to
  // alter it since they're including a script and I didn't know what effect changing the properties
  // would have.
  return <div className="sign-up-form box">
    <h3 className="sign-up-form__header">Sign Up</h3>

    <form className="js-cm-form" id="subForm" action={ FORM_URL } method="post" data-id={ FORM_ID }>
      <label className="sign-up-form__label" htmlFor="fieldEmail">Email</label>
      <input
        autoComplete="Email"
        type="email"
        aria-label="Email"
        className="js-cm-email-input qa-input-email sign-up-form__input"
        id="fieldEmail"
        name="cm-yhjkhjh-yhjkhjh"
        required
        placeholder="tomhanks@example.com"
      />
      <p className="sign-up-form__reassurance">
        <img className="inline-icon" src={ lock } />
        { " " }
        { data.content[0] }
      </p>
      <div className="sign-up-form__submit">
        <button className="button sign-up-form__submit-button" type="submit">
          Get the Course
        </button>
      </div>
    </form>
    <script
      type="text/javascript"
      src="https://js.createsend1.com/javascript/copypastesubscribeformlogic.js"
    />
  </div>;
}

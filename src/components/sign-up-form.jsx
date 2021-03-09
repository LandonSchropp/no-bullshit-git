import React, { useState } from "react";

import { useSectionData } from "../hooks/landing-page-data";
import lock from "../images/icons/lock.svg";

export function SignUpForm() {
  let data = useSectionData("FreeIntroCourse");
  const [ isFormSubmitted, setIsFormSubmitted ] = useState(false);

  // NOTE: This HTML was mostly copied verbatim from Campaign Monitor. I specifically chose not to
  // alter it since they're including a script and I didn't know what effect changing the properties
  // would have.
  return <div className="sign-up-form box">
    <h3 className="sign-up-form__header">Sign Up</h3>

    <form
      action="https://app.convertkit.com/forms/2104506/subscriptions"
      className="seva-form"
      method="post"
      data-sv-form="2104506"
      data-uid="5221024909"
      data-format="inline"
      data-version="5"
      data-options=""
      onSubmit={ () => setIsFormSubmitted(true) }
    >
      <label className="sign-up-form__label" htmlFor="fieldEmail">Email</label>
      <input
        autoComplete="Email"
        name="email_address"
        aria-label="Email"
        placeholder="tomhanks@example.com"
        required
        type="email"
      />
      <p className="sign-up-form__reassurance">
        <img className="inline-icon" src={ lock } />
        { " " }
        { data.content[0] }
      </p>
      <div className="sign-up-form__submit">
        <button
          className="button sign-up-form__submit-button"
          type="submit"
          data-element="submit"
          disabled={ isFormSubmitted }
        >
          Get the Course
        </button>
      </div>
    </form>

    <script src="https://f.convertkit.com/ckjs/ck.5.js" />
  </div>;
}

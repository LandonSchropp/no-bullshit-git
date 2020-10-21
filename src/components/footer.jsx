import React from "react";

export function Footer() {
  return <footer className="footer">
    <p className="footer__copyright">
      © { new Date().getFullYear() } Landon Schropp All Rights Reserved
    </p>
    <p className="footer__email">
      Questions? Send an email to
      { " " }
      <a className="footer__anchor" href="mailto:schroppl@gmail.com">schroppl@gmail.com</a>.
    </p>
  </footer>;
}

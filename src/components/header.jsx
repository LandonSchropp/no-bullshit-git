import React from "react";

import { useSectionData } from "../hooks/landing-page-data";

export function Header() {
  let data = useSectionData(/no bullshit/i);

  return <header>
    <p>{ data.header }</p>
  </header>;
}

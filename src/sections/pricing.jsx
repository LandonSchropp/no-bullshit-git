import React from "react";

import { useSectionData } from "../hooks/landing-page-data";

export function Pricing() {
  let data = useSectionData(/pricing/i);

  return <section className="pricing">
    <h2 className="pricing__header">{ data.header }</h2>
  </section>;
}

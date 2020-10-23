import React from "react";

import { Benefits } from "../sections/benefits";
import { Download } from "../sections/download";
import { FAQ } from "../sections/faq";
import { Hero } from "../sections/hero";
import { Layout } from "../components/layout";
import { Pricing } from "../sections/pricing";
import { SEO } from "../components/seo";
import { Why } from "../sections/why";

export default function IndexPage() {
  return <>
    <SEO />
    <Layout>
      <Hero />
      <Why />
      <Benefits />
      <FAQ />
      <Pricing />
      <Download />
    </Layout>
  </>;
}

import React from "react";

import { Benefits } from "../sections/benefits";
import { Download } from "../sections/download";
import { FAQ } from "../sections/faq";
import { Hero } from "../sections/hero";
import { Layout } from "../components/layout";
import { Learn } from "../sections/learn";
import { ManyWays } from "../sections/many-ways";
import { Pricing } from "../sections/pricing";
import { SEO } from "../components/seo";

export default function IndexPage() {
  return <>
    <SEO />
    <Layout>
      <Hero />
      <Learn />
      <Benefits />
      <FAQ />
      <ManyWays />
      <Pricing />
      <Download />
    </Layout>
  </>;
}

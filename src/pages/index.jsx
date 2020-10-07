import React from "react";

import { Benefits } from "../sections/benefits";
import { FAQ } from "../sections/faq";
import { Hero } from "../sections/hero";
import { Layout } from "../components/layout";
import { Learn } from "../sections/learn";
import { Pricing } from "../sections/pricing";
import { SEO } from "../components/seo";
import { Why } from "../sections/why";

const IndexPage = () =>
  <React.Fragment>
    <SEO />
    <Layout>
      <Hero />
      <Why />
      <Benefits />
      <Learn />
      <FAQ />
      <Pricing />
    </Layout>
  </React.Fragment>;

export default IndexPage;

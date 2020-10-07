import React from "react";

import { Benefits } from "../sections/benefits";
import { FAQ } from "../sections/faq";
import { Hero } from "../sections/hero";
import { Learn } from "../sections/learn";
import { Why } from "../sections/why";
import Layout from "../components/layout";
import SEO from "../components/seo";

const IndexPage = () =>
  <React.Fragment>
    <SEO title="No Bullshit Git" />
    <Layout>
      <Hero />
      <Why />
      <Benefits />
      <Learn />
      <FAQ />
    </Layout>
  </React.Fragment>;

export default IndexPage;

import React from "react";

import { Hero } from '../sections/hero';
import Layout from "../components/layout";
import SEO from "../components/seo";

const IndexPage = () =>
  <React.Fragment>
    <SEO title="No Bullshit Git" />
    <Layout>
      <Hero />
    </Layout>
  </React.Fragment>;

export default IndexPage;

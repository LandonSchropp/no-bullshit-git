import { kebabCase } from "voca";
import React from "react";

import _ from "lodash";

import { LANDING_PAGE_SECTIONS } from "../hooks/landing-page-data";
import { Layout } from "../components/layout";
import { SEO } from "../components/seo";
import { importHash } from "../../lib/import";

const sectionModules = importHash(require.context("../sections", false));

let sectionComponents = _.map(LANDING_PAGE_SECTIONS, section => {
  let module = _.find(
    sectionModules,
    (_module, key) => _.includes(key, kebabCase(section.component))
  );

  return {
    ...section,
    reactComponent: _.head(_.values(module))
  };
});

export default function IndexPage() {
  return <>
    <SEO />
    <Layout>
      {
        sectionComponents.map(({ reactComponent: Component, component }) => {
          return <Component key={ component } />;
        })
      }
    </Layout>
  </>;
}

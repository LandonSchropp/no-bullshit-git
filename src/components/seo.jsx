/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import { Helmet } from "react-helmet";
import PropTypes from "prop-types";
import React from "react";

import { useSectionData } from "../hooks/landing-page-data";

// NOTE: This can't be done as a component, because Helmet doesn't allow non-head components to be
// nested.
function createAnalyticsTags() {

  if (process.env.NODE_ENV !== "production") {
    return null;
  }

  return [
    <script key="first" async src="https://www.googletagmanager.com/gtag/js?id=G-N9GED0FRV8" />,
    <script key="second">
      {
        `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-N9GED0FRV8');
        `
      }
    </script>
  ];
}

export function SEO({ description, title }) {

  // Provide defaults for the data
  let data = useSectionData("Hero");

  /* eslint-disable no-param-reassign */
  title = title ?? data.header;
  description = description ?? data.subhead;
  /* eslint-enable no-param-reassign */

  return (
    <Helmet htmlAttributes={ { lang: "en" } }>
      <title>{ title }</title>
      <meta name="description" content={ description } />
      <meta property="og:title" content={ title } />
      <meta property="og:description" content={ description } />
      <meta property="og:type" content="website" />
      <meta property="og:image" content="https://nobullshitgit.com/open-graph.png" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:creator" content={ "@LandonSchropp" } />
      { createAnalyticsTags() }
    </Helmet>
  );
}

SEO.propTypes = {
  description: PropTypes.string,
  title: PropTypes.string
};

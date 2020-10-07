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

export function SEO({ description, title }) {

  // Provide defaults for the data
  let data = useSectionData(/no bullshit/i);

  /* eslint-disable no-param-reassign */
  title = title ?? data.header;
  description = description ?? data.subhead;
  /* eslint-enable no-param-reassign */

  return (
    <Helmet
      htmlAttributes={ { lang: "en" } }
      title={ title }
      meta={ [
        {
          name: `description`,
          content: description
        },
        {
          property: `og:title`,
          content: title
        },
        {
          property: `og:description`,
          content: description
        },
        {
          property: `og:type`,
          content: `website`
        },
        {
          name: `twitter:card`,
          content: `summary`
        },
        {
          name: `twitter:creator`,
          content: "@LandonSchropp"
        },
        {
          name: `twitter:title`,
          content: title
        },
        {
          name: `twitter:description`,
          content: description
        }
      ] }
    />
  );
}

SEO.propTypes = {
  description: PropTypes.string,
  title: PropTypes.string
};

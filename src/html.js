/* eslint-disable react/jsx-filename-extension */

import React from "react";
import PropTypes from "prop-types";

export default function HTML(props) {
  return (
    <html { ...props.htmlAttributes }>
      <head>
        <meta charSet="utf-8" />
        <meta httpEquiv="x-ua-compatible" content="ie=edge" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />

        <link
          rel="icon"
          type="image/png"
          href="/images/favicon.png"
        />

        { props.headComponents }
      </head>
      <body { ...props.bodyAttributes } id="__gatsby">
        { props.preBodyComponents }

        { /* TODO: Figure out how to remove this element. Gatsby won't let me. */ }
        <div key="body" id="___gatsby" dangerouslySetInnerHTML={ { __html: props.body } } />

        { props.postBodyComponents }
      </body>
    </html>
  );
}

HTML.propTypes = {
  htmlAttributes: PropTypes.object,
  headComponents: PropTypes.array,
  bodyAttributes: PropTypes.object,
  preBodyComponents: PropTypes.array,
  body: PropTypes.string,
  postBodyComponents: PropTypes.array
};

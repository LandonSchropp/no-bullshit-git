import PropTypes from "prop-types";
import React from "react";

import { Footer } from "./footer";

import "normalize.css";
import "../stylesheets/index.sass";

export function Layout({ children }) {
  return <main>
    { children }
    <Footer />
  </main>;
}

Layout.propTypes = {
  children: PropTypes.node.isRequired
};

import PropTypes from "prop-types";
import React from "react";

import { Footer } from "./footer";
import { Header } from "./header";

import "normalize.css";
import "../stylesheets/index.sass";

export function Layout({ children }) {
  return (
    <>
      <main>
        <Header />
        { children }
        <Footer />
      </main>
    </>
  );
}

Layout.propTypes = {
  children: PropTypes.node.isRequired
};

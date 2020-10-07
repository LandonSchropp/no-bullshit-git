import PropTypes from "prop-types";
import React from "react";

import { Footer } from "./footer";
import { Header } from "./header";

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

import "normalize.css";

import "../stylesheets/index.sass";

import PropTypes from "prop-types";
import React from "react";

import { Footer } from "./footer";
import { MainNavigation } from "./main-navigation";
import { MobileCTA } from "../sections/mobile-cta";

export function Layout({ children }) {
  return <main>
    <MainNavigation />
    { children }
    <MobileCTA />
    <Footer />
  </main>;
}

Layout.propTypes = {
  children: PropTypes.node.isRequired
};

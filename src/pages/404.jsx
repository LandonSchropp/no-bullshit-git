import React from "react";

import { Layout } from "../components/layout";
import { SEO } from "../components/seo";
import { Box } from "../components/box";

export default function PageNotFound404() {
  return <>
    <SEO
      title="No BullShit Git - 404 Not Found"
      description="The page you were looking for couldn't be found."
    />
    <Layout fullScreen>
      <section className="page-not-found">

        <Box>
          <h1 className="page-not-found__header">404</h1>
          <p>The page you were looking for couldn’t be found.</p>
          <a className="button" href="/">Go to Main Page</a>
        </Box>
      </section>
    </Layout>
  </>;
}

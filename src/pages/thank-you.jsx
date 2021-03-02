import React from "react";

import { Layout } from "../components/layout";
import { SEO } from "../components/seo";
import { Box } from "../components/box";

export default function ThankYou() {
  return <>
    <SEO
      title="No BullShit Git - Thank You!"
      description="Thank you for purchasing No Bullshit Git!"
    />
    <Layout fullScreen>
      <section className="page-not-found">

        <Box>
          <h1 className="page-not-found__header">Thank You!</h1>
          <p>
            Thank you for preordering No Bullshit Git! Your purchase will be delivered on May 3. If
            you have any questions in the meantime, please don’t hesitate to reach out at
            { " " }
            <a href="mailto:schroppl@gmail.com">schroppl@gmail.com</a>.
          </p>
          <a className="button" href="/">Go to Main Page</a>
        </Box>
      </section>
    </Layout>
  </>;
}

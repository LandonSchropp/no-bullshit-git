import React from "react";

import { Layout } from "../components/layout";
import { SEO } from "../components/seo";
import { Box } from "../components/box";

export default function ThankYou() {
  return <>
    <SEO
      title="No BullShit Git - Thank You!"
      description="Thanks for signing up for the No Bullshit Git Free Intro Course!"
    />
    <Layout fullScreen>
      <section className="page-not-found">

        <Box>
          <h1 className="page-not-found__header">Thank You!</h1>
          <p>
            Thanks for signing up for the No Bullshit Git <em>Free</em> Intro Course! You’ll receive
            your first lesson in your inbox shortly. I hope you enjoy the course!
          </p>
          <a className="button" href="/">Go to Main Page</a>
        </Box>
      </section>
    </Layout>
  </>;
}

import React from "react";

import { Layout } from "../components/layout";
import { SEO } from "../components/seo";
import { FreeIntroCourse as FreeIntroCourseSection } from "../sections/free-intro-course";

export default function FreeIntroCourse() {
  return <>
    <SEO
      title="No BullShit Git - Free Intro Course"
      description={
        "A completely free, no-bullshit email course designed to take your Git skills to the " +
          "next level."
      }
    />
    <Layout fullScreen>
      <FreeIntroCourseSection />
    </Layout>
  </>;
}

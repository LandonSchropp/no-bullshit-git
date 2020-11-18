import React from "react";

import { Layout } from "../components/layout";
import { SEO } from "../components/seo";
import { FreeStarterCourse as FreeStarterCourseSection } from "../sections/free-starter-course";

export default function FreeStarterCourse() {
  return <>
    <SEO
      title="No BullShit Git - Free Starter Course"
      description={
        "A completely free, no-bullshit email course designed to take your Git skills to the " +
          "next level."
      }
    />
    <Layout fullScreen>
      <FreeStarterCourseSection />
    </Layout>
  </>;
}

import React from "react";

import { Layout } from "../components/layout";
import { SEO } from "../components/seo";
import { FreeStarterCourse as FreeStarterCourseSection } from "../sections/free-starter-course";

export default function FreeStarterCourse() {
  return <>
    <SEO />
    <Layout fullScreen>
      <FreeStarterCourseSection />
    </Layout>
  </>;
}

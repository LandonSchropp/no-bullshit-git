import { useStaticQuery, graphql } from "gatsby";

export function useSiteURL() {
  return useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          siteUrl
        }
      }
    }
  `).site.siteMetadata.siteUrl;
}

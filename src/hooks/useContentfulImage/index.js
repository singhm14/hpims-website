// Libraries
import { useStaticQuery, graphql } from 'gatsby'

export default (assetUrl) => {
  const allContentfulAssets = useStaticQuery(graphql`
    query {
      allContentfulAsset {
        nodes {
          file {
            url
          }
          fluid(maxWidth: 640, quality: 100) {
            ...GatsbyContentfulFluid_withWebp
          }
        }
      }
    }
  `)

  return allContentfulAssets.allContentfulAsset.nodes.find((node) => node.file.url === assetUrl).fluid
}

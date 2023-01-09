// Libraries
import { useStaticQuery, graphql } from "gatsby";

const useContentfulImage = (assetUrl) => {
  const allContentfulAssets = useStaticQuery(graphql`
    query {
      allContentfulAsset {
        nodes {
          file {
            url
          }
          gatsbyImageData(width: 640, quality: 100)
        }
      }
    }
  `);

  return allContentfulAssets.allContentfulAsset.nodes.find(
    (node) => node.file.url === assetUrl
  ).fluid;
};

export default useContentfulImage;

import * as React from "react"
import { graphql } from "gatsby"

// styles

// markup
const Home = ({data}) => {
  const {title, description} = data.site.siteMetadata
  return (
    <div>
      <title>Home Page</title>
      <h1>{title}</h1>
      <p>{description}</p>
      <img alt="umaru-chan" src={data.image.publicURL} />
    </div>
  )
}

export const pageQuery = graphql `
  query MetadataQuery {
    site {
      siteMetadata {
        title
        description
      }
    }

    image: file(base: { eq: "umaru2.gif" }) {
      publicURL
    }
  }
`

export default Home

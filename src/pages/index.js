import * as React from "react"
import { graphql, Link } from "gatsby"

// study from https://blog.logrocket.com/creating-a-gatsby-blog-from-scratch/
// styles

// markup
const Home = ({data}) => {
  const {title, description} = data.site.siteMetadata
  return (
    <div>
      <title>Home Page</title>
      <h1>{title}</h1>
      <p>{description}</p>
      <Link to='/blog'>
        <h2>Blogs</h2>
      </Link>
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

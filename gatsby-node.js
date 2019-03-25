const path = require('path')

exports.createPages = async ({ actions, graphql }) => {
  const { createPage } = actions

  const blogPostTemplate = path.resolve(`src/templates/BlogPost.js`)

  const { data } = await graphql(`
    {
      wp {
        posts {
          edges {
            node {
              slug
            }
          }
        }
      }
    }
  `)

  data.wp.posts.edges.forEach(({ node }, index) => {
    const posts = data.wp.posts.edges
    const previous = index === posts.length - 1 ? null : posts[index + 1].node
    const next = index === 0 ? null : posts[index - 1].node

    createPage({
      path: `blog/${node.slug}`,
      component: blogPostTemplate,
      context: {
        slug: node.slug,
        previous,
        next
      }
    })
  })
}
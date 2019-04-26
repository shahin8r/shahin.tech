import React from 'react'

import Layout from '../layout'
import SEO from '../components/SEO'
import ChromeAudit from '../images/chrome_audit.jpg'

export default () => (
  <Layout siteTitle="Made with and for <strong>open source</strong>.">
    <SEO />
    <h2>Want juicy tech details?</h2>

    <p>This website is built with <a href="https://www.gatsbyjs.org/">Gatsby</a>. A wonderful new framework based on React. You might have wondered how this site is so blazing fast? Well, thank Gatsby for that. Gatsby is a static site generator which means it creates static HTML files that loads blazing fast in the browser.</p>
    <p>I'm using WordPress as a headless CMS and pulling the data into my Gatsby website - which in turn turns all the data into static HTML pages. Like magic!</p>

    <h2>How the WordPress headless CMS is set up</h2>
    <p>All the data is pulled with the new hip query language GraphQL. Thanks to a plugin named WP GraphQL it was easy to get started.</p>
    <p>For all the projects that you can see in the Work section on this website, I just created a Custom Post Type with some Custom Fields and then I needed to hook in those custom fields into WP GrahpQL to be able to query it with GraphQL.</p>
    <p>For the blog it was just a matter of writing the queries in GraphQL to fetch the blog posts - couldn't been much easier.</p>

    <h2>The result</h2>
    <img src={ChromeAudit} alt="Performance scores" />
    <p>With this simple and super-fun-to-build setup we have a site that not only feels fast, it's also giving us some incredible performance scores. Have a look at those numbers!</p>

    <h2>Open source</h2>
    <p>If you're a developer or just a tech savvy person, feel free to <a href="https://github.com/shahin8r/shahin.tech">grab the open source code for the Gatsby site</a> and do whatever you want with it.</p>
  </Layout>
)
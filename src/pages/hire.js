import React from 'react'

import Availibility from '../utils/availibility'

import Layout from '../layout'
import SEO from '../components/SEO'

export default () => (
  <Layout siteTitle="Let's do some <strong>awesome</strong> work.">
    <SEO />
    <h2>No matter the task, JavaScript, WordPress or other tech, I'm always open to discuss what I can bring to the table.</h2>

    <p>Right now I'm fully booked but will be available as of {Availibility()} again.</p>

    <p>Send me an email at <a href="mailto:hello@shahin.tech?subject=Let us do some awesome work together!">hello@shahin.tech</a> or book a <a href="https://calendly.com/shahin-tech/30min">consultation call</a> and let's get the ball rolling.</p>
  </Layout>
)

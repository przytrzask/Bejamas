import React from "react"

import Layout from "../components/Layout"
import SEO from "../components/SEO"
import { BasketProvider } from "../components/Basket"

export default function NotFoundPage() {
  return (
    <BasketProvider>
      <Layout>
        <SEO title="404: Not found" />
        <h1>NOT FOUND</h1>
        <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
      </Layout>
    </BasketProvider>
  )
}

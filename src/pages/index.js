import React from "react"

import Layout from "../components/Layout"
import SEO from "../components/SEO"
import Hero from "../components/HomePage/Hero"
import ProductsList from "../components/HomePage/ProductsList"
import { Container } from "../components/Grid"
import { BasketProvider } from "../components/Basket"

export default function IndexPage() {
  return (
    <BasketProvider>
      <Layout>
        <SEO title="Home" />
        <Container>
          <Hero />
          <ProductsList />
        </Container>
      </Layout>
    </BasketProvider>
  )
}

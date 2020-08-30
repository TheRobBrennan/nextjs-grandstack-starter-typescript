import { NextPage } from "next"

import Layout from "../grandstack-demo/layout/Layout"
import Dashboard from "../grandstack-demo/components/Dashboard/Dashboard"

const DefaultPage: NextPage = () => {
  return (
    <Layout>
      <Dashboard />
    </Layout>
  )
}
export default DefaultPage

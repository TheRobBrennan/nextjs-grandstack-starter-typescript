import { NextPage } from "next"

import Layout from "../grandstack-demo/layout/Layout"
import UserList from "../grandstack-demo/components/UserList/UserList"

const UsersPage: NextPage = () => {
  return (
    <Layout>
      <UserList />
    </Layout>
  )
}
export default UsersPage

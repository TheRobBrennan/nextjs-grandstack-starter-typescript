import { FC } from "react"
import { useQuery } from "@apollo/react-hooks"
import gql from "graphql-tag"
import Link from "next/link"

// Components
import Title from "../Title/Title"

// Material UI
import { useStyles } from "./UserCount.styles"
import { Typography } from "@material-ui/core"

export const GET_USER_COUNT_QUERY = gql`
  {
    userCount
  }
`

const UserCount: FC = () => {
  const classes = useStyles()

  const { loading, error, data } = useQuery(GET_USER_COUNT_QUERY)
  if (error) return <p>Error</p>
  return (
    <>
      <Title>Total Users</Title>
      <Typography component="p" variant="h4">
        {loading ? "Loading..." : data.userCount}
      </Typography>
      <Typography color="textSecondary" className={classes.depositContext}>
        users found
      </Typography>
      <div>
        <Link href="/" passHref>
          <a className={classes.navLink}>View users</a>
        </Link>
      </div>
    </>
  )
}
export default UserCount

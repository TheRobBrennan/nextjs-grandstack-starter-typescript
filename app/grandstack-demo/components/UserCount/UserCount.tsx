import { FC } from "react"
import { useQuery } from "@apollo/react-hooks"
import gql from "graphql-tag"

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
  if (error) return <p>{error.message}</p>

  return (
    <>
      <Title>Total Users</Title>
      <Typography component="p" variant="h4">
        {loading ? "Loading..." : data.userCount}
      </Typography>
      <Typography color="textSecondary" className={classes.depositContext}>
        users found
      </Typography>
    </>
  )
}
export default UserCount

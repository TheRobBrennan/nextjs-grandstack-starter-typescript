import { FC } from "react"
import { useQuery } from "@apollo/react-hooks"
import gql from "graphql-tag"

// Components
import Title from "../Title/Title"

// Material UI
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from "@material-ui/core"

export const GET_RECENT_REVIEWS_QUERY = gql`
  {
    Review(first: 10, orderBy: date_desc) {
      user {
        name
      }
      business {
        name
      }
      date {
        formatted
      }
      text
      stars
    }
  }
`

const RecentReviews: FC = () => {
  const { loading, error, data } = useQuery(GET_RECENT_REVIEWS_QUERY)
  if (error) return <p>Error</p>
  if (loading) return <p>Loading</p>

  return (
    <>
      <Title>Recent Reviews</Title>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>Date</TableCell>
            <TableCell>Business Name</TableCell>
            <TableCell>User Name</TableCell>
            <TableCell>Review Text</TableCell>
            <TableCell align="right">Review Stars</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.Review.map((row) => (
            <TableRow key={`${row.user.name}-${row.date.formatted}`}>
              <TableCell>{row.date.formatted}</TableCell>
              <TableCell>{row.business.name}</TableCell>
              <TableCell>{row.user.name}</TableCell>
              <TableCell>{row.text}</TableCell>
              <TableCell align="right">{row.stars}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </>
  )
}
export default RecentReviews

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
    Reviews(options: { sort: [date_DESC] }) {
      date
      user {
        userId
        name
      }
      business {
        name
      }
      text
      stars
    }
  }
`

const RecentReviews: FC = () => {
  const { loading, error, data } = useQuery(GET_RECENT_REVIEWS_QUERY)
  if (loading) return <p>Loading</p>
  if (error) return <p>{error.message}</p>

  return (
    <>
      <Title>Recent Reviews</Title>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>Date</TableCell>
            <TableCell>Business</TableCell>
            <TableCell>User</TableCell>
            <TableCell>Review</TableCell>
            <TableCell align="right">Stars</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data?.Reviews.map((review) => (
            <TableRow
              key={`${review?.user?.name}-${review?.user?.userId}-${review?.date?.year?.low}-${review?.date?.month?.low}-${review?.date?.day?.low}`}
            >
              <TableCell>
                {`${review?.date?.year?.low}.${review?.date?.month?.low}.${review?.date?.day?.low}`}
              </TableCell>
              <TableCell>{review?.business?.name}</TableCell>
              <TableCell>{review?.user?.name}</TableCell>
              <TableCell>{review?.text}</TableCell>
              <TableCell align="right">{review?.stars?.low}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </>
  )
}
export default RecentReviews

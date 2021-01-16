/* istanbul ignore file */
import { FC } from "react"
import { useQuery } from "@apollo/react-hooks"
import gql from "graphql-tag"

// Components
import Title from "../Title/Title"

// Material UI
import { useTheme } from "@material-ui/core/styles"

// Chart
import {
  Bar,
  XAxis,
  YAxis,
  Label,
  ResponsiveContainer,
  BarChart,
} from "recharts"

// GraphQL
export const GET_DATA_QUERY = gql`
  {
    ratingsCount {
      stars
      count
    }
  }
`

interface IRatingsChart {
  width?: number | string
  height?: number | string
}

const RatingsChart: FC<IRatingsChart> = ({ width, height }) => {
  const theme = useTheme()
  const { loading, error, data } = useQuery(GET_DATA_QUERY)

  if (error) return <p>Error</p>
  if (loading) return <p>Loading</p>

  return (
    <>
      <Title>Ratings Distribution</Title>
      <ResponsiveContainer
        height={height ? height : "100%"}
        width={width ? width : "100%"}
      >
        <BarChart
          data={data.ratingsCount}
          margin={{
            top: 16,
            right: 16,
            bottom: 0,
            left: 24,
          }}
        >
          <XAxis dataKey="stars" stroke={theme.palette.text.secondary} />
          <YAxis stroke={theme.palette.text.secondary}>
            <Label
              angle={270}
              position="left"
              style={{ textAnchor: "middle", fill: theme.palette.text.primary }}
            >
              Count
            </Label>
          </YAxis>
          <Bar dataKey="count" fill={theme.palette.primary.main}></Bar>
        </BarChart>
      </ResponsiveContainer>
    </>
  )
}
export default RatingsChart

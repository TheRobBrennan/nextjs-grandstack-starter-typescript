import { FC, useState } from "react"
import { useQuery } from "@apollo/react-hooks"
import gql from "graphql-tag"

// Components
import Title from "../Title/Title"

// Material UI
import { useStyles } from "./UserList.styles"
import { useTheme } from "@material-ui/core/styles"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Tooltip,
  Paper,
  TableSortLabel,
  TextField,
} from "@material-ui/core"

export const GET_USER_LIST = gql`
  query usersPaginateQuery(
    $first: Int
    $offset: Int
    $orderBy: [_UserOrdering]
    $filter: _UserFilter
  ) {
    User(first: $first, offset: $offset, orderBy: $orderBy, filter: $filter) {
      id: userId
      name
      avgStars
      numReviews
    }
  }
`

const UserList: FC = () => {
  const theme = useTheme()
  const classes = useStyles(theme)
  const [order, setOrder] = useState("asc")
  const [orderBy, setOrderBy] = useState("name")
  const [page] = useState(0)
  const [rowsPerPage] = useState(10)
  const [filterState, setFilterState] = useState({ usernameFilter: "" })

  /* istanbul ignore next */
  const getFilter = () => {
    return filterState.usernameFilter.length > 0
      ? { name_contains: filterState.usernameFilter }
      : {}
  }

  const { loading, data, error } = useQuery(GET_USER_LIST, {
    variables: {
      first: rowsPerPage,
      offset: rowsPerPage * page,
      orderBy: orderBy + "_" + order,
      filter: getFilter(),
    },
  })

  /* istanbul ignore next */
  const handleSortRequest = (property) => {
    const newOrderBy = property
    let newOrder = "desc"

    if (orderBy === property && order === "desc") {
      newOrder = "asc"
    }

    setOrder(newOrder)
    setOrderBy(newOrderBy)
  }

  /* istanbul ignore next */
  const handleFilterChange = (filterName) => (event) => {
    const val = event.target.value

    setFilterState((oldFilterState) => ({
      ...oldFilterState,
      [filterName]: val,
    }))
  }

  /* istanbul ignore next */
  return (
    <Paper className={classes.root}>
      <Title>User List</Title>
      <TextField
        id="search"
        label="User Name Contains"
        className={classes.textField}
        value={filterState.usernameFilter}
        onChange={handleFilterChange("usernameFilter")}
        margin="normal"
        variant="outlined"
        type="text"
        InputProps={{
          className: classes.input,
        }}
      />
      {loading && !error && <p>Loading...</p>}
      {error && !loading && <p>Error</p>}
      {data && !loading && !error && (
        <Table className={classes.table}>
          <TableHead>
            <TableRow>
              <TableCell
                key="name"
                sortDirection={orderBy === "name" ? order : false}
              >
                <Tooltip title="Sort" placement="bottom-start" enterDelay={300}>
                  <TableSortLabel
                    active={orderBy === "name"}
                    direction={order}
                    onClick={() => handleSortRequest("name")}
                  >
                    Name
                  </TableSortLabel>
                </Tooltip>
              </TableCell>
              <TableCell
                key="avgStars"
                sortDirection={orderBy === "avgStars" ? order : false}
              >
                <Tooltip title="Sort" placement="bottom-end" enterDelay={300}>
                  <TableSortLabel
                    active={orderBy === "avgStars"}
                    direction={order}
                    onClick={() => handleSortRequest("avgStars")}
                  >
                    Average Stars
                  </TableSortLabel>
                </Tooltip>
              </TableCell>
              <TableCell
                key="numReviews"
                sortDirection={orderBy === "numReviews" ? order : false}
              >
                <Tooltip title="Sort" placement="bottom-start" enterDelay={300}>
                  <TableSortLabel
                    active={orderBy === "numReviews"}
                    direction={order}
                    onClick={() => handleSortRequest("numReviews")}
                  >
                    Number of Reviews
                  </TableSortLabel>
                </Tooltip>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.User.map((n) => {
              return (
                <TableRow key={n.id}>
                  <TableCell component="th" scope="row">
                    {n.name}
                  </TableCell>
                  <TableCell>
                    {n.avgStars ? n.avgStars.toFixed(2) : "-"}
                  </TableCell>
                  <TableCell>{n.numReviews}</TableCell>
                </TableRow>
              )
            })}
          </TableBody>
        </Table>
      )}
    </Paper>
  )
}
export default UserList

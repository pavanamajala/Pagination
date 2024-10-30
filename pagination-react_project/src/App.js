import {
  Grid,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
  TableHead,
  TableSortLabel,
  Paper,
} from '@mui/material';
import axios from 'axios';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(0); // Track the current page
  const [size] = useState(10); // Set the size of items per page
  const [loading, setLoading] = useState(false); // Track loading state
  const [hasMore, setHasMore] = useState(true); // Track if more data is available
  const [order, setOrder] = useState('asc'); // Sort order
  const [orderBy, setOrderBy] = useState('id'); // Column to sort by

  const columns = [
    { id: 'id', label: 'ID' },
    { id: 'name', label: 'Name' },
    { id: 'cost', label: 'Cost' },
    { id: 'quantity', label: 'Quantity' },
  ];

  const handleOnScroll = (event) => {
    const { scrollTop, scrollHeight, clientHeight } = event.target;
    if (Math.ceil(scrollTop) + clientHeight >= scrollHeight - 50 && hasMore && !loading) {
      loadMoreData(page, orderBy, order);
    }
  };

  const loadMoreData = (page, orderBy, order) => {
    if (!loading) {
      setLoading(true);
      axios
        .get(`http://localhost:9411/products/get-sort-page`, {
          params: {
            page,
            size,
            sortBy: orderBy,
            sortDirection: order,
          },
        })
        .then((response) => {
          if (response.data.length > 0) {
            const actualData = [...data, ...response.data];
            const uniqueData = actualData.filter((item, index, arr) => {
              return index === arr.findIndex(ele => item.id === ele.id);
            })
            setData(actualData);
            setPage((prevPage) => prevPage + 1); // Increment the page
          } else {
            setHasMore(false); // No more data to load
          }
        })
        .catch((error) => {
          console.error('Error fetching data:', error);
        })
        .finally(() => {
          setLoading(false);
        });
    }
  };

  const handleSort = (property) => {
    const isAsc = orderBy === property && order === 'asc';
    setOrder(isAsc ? 'desc' : 'asc');
    setOrderBy(property);
    setPage(0); // Reset to first page on sort
    setData([]); // Clear current data on sort
    loadMoreData(0, property, isAsc ? 'desc' : 'asc'); // Load sorted data
  };

  useEffect(() => {
    loadMoreData(0, "id", 'asc'); // Load initial data
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <Grid>
          <TableContainer onScroll={handleOnScroll} style={{ maxHeight: '400px', overflowY: 'auto' }}>
            <Paper>
              <Table stickyHeader>
                <TableHead>
                  <TableRow>
                    {columns.map((column) => (
                      <TableCell key={column.id}>
                        <TableSortLabel
                          active={orderBy === column.id}
                          direction={orderBy === column.id ? order : 'asc'}
                          onClick={() => handleSort(column.id)}
                        >
                          {column.label}
                        </TableSortLabel>
                      </TableCell>
                    ))}
                  </TableRow>
                </TableHead>
                <TableBody>
                  {data.map((row) => (
                    <TableRow key={row.id}>
                      <TableCell>{row.id}</TableCell>
                      <TableCell>{row.name}</TableCell>
                      <TableCell>{row.cost}</TableCell>
                      <TableCell>{row.quantity}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </Paper>
          </TableContainer>
        </Grid>
      </header>
    </div>
  );
}

export default App;

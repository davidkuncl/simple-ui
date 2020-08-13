import React, { useState, useEffect } from 'react';
import './App.css';

import AppBar from '@material-ui/core/AppBar';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Toolbar from '@material-ui/core/Toolbar';
// import Nav from './components/Nav'

function App() {
  const [data, setData] = useState({ drinks: [] });

  useEffect(() => {
    // const apiUrl = 'https://hn.algolia.com/api/v1/search?query=redux';
    // const apiUrl = 'http://localhost:3000/test';
    const apiUrl = 'http://simple-api-dk-my-project.apps-crc.testing/test';
    fetch(apiUrl)
      .then(response => response.json())
      .then(data => setData(data));
  });

  return (
    <div className="App">
      <AppBar position="static">
        <Toolbar>
          React Material UI Example
        </Toolbar>
      </AppBar>
      <br/><br/>
      <Paper elevation={3}>
        <Table size="small" >
          <TableHead>
            <TableRow>
              <TableCell>Date</TableCell>
              <TableCell>Name</TableCell>
              <TableCell align="right">Sale Amount</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.drinks.map(item => (
              <TableRow key={item.name}>
                <TableCell>{item.name}</TableCell>
                <TableCell>{item.type}</TableCell>
                <TableCell align="right">{item.cals}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Paper>
    </div>
  );
}

export default App;

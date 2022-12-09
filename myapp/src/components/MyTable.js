import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { Button } from '@mui/material'
import Paper from '@mui/material/Paper';
import { useSelector,useDispatch } from 'react-redux';
import {deleteUserSlice} from '../redux/slice/users';
import {setUserSlice} from '../redux/slice/user'




export default function MyTable() {
const rows=useSelector(state=>state.users)
const dispatch=useDispatch()
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell align="right">Email</TableCell>
            <TableCell align="right">Password</TableCell>
            <TableCell align="right">Edit</TableCell>
            <TableCell align="right">Delete</TableCell>
            
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.email}</TableCell>
              <TableCell align="right">{row.password}</TableCell>
              <TableCell align="right"> <Button  onClick={()=>(dispatch(setUserSlice(row)))} variant="outlined"  >Edit</Button>
              </TableCell>
              <TableCell align="right">  <Button onClick={()=>(dispatch(deleteUserSlice(row.id)))}  variant="outlined" >Delete</Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
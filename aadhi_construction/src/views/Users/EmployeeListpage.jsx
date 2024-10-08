import React, { useState, useEffect } from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, TablePagination, Typography, IconButton } from '@mui/material';
import { Link } from 'react-router-dom';
import QueueIcon from '@mui/icons-material/Queue';
import axios from 'axios';
import EmployeeAddpage from './EmployeeAddpage';

const EmployeeListPage = () => {
    const [employees, setEmployees] = useState([]);
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(10);
    const [totalCount, setTotalCount] = useState(0);
    const [openModal, setOpenModal] = useState(false);
    

    const fetchEmployees = async (page, rowsPerPage) => {
        try {
            const response = await axios.get(`http://127.0.0.1:8000/Employee/list?page=${page + 1}&per_page=${rowsPerPage}`);
            setEmployees(response.data.items);
            setTotalCount(response.data.total);
        } catch (error) {
            console.error('Error fetching employees:', error);
        }
    };

    useEffect(() => {
        fetchEmployees(page, rowsPerPage);
    }, [page, rowsPerPage]);

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
    };
    
      
        const handleOpen = () => {
            setOpenModal(true);
        };
    
        const handleClose = () => {
            setOpenModal(false);
        };

    return (
        <div style={{ height: '100vh', width: '100vw', display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'center', padding: '20px', boxSizing: 'border-box' }}>
            <Paper style={{ width: '100%', maxWidth: '1600px', height: '100%', padding: '20px', boxSizing: 'border-box', display: 'flex', flexDirection: 'column' }}>
                <Typography variant="h5" align="left" gutterBottom>
                    Employee List
                </Typography>
                
                        <Link 
                           
                           
                            className="absolute top-0 right-0 m-4"
                        >
                           
                            <IconButton color="primary" aria-label="add employee">
                                <QueueIcon onClick={handleOpen} />
                                <EmployeeAddpage open={openModal} handleClose={handleClose} />
                            </IconButton>
                        </Link>
                    
                <TableContainer style={{ flexGrow: 1, overflowY: 'auto' }}>
                    <Table stickyHeader>
                        <TableHead>
                            <TableRow>
                                <TableCell>First Name</TableCell>
                                <TableCell>Last Name</TableCell>
                                <TableCell>Email</TableCell>
                                <TableCell>Phone Number</TableCell>
                                <TableCell>Position</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {employees.map((employee, index) => (
                                <TableRow key={index}>
                                    <TableCell>{employee.firstname}</TableCell>
                                    <TableCell>{employee.lastname}</TableCell>
                                    <TableCell>{employee.email}</TableCell>
                                    <TableCell>{employee.phonenumber}</TableCell>
                                    <TableCell>{employee.position}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
                <TablePagination
                    component="div"
                    count={totalCount}
                    page={page}
                    onPageChange={handleChangePage}
                    rowsPerPage={rowsPerPage}
                    onRowsPerPageChange={handleChangeRowsPerPage}
                    rowsPerPageOptions={[10, 25, 50, 100]}
                    style={{ marginTop: 'auto' }}
                />
            </Paper>
        </div>
    );
};

export default EmployeeListPage;

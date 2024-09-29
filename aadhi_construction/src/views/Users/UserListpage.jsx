// import * as React from 'react';
// import Paper from '@mui/material/Paper';
// import Table from '@mui/material/Table';
// import TableBody from '@mui/material/TableBody';
// import TableCell from '@mui/material/TableCell';
// import TableContainer from '@mui/material/TableContainer';
// import TableHead from '@mui/material/TableHead';
// import TablePagination from '@mui/material/TablePagination';
// import TableRow from '@mui/material/TableRow';
// import axios from 'axios';

// interface Column {
//   id: 'userid' | 'firstname' | 'lastname' | 'email'; // Update column IDs
//   label: string;
//   minWidth?: number;
//   align?: 'right';
// }

// const columns: readonly Column[] = [
//   { id: 'userid', label: 'User ID', minWidth: 170 },
//   { id: 'firstname', label: 'First Name', minWidth: 100 },
//   { id: 'lastname', label: 'Last Name', minWidth: 170 },
//   { id: 'email', label: 'Email', minWidth: 170, align: 'right' },
// ];

// interface UserData {
//   userid: string;
//   firstname: string;
//   lastname: string;
//   email: string;
// }

// export default function StickyHeadTable() {
//   const [users, setUsers] = React.useState<UserData[]>([]);
//   const [page, setPage] = React.useState(0);
//   const [rowsPerPage, setRowsPerPage] = React.useState(10);
//   const [loading, setLoading] = React.useState(true);
//   const [error, setError] = React.useState<string | null>(null);

//   React.useEffect(() => {
//     const fetchUsers = async () => {
//       try {
//         const response = await axios.get('http://127.0.0.1:8000/users/list');
//         setUsers(response.data.data); // Adjust for your API structure
//         setLoading(false);
//       } catch (err) {
//         setError(err.message);
//         setLoading(false);
//       }
//     };

//     fetchUsers();
//   }, []);

//   const handleChangePage = (event: unknown, newPage: number) => {
//     setPage(newPage);
//   };

//   const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
//     setRowsPerPage(+event.target.value);
//     setPage(0);
//   };

//   if (loading) {
//     return <div>Loading...</div>;
//   }

//   if (error) {
//     return <div>Error: {error}</div>;import * as React from 'react';
//     import Paper from '@mui/material/Paper';
//     import Table from '@mui/material/Table';
//     import TableBody from '@mui/material/TableBody';
//     import TableCell from '@mui/material/TableCell';
//     import TableContainer from '@mui/material/TableContainer';
//     import TableHead from '@mui/material/TableHead';
//     import TablePagination from '@mui/material/TablePagination';
//     import TableRow from '@mui/material/TableRow';
//     import axios from 'axios';
    
//     interface Column {
//       id: 'userid' | 'firstname' | 'lastname' | 'email'; // Updated column IDs
//       label: string;
//       minWidth?: number;
//       align?: 'right';
//     }
    
//     const columns: readonly Column[] = [
//       { id: 'userid', label: 'User ID', minWidth: 170 },
//       { id: 'firstname', label: 'First Name', minWidth: 100 },
//       { id: 'lastname', label: 'Last Name', minWidth: 170 },
//       { id: 'email', label: 'Email', minWidth: 170, align: 'right' },
//     ];
    
//     interface UserData {
//       userid: string;
//       firstname: string;
//       lastname: string;
//       email: string;
//     }
    
//     export default function StickyHeadTable() {
//       const [users, setUsers] = React.useState<UserData[]>([]);
//       const [page, setPage] = React.useState(0);
//       const [rowsPerPage, setRowsPerPage] = React.useState(10);
//       const [loading, setLoading] = React.useState(true);
//       const [error, setError] = React.useState<string | null>(null);
    
//       React.useEffect(() => {
//         const fetchUsers = async () => {
//           try {
//             const response = await axios.get('http://127.0.0.1:8000/users/list');
//             setUsers(response.data.data); // Extract users from response.data.data
//             setLoading(false);
//           } catch (err) {
//             setError(err.message);
//             setLoading(false);
//           }
//         };
    
//         fetchUsers();
//       }, []);
    
//       const handleChangePage = (event: unknown, newPage: number) => {
//         setPage(newPage);
//       };
    
//       const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
//         setRowsPerPage(+event.target.value);
//         setPage(0);
//       };
    
//       if (loading) {
//         return <div>Loading...</div>;
//       }
    
//       if (error) {
//         return <div>Error: {error}</div>;
//       }
    
//       return (
//         <Paper sx={{ width: '100%', overflow: 'hidden' }}>
//           <TableContainer sx={{ maxHeight: 440 }}>
//             <Table stickyHeader aria-label="sticky table">
//               <TableHead>
//                 <TableRow>
//                   {columns.map((column) => (
//                     <TableCell
//                       key={column.id}
//                       align={column.align}
//                       style={{ minWidth: column.minWidth }}
//                     >
//                       {column.label}
//                     </TableCell>
//                   ))}
//                 </TableRow>
//               </TableHead>
//               <TableBody>
//                 {users
//                   .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
//                   .map((user) => {
//                     return (
//                       <TableRow hover role="checkbox" tabIndex={-1} key={user.userid}>
//                         {columns.map((column) => {
//                           const value = user[column.id];
//                           return (
//                             <TableCell key={column.id} align={column.align}>
//                               {value}
//                             </TableCell>
//                           );
//                         })}
//                       </TableRow>
//                     );
//                   })}
//               </TableBody>
//             </Table>
//           </TableContainer>
//           <TablePagination
//             rowsPerPageOptions={[10, 25, 100]}
//             component="div"
//             count={users.length}
//             rowsPerPage={rowsPerPage}
//             page={page}
//             onPageChange={handleChangePage}
//             onRowsPerPageChange={handleChangeRowsPerPage}
//           />
//         </Paper>
//       );
//     }
    
//   }

//   return (
//     <Paper sx={{ width: '100%', overflow: 'hidden' }}>
//       <TableContainer sx={{ maxHeight: 440 }}>
//         <Table stickyHeader aria-label="sticky table">
//           <TableHead>
//             <TableRow>
//               {columns.map((column) => (
//                 <TableCell
//                   key={column.id}
//                   align={column.align}
//                   style={{ minWidth: column.minWidth }}
//                 >
//                   {column.label}
//                 </TableCell>
//               ))}
//             </TableRow>
//           </TableHead>
//           <TableBody>
//             {users
//               .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
//               .map((user) => {
//                 return (
//                   <TableRow hover role="checkbox" tabIndex={-1} key={user.userid}>
//                     {columns.map((column) => {
//                       const value = user[column.id];
//                       return (
//                         <TableCell key={column.id} align={column.align}>
//                           {value}
//                         </TableCell>
//                       );
//                     })}
//                   </TableRow>
//                 );
//               })}
//           </TableBody>
//         </Table>
//       </TableContainer>
//       <TablePagination
//         rowsPerPageOptions={[10, 25, 100]}
//         component="div"
//         count={users.length}
//         rowsPerPage={rowsPerPage}
//         page={page}
//         onPageChange={handleChangePage}
//         onRowsPerPageChange={handleChangeRowsPerPage}
//       />
//     </Paper>
//   );
// }

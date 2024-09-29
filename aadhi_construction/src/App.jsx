// // src/App.js
// import React from 'react';
// import SignUp from './components/SignUp';
// import Dashboard from './components/Dashboard';

// const App = () => {
//     return (
//         <div>
//             <SignUp />
//             <Dashboard />
//         </div>
//     );
// };

// export default App;
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SignUp from './components/SignUp';
import SignIn from './components/SignIn';
import Dashboard from './components/Dashboard';
// import UsersListPage from './views/Users/UserListpage';

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/SignUp" element={<SignUp />} />
                <Route path="/" element={<SignIn />} />
                <Route path="/dashboard" element={<Dashboard />} />
                {/* <Route path="/UserList" element={<UsersListPage />} /> */}
            </Routes>
        </Router>
    );
};

export default App;


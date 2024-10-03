import React, { useRef, useEffect } from 'react';
import {
    AppBar, Toolbar, IconButton, Typography, CssBaseline, Drawer,
    List, ListItem, ListItemIcon, ListItemText, Divider, Box
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import DashboardIcon from '@mui/icons-material/Dashboard';
import AccountCircle from '@mui/icons-material/AccountCircle';
import SettingsIcon from '@mui/icons-material/Settings';
import CoPresentIcon from '@mui/icons-material/CoPresent';
import Diversity3Icon from '@mui/icons-material/Diversity3';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
    const [open, setOpen] = useState(false);
    const [expanded, setExpanded] = useState(false);
    const [expandedCrm, setExpandedCrm] = useState(false);
    const [selectedIndex, setSelectedIndex] = useState(0);
    const navigate = useNavigate();
    const drawerRef = useRef(null);

    const toggleDrawer = () => {
        setOpen(!open);
    };

    const handleListItemClick = (index, route) => {
        setSelectedIndex(index);
        navigate(route);
        setOpen(false); // Close the drawer on selection
    };

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

    const handleExpandCrm = () => {
        setExpandedCrm(!expandedCrm);
    };

    const handleClickOutside = (event) => {
        if (drawerRef.current && !drawerRef.current.contains(event.target)) {
            setOpen(false); // Close the drawer
            setExpanded(false);
            setExpandedCrm(false); // Close the expandable menu
        }
    };

    // Effect to add/remove event listener for outside clicks
    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    const drawerWidth = 240;

    return (
        <Box sx={{ display: 'flex', height: '100vh' }}>
            <CssBaseline />
            <AppBar position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}>
                <Toolbar>
                    <IconButton edge="start" color="inherit" onClick={toggleDrawer}>
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" noWrap>
                        Dashboard
                    </Typography>
                </Toolbar>
            </AppBar>
            <Drawer
                variant="persistent"
                anchor="left"
                open={open}
                ref={drawerRef}
                sx={{
                    width: drawerWidth,
                    flexShrink: 0,
                    '& .MuiDrawer-paper': {
                        width: drawerWidth,
                        boxSizing: 'border-box',
                    },
                }}
            >
                <Toolbar />
                <Divider />
                <List>
                    <ListItem button selected={selectedIndex === 0} onClick={() => handleListItemClick(0, '/dashboard')}>
                        <ListItemIcon>
                            <DashboardIcon />
                        </ListItemIcon>
                        <ListItemText primary="Dashboard" />
                    </ListItem>
                    <ListItem button selected={selectedIndex === 1} onClick={() => handleListItemClick(1, '/profile')}>
                        <ListItemIcon>
                            <AccountCircle />
                        </ListItemIcon>
                        <ListItemText primary="Profile" />
                    </ListItem>
                    <ListItem button onClick={handleExpandClick}>
                        <ListItemIcon>
                            <CoPresentIcon />
                        </ListItemIcon>
                        <ListItemText primary="HRM" />
                        {expanded ? <ExpandLessIcon /> : <ExpandMoreIcon />}
                    </ListItem>
                    {expanded && (
                        <List component="div" disablePadding>
                            <ListItem button selected={selectedIndex === 2} onClick={() => handleListItemClick(2, '/')}>
                                <ListItemText primary="Roles" inset />
                            </ListItem>
                            <ListItem button selected={selectedIndex === 3} onClick={() => handleListItemClick(3, '/EmployeeList')}>
                                <ListItemText primary="Employee" inset />
                            </ListItem>
                        </List>
                    )}
                    <ListItem button onClick={handleExpandCrm}>
                        <ListItemIcon>
                            <Diversity3Icon />
                        </ListItemIcon>
                        <ListItemText primary="CRM" />
                        {expandedCrm ? <ExpandLessIcon /> : <ExpandMoreIcon />}
                    </ListItem>
                    {expandedCrm && (
                        <List component="div" disablePadding>
                            <ListItem
                                button
                                selected={selectedIndex === 4}
                                onClick={() => handleListItemClick(4, '/settings/general')}
                            >
                                <ListItemText primary="Customers" inset />
                            </ListItem>
                            <ListItem
                                button
                                selected={selectedIndex === 5}
                                onClick={() => handleListItemClick(5, '/settings/notifications')}
                            >
                                <ListItemText primary="Vendors" inset />
                            </ListItem>
                        </List>
                    )}
                </List>
                <Divider />
            </Drawer>
            <Box
                component="main"
                sx={{
                    flexGrow: 1,
                    p: 3,
                    marginLeft: open ? `${drawerWidth}px` : '0',
                    transition: 'margin 0.3s',
                    width: open ? `calc(100% - ${drawerWidth}px)` : '100%',
                }}
            >
                <Toolbar />
                <Typography variant="h4" gutterBottom>
                    Welcome to Your Dashboard
                </Typography>
                <Typography variant="body1">
                    Here you can manage your application settings and view your profile.
                </Typography>
            </Box>
        </Box>
    );
};

export default Dashboard;

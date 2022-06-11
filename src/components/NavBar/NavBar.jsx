import React from 'react';
import useStyles from './styles';
import {
    AppBar,
    IconButton,
    Toolbar,
    Drawer,
    Button,
    Avatar,
    useMediaQuery,
} from '@mui/material';
import { Menu, AccountCircle, LightMode, DarkMode } from '@mui/icons-material';
import { Link } from 'react-router-dom';
import { useTheme } from '@mui/material/styles';

const NavBar = () => {
    const classes = useStyles();
    const theme = useTheme();
    const isMobile = useMediaQuery('(max-width:600px)');
    const isAuthenticated = true;

    return (
        <>
            <AppBar position="fixed">
                <Toolbar className={classes.toolbar} color="orange">
                    {isMobile && (
                        <IconButton
                            color="inherit"
                            edge="start"
                            style={{ outline: 'none' }}
                            onClick={() => {}}
                            className={classes.menuButton}
                        >
                            <Menu />
                        </IconButton>
                    )}
                    <IconButton
                        color="inherit"
                        sx={{ ml: 1 }}
                        onClick={() => {}}
                    >
                        {theme.palette.mode === 'dark' ? (
                            <LightMode />
                        ) : (
                            <DarkMode />
                        )}
                    </IconButton>
                    {!isMobile && 'Search...'}
                    <div>
                        {!isAuthenticated ? (
                            <Button color="inherit" onClick={() => {}}>
                                Login &nbsp; <AccountCircle></AccountCircle>
                            </Button>
                        ) : (
                            <Button
                                color="inherit"
                                component={Link}
                                to={`/profile/:id`}
                                className={classes.linkButton}
                                onClick={() => {}}
                            >
                                {!isMobile && <>My Movies &nbsp;</>}
                                <Avatar
                                    style={{ width: '30px', height: '30px' }}
                                    src="https://i.pravatar.cc/300"
                                    alt="avatar"
                                />
                            </Button>
                        )}
                    </div>
                    {isMobile && 'Search...'}
                </Toolbar>
            </AppBar>
        </>
    );
};

export default NavBar;

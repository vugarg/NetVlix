import { CssBaseline } from '@mui/material';
import { Route, Switch } from 'react-router-dom';
import useStyles from './styles';

import { Actors, MovieInformation, Movies, NavBar, Profile } from './index';

const App = () => {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <CssBaseline />
            <NavBar />
            <main className={classes.content}>
                <div className={classes.toolbar}></div>
                <Switch>
                    <Route exact path="/movies/:id">
                        <MovieInformation />
                    </Route>
                    <Route exact path="/actors/:id">
                        <Actors />
                    </Route>
                    <Route exact path="/">
                        <Movies />
                    </Route>
                    <Route exact path="/profiles/:id">
                        <Profile />
                    </Route>
                </Switch>
            </main>
        </div>
    );
};

export default App;

import React from 'react';

import { BrowserRouter, Route, Switch, Link, NavLink } from 'react-router-dom';
import Home from '../components/Home';
import About from '../components/About';
import Archives from '../components/Archives';
import ArchivesItem from '../components/ArchivesItem';
import Contact from '../components/Contact';
import NotFound from '../components/NotFound';
import Header from '../components/Header';

// stateless function component
const AppRouter = () => (
    <BrowserRouter>
        <div>
            <Header />
            <Switch>
                <Route path="/" component={Home} exact={true}/>
                <Route path="/about" component={About} />
                <Route path="/archives" component={Archives} exact={true}/>
                <Route path="/archives/:id" component={ArchivesItem} />
                <Route path="/contact" component={Contact} />
                <Route component={NotFound} />
            </Switch>
        </div>
    </BrowserRouter>
);

export default AppRouter;
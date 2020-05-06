import React from 'react';

import White from './pages/White'



import { Switch, Route } from 'react-router-dom';

export default function Routes() {
    return (<div>
        <Switch>
            {/* <Route exact path="/">
                <Home />
            </Route> */}
            <Route exact path="/">
                <White />
            </Route>
            {/* <Route exact path="/users">
                <User />
            </Route>
            <Route path="/users/:id">
                <Edit />
            </Route>
            <Route path="/students">
                <Student />
            </Route> */}
        </Switch>
    </div>)
}
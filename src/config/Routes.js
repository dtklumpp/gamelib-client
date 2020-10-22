import React from "react";
import { Switch, Route } from "react-router-dom";

import Home from "../pages/Home";
import GameList from "../pages/GameList";
import GameShow from "../pages/GameShow";
import NewGame from "../pages/NewGame";
import EditGame from "../pages/EditGame";

import { useRecoilValue } from "recoil";
import { loggedInState } from "../recoil/selectors";

const Routes = (props) => {
  const loggedIn = useRecoilValue(loggedInState);
  return (
    <Switch>
      <Route exact path='/' component={Home} />
      {loggedIn && (
        <Switch>
          <Route path='/games/new' component={NewGame} />
          <Route path='/games/:id/edit' component={EditGame} />
          <Route path='/games/:id' component={GameShow} />
          <Route path='/games' component={GameList} />
        </Switch>
      )}
      <Route path='*' render={() => <h1>"not found"</h1>} />
    </Switch>
  );
};

export default Routes;

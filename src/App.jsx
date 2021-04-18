import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import GlobalStyle from '@components/ui/GlobalStyle';
import Nav from '@components/Nav';
import TaskOne from '@components/taskone/TaskOne';
import TaskTwo from '@components/tasktwo/TaskTwo';

const App = () => (
  <>
    <GlobalStyle />
    <Router>
      <Nav />
      <Switch>
        <Route path="/" exact component={TaskOne} />
        <Route path="/task-two" component={TaskTwo} />
      </Switch>
    </Router>
  </>
);

export default App;

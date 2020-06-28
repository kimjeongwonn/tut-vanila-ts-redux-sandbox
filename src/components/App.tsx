import React from 'react';
import { HashRouter as Router, Route } from 'react-router-dom';
import Home from '../routes/Home';
import Detail from '../routes/Detail';

const App: React.FC = () => {
  return (
    <Router>
      <Route path="/" exact component={Home} />
      <Route path="/:id" component={Detail} />
    </Router>
  );
};

export default App;

import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Home from '../home';
import Articles from '../articles';

function App() {
  return (
    <Router>
      <div>
        <Route path="/" exact component={Home} />
        <Route path="/articles" component={Articles} />
      </div>
    </Router>
  );
}

export default App;

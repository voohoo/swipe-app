import React from 'react';
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";
import SwipeableRoutes from "react-swipeable-routes";
import Tahoe from './components/Tahoe/Tahoe';
import SanFrancisco from './components/SanFrancisco/SanFrancisco';
import MonumentValley from './components/MonumentValley/MonumentValley';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      prevIndex: null,
      index: null,
    };
  }

  handleChangeIndex = index => {
    const prevIndex = this.state.index;
    this.setState({
      prevIndex: prevIndex,
      index: index,
    });
  }

  render() {
    const index = this.state;
    return (
      <Router>
        <Route exact path="/" render={() => <Redirect to="/tahoe"/>} />
        <SwipeableRoutes enableMouseEvents onChangeIndex={this.handleChangeIndex}>
          <Route
            path="/tahoe"
            render={(props) => <Tahoe {...props} index={index} />}
          />
          <Route
            path="/san-francisco"
            render={(props) => <SanFrancisco {...props} index={index} />}
          />
          <Route
            path="/monument-valley"
            render={(props) => <MonumentValley {...props} index={index} />}
          />
        </SwipeableRoutes>
      </Router>
    );
  }
}

export default App;

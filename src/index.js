import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {Provider} from 'react-redux'
import store from "./store";

// Router
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import Main from './Components/main';
import NotFound from './Components/404'

class App extends Component {

    render(){

      return (
        <Provider store={store}>
          <Router>
          {/* <Header onInputChange={this.onInputChange} /> */}
            <Switch>
              <Route path="/" exact component={Main} />
              {/* <Route path="/add-contact" exact component={AddNewContact} /> */}
              {/* <Route path="/editContact" exact component={EditContact} /> */}
              <Route component={NotFound} />
            </Switch>
            {/* <Footer /> */}
          </Router>
          </Provider>
      )
    }

}
ReactDOM.render(<App />, document.getElementById("root"));



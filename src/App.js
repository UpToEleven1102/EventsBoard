import React, {Component} from 'react';
import EventDashboard from './components/page-components/event-dashboard'
import NavBar from './components/ui-components/nav-bar'
import {Container} from 'semantic-ui-react'
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <NavBar/>
        <Container>
          <EventDashboard/>
        </Container>
      </div>
    );
  }
}

export default App;

import React from 'react'
import {Menu, Button} from 'semantic-ui-react'
import './style.css'

class NavBar extends React.Component {
  render() {
    return (
      <Menu fixed="top">
        <Menu.Item header name="home"/>
        <Menu.Item name="Events"/>
        <Menu.Item floated="right">
          <Button>Create Event</Button>
        </Menu.Item>
        <Menu.Item position="right">
          <Button>Login</Button>
          <Button style={{marginLeft: '15px'}}>Sign In</Button>
        </Menu.Item>
      </Menu>
    )
  }
}

export default NavBar
import React, {Component} from 'react'
import {Grid, Button} from 'semantic-ui-react'
import EventList from '../event-list'
import EventForm from "../event-form";
import * as cuid from "cuid";

const events = [
  {
    id: '1',
    title: 'Trip to Tower of London',
    date: '2018-03-27T11:00:00+00:00',
    category: 'culture',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sollicitudin ligula eu leo tincidunt, quis scelerisque magna dapibus. Sed eget ipsum vel arcu vehicula ullamcorper.',
    city: 'London, UK',
    venue: "Tower of London, St Katharine's & Wapping, London",
    hostedBy: 'Bob',
    hostPhotoURL: 'https://randomuser.me/api/portraits/men/20.jpg',
    attendees: [
      {
        id: 'a',
        name: 'Bob',
        photoURL: 'https://randomuser.me/api/portraits/men/20.jpg',
      },
      {
        id: 'b',
        name: 'Tom',
        photoURL: 'https://randomuser.me/api/portraits/men/22.jpg'
      }
    ]
  },
  {
    id: '2',
    title: 'Trip to Punch and Judy Pub',
    date: '2018-03-28T14:00:00+00:00',
    category: 'drinks',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sollicitudin ligula eu leo tincidunt, quis scelerisque magna dapibus. Sed eget ipsum vel arcu vehicula ullamcorper.',
    city: 'London, UK',
    venue: 'Punch & Judy, Henrietta Street, London, UK',
    hostedBy: 'Tom',
    hostPhotoURL: 'https://randomuser.me/api/portraits/men/22.jpg',
    attendees: [
      {
        id: 'b',
        name: 'Tom',
        photoURL: 'https://randomuser.me/api/portraits/men/22.jpg'
      },
      {
        id: 'a',
        name: 'Bob',
        photoURL: 'https://randomuser.me/api/portraits/men/20.jpg'
      }
    ]
  }
]


class EventDashboard extends Component {
  state = {
    events: events,
    isOpen: false,
  }

  handleFormOpen = () => {
    this.setState({isOpen: true})
  }

  handleFormClose = () => {
    this.setState({isOpen: false})
  }

  handleCreateNewEvent = (newEvent) => {
    const {events} = this.state

    newEvent.id = cuid()
    newEvent.hostPhotoURL = '/assets/user.png'
    this.setState({
      events: [...events, newEvent],
      isOpen: false,
    })
  }

  render() {
    return (
      <Grid>
        <Grid.Row>
          <Grid.Column width={10}>
            <EventList events={this.state.events}/>
          </Grid.Column>
          <Grid.Column width={6}>
            <Button onClick={this.handleFormOpen} positive>
              Create Event
            </Button>
            {this.state.isOpen && <EventForm handleCreateNewEvent={this.handleCreateNewEvent} handleFormClose={this.handleFormClose}/>}
          </Grid.Column>
        </Grid.Row>
      </Grid>
    )
  }
}

export default EventDashboard
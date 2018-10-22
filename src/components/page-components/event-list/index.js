import React from 'react'
import {List} from 'semantic-ui-react'
import EventListItem from "../event-list-item";


class EventList extends React.Component {
  render() {
    const {events} = this.props

    return (
      <List>
        {
          events.map((event) => <EventListItem key={event.id} event={event}/>)
        }
      </List>
    )
  }
}

export default EventList
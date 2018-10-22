import React from 'react'
import {Segment, Form, Button} from 'semantic-ui-react'

class EventForm extends React.Component {
  state = {
    event: {
      title:'',
      date: '',
      city: '',
      venue: '',
      hostedBy: '',
    }
  }

  onFormSubmit = event => {
    event.preventDefault()
    this.props.handleCreateNewEvent(this.state.event)
  }

  onInputChange = e => {
    const newEvent = this.state.event
    newEvent[e.target.name] = e.target.value
    this.setState({event: newEvent})
  }

  render() {
    const {handleFormClose} = this.props
    const {event} = this.state

    return (
      <Segment>
        <Form onSubmit={this.onFormSubmit}>
          <Form.Field>
            <label>
              Event Title
            </label>
            <input name='title' onChange={this.onInputChange} value={event.title} placeholder='Event Title'/>
          </Form.Field>
          <Form.Field>
            <label>Event Date</label>
            <input name='date' onChange={this.onInputChange} value={event.date} type="date"/>
          </Form.Field>
          <Form.Field>
            <label>City</label>
            <input name='city' onChange={this.onInputChange} value={event.city} placeholder='City event is taking place'/>
          </Form.Field>
          <Form.Field>
            <label>Venue</label>
            <input name='venue' onChange={this.onInputChange} value={event.venue} placeholder='Enter the Venue of the event'/>
          </Form.Field>
          <Form.Field>
            <label>Hosted By</label>
            <input name='hostedBy' onChange={this.onInputChange} value={event.hostedBy} placeholder='Enter the name of person hosting'/>
          </Form.Field>
          <Button positive type="submit">
            Submit
          </Button>
          <Button onClick={handleFormClose}>
            Cancel
          </Button>
        </Form>
      </Segment>
    )
  }
}

export default EventForm
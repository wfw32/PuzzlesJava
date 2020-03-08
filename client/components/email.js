
import React, {Component} from 'react'
import {Form, FormGroup, Button} from 'react-bootstrap'
import axios from 'axios'

class Email extends Component {
  constructor() {
    super()
    this.state = {
      value: '',
      sent: false
    }
    this.emailSubmit = this.emailSubmit.bind(this)
    this.changeInput = this.changeInput.bind(this)
  }
  emailSubmit(email, message) {
    this.afterSubmit()
    const emailMessage = `
    Hey there,

      Here are the ingredients that you need to make ${this.props.name}!

      ${this.props.missingIngredients}

      Here's the link to the full recipe: ${this.props.url}

    Warmest Regards,

    Meal.Match Team`
    try {
      const emailToSend = {
        email: email,
        message: emailMessage
      }

      axios.post('/api/send', emailToSend)
    } catch (error) {
      console.error(error)
    }
  }
  changeInput(event) {
    this.setState({
      value: event.target.value
    })
  }
  afterSubmit() {
    this.setState({sent: !this.state.sent})
  }

  render() {
    return (
      <>
        {this.state.sent ? (
          <div>
            <h4>Sent!</h4>
          </div>
        ) : (
          <Form>
            <FormGroup>
              <Form.Label>Email Address</Form.Label>
              <Form.Control
                id="emailForm"
                type="phone"
                placeholder="abc@email.com"
                value={this.state.value}
                onChange={this.changeInput}
              />
              <Form.Text className="text-muted">
                We will not share your email address.
              </Form.Text>
            </FormGroup>

            <Button
              className="single-recipe-btn"
              onClick={() => {
                this.emailSubmit(this.state.value)
              }}
            >
              Submit
            </Button>
          </Form>
        )}
      </>
    )
  }
}

export default Email
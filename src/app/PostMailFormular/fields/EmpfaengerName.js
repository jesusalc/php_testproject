import React, {Component} from 'react'
import TextField from 'material-ui/TextField'

const EmpfaengerNameStyle = {

}

export default class EmpfaengerName extends Component {
  constructor(props, context) {
    super(props, context)

    this.state = {
      value: "Bjørk Larsen",
    }
  }

  render() {
    return <TextField
                key="empfaenger_name"
                name="empfaenger_name"
                id="empfaenger_name"
                hintText="Empfängername und Nachname"
                required
                value={this.state.value}
                errorText="Dieses Feld wird benötigt."
                floatingLabelText="Empfängername"
                multiLine={false}
                rows={1}
              />
    }
}



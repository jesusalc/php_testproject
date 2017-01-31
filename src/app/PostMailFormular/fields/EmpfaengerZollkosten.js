import React, {Component} from 'react'
import TextField from 'material-ui/TextField'

const EmpfaengerZollkostenStyle = {

}

export default class EmpfaengerZollkosten extends Component {
  constructor(props, context) {
    super(props, context)

    this.state = {
      value: 34.90,
    }
  }

  render() {
    return <TextField
                key="empfaenger_zollkosten"
                name="empfaenger_zollkosten"
                id="empfaenger_zollkosten"
                hintText="Zollkosten"
                value={this.state.value}
                required
                errorText="Dieses Feld wird benötigt."
                floatingLabelText="Zollkosten"
                multiLine={false}
                rows={1}
              />
    }
}



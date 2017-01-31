import React, {Component} from 'react'
import TextField from 'material-ui/TextField'

const EmpfaengerZollkostenStyle = {

}

class EmpfaengerZollkosten extends Component {
  constructor(props, context) {
    super(props, context)

    this.state = {
      value: "",
    }
  }

  render() {
    return <TextField
                key="empfaenger_zollkosten"
                name="empfaenger_zollkosten"
                id="empfaenger_zollkosten"
                hintText="Zollkosten"
                required
                errorText="Dieses Feld wird benötigt."
                floatingLabelText="Zollkosten"
                multiLine={false}
                rows={1}
              />
    }
}



module.exports = EmpfaengerZollkosten

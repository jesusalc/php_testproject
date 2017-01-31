import React, {Component} from 'react'
import TextField from 'material-ui/TextField'

const EmpfaengerTrackingStyle = {

}

class EmpfaengerTracking extends Component {
  constructor(props, context) {
    super(props, context)

    this.state = {
      value: "UPS1231KJU65K2017",
    }
  }

  render() {
    return <TextField
                key="empfaenger_tracking"
                name="empfaenger_tracking"
                id="empfaenger_tracking"
                hintText="eindeutige Tracking-Id"
                disabled={true}
                floatingLabelText="Eindeutige Tracking-Id"
                value={this.state.value}
                multiLine={false}
                rows={1}
              />
    }
}



module.exports = EmpfaengerTracking

import React, {Component} from 'react'
import TextField from 'material-ui/TextField'

const EmpfaengerTrackingStyle = {

}

export default class EmpfaengerTracking extends Component {
  constructor(props, context) {
    super(props, context)

    this.state = {
      value: this.guid(),
    }
  }

  guid() {
    const s4 = () => {
      return Math.floor((1 + Math.random()) * 0x10000)
        .toString(16)
        .substring(1)
    }
    return s4() + '.' + s4() + '.' + s4() + '.' + s4()
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

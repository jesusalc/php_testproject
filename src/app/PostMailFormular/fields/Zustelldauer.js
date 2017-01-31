import React, {Component} from 'react';
import TextField from 'material-ui/TextField';

const ZustelldauerStyle = {

}

export default class Zustelldauer extends Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      value: "in der Regel in 1-2 Tagen",
    }

  }


  render() {
    return <TextField
                key="zustelldauer"
                name="zustelldauer"
                id="zustelldauer"
                hintText="Zustelldauer"
                disabled={true}
                floatingLabelText="Zustelldauer beim Empfänger"
                value={this.props.text}
                multiLine={false}
                rows={1}
              />
    }
}

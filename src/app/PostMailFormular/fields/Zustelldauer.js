import React, {Component} from 'react';
import TextField from 'material-ui/TextField';

const ZustelldauerStyle = {

}

class Zustelldauer extends Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      value: "",
    }
  }
  render() {
    return <TextField
                key="zustelldauer"
                name="zustelldauer"
                id="zustelldauer"
                hintText="Zustelldauer"
                disabled={true}
                floatingLabelText="Zustelldauer"
                value="in der Regel in 1-2 Tagen"
                multiLine={false}
                rows={1}
              />
    }
}



module.exports = Zustelldauer

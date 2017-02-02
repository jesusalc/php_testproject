import React, {Component} from 'react'
import TextField from 'material-ui/TextField'

const BriefGewichtStyle = {
  textfield: {
    width: '4em'
  }
}

export default class BriefGewicht extends Component {
  constructor(props, context) {
    super(props, context)

    this.state = {
      parent_styles: props.post_mail_styles,
      value: ""

    }
  }

  render() {
    return <div style={this.state.parent_styles.container}>
                <TextField
                  style={BriefGewichtStyle.textfield}
                  key="brief_gewicht"
                  name="brief_gewicht"
                  id="brief_gewicht"
                  hintText="Gewicht"
                  floatingLabelText="Gewicht"
                  multiLine={false}
                  rows={1}
                /> g
              </div>

    }
}


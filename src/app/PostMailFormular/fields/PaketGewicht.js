import React, {Component} from 'react'
import TextField from 'material-ui/TextField'
import FontIcon from 'material-ui/FontIcon'

const PaketGewichtStyle = {
  textfield: {
    width: '4em'
  }
}

export default class PaketGewicht extends Component {
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
                    style={PaketGewichtStyle.textfield}
                    key="paket_gewicht"
                    name="paket_gewicht"
                    id="paket_gewicht"
                    hintText="Gewicht"
                    floatingLabelText="Gewicht"
                    defaultValue={this.state.value}
                    multiLine={false}
                    rows={1}
                    /> g
                </div>
    }
}



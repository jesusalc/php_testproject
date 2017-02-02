import React, {Component} from 'react'
import TextField from 'material-ui/TextField'
import FontIcon from 'material-ui/FontIcon'

const PaketBreiteStyle = {
  textfield: {
    width: '4em'
  }
}

export default class PaketBreite extends Component {
  constructor(props, context) {
    super(props, context)

    this.state = {
      parent_styles: props.post_mail_styles,
      value:         props.initial_paket_breite
    }
  }

  render() {
    return <div style={this.state.parent_styles.container}>
                  <FontIcon
                    className="material-icons"
                    style={this.state.parent_styles.iconStyles}
                  > call_made
                  </FontIcon>
                  <TextField
                    style={PaketBreiteStyle.textfield}
                    key="paket_breite"
                    name="paket_breite"
                    id="paket_breite"
                    hintText="Breite"
                    defaultValue={this.state.value}
                    floatingLabelText="Breite"
                    multiLine={false}
                    rows={1}
                  /> cm
                </div>
    }
}



import React, {Component} from 'react'
import TextField from 'material-ui/TextField'
import FontIcon from 'material-ui/FontIcon'

const PaketHoecheStyle = {
  textfield: {
    width: '4em'
  }
}

export default class PaketHoeche extends Component {
  constructor(props, context) {
    super(props, context)

    this.state = {
      parent_styles: props.post_mail_styles,
      value: ""
    }
  }

  render() {
    return <div style={this.state.parent_styles.container}>
                  <FontIcon
                    className="material-icons"
                    style={this.state.parent_styles.iconStyles}
                  > border_left
                  </FontIcon>
                  <TextField
                    style={PaketHoecheStyle.textfield}
                    key="paket_hoeche"
                    name="paket_hoeche"
                    id="paket_hoeche"
                    hintText="Höche"
                    floatingLabelText="Höche"
                    defaultValue={this.state.value}
                    multiLine={false}
                    rows={1}
                  />  cm
                </div>
    }
}



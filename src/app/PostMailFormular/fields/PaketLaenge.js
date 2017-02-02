import React, {Component} from 'react';
import TextField from 'material-ui/TextField';
import FontIcon from 'material-ui/FontIcon'

const PaketLaengeStyle = {
  textfield: {
    width: '4em'
  }
}

export default class PaketLaenge extends Component {
  constructor(props, context) {
    super(props, context);

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
                  > border_bottom
                  </FontIcon>
                  <TextField style={PaketLaengeStyle.textfield}
                    key="paket_laenge"
                    name="paket_laenge"
                    id="paket_laenge"
                    hintText="Länge"
                    floatingLabelText="Länge"
                    multiLine={false}
                    rows={1}
                  /> cm
                </div>
    }
}

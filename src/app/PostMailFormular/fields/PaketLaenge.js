import React, {Component} from 'react';
import TextField from 'material-ui/TextField';
import FontIcon from 'material-ui/FontIcon'

const PaketLaengeStyle = {
  textfield: {
    width: '4em'
  }
}

const PostMailStyle = {
  container: {
    textAlign: 'center',
    paddingTop: 10,
    width: '100%'
  },
  iconStyles: {
    marginRight: 24,
  }
}

export default class PaketLaenge extends Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      value: ""
    }
  }

  render() {
    return <div style={PostMailStyle.container}>
                  <FontIcon
                    className="material-icons"
                    style={PostMailStyle.iconStyles}
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

import React, {Component} from 'react'
import TextField from 'material-ui/TextField'
import FontIcon from 'material-ui/FontIcon'

const PaketBreiteStyle = {
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

export default class PaketBreite extends Component {
  constructor(props, context) {
    super(props, context)

    this.state = {
      value: ""
    }
  }

  render() {
    return <div style={PostMailStyle.container}>
                  <FontIcon
                    className="material-icons"
                    style={PostMailStyle.iconStyles}
                  > call_made
                  </FontIcon>
                  <TextField
                    style={PaketBreiteStyle.textfield}
                    key="paket_breite"
                    name="paket_breite"
                    id="paket_breite"
                    hintText="Breite"
                    floatingLabelText="Breite"
                    multiLine={false}
                    rows={1}
                  /> cm
                </div>
    }
}



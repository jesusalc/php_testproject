import React, {Component} from 'react'
import TextField from 'material-ui/TextField'
import FontIcon from 'material-ui/FontIcon'

const PaketGewichtStyle = {
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

export default class PaketGewicht extends Component {
  constructor(props, context) {
    super(props, context)

    this.state = {
      value: ""
    }
  }

  render() {
    return <div style={PostMailStyle.container}>
                  <TextField
                    style={PaketGewichtStyle.textfield}
                    key="paket_gewicht"
                    name="paket_gewicht"
                    id="paket_gewicht"
                    hintText="Gewicht"
                    floatingLabelText="Gewicht"
                    multiLine={false}
                    rows={1}
                    /> g
                </div>
    }
}



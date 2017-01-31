import React, {Component} from 'react'
import TextField from 'material-ui/TextField'
import FontIcon from 'material-ui/FontIcon'

const PacketGewichtStyle = {
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

class PacketGewicht extends Component {
  constructor(props, context) {
    super(props, context)

    this.state = {
      value: ""
    }
  }

  render() {
    return <div style={PostMailStyle.container}>
                  <TextField
                    style={PacketGewichtStyle.textfield}
                    key="packet_gewicht"
                    name="packet_gewicht"
                    id="packet_gewicht"
                    hintText="Gewicht"
                    floatingLabelText="Gewicht"
                    multiLine={false}
                    rows={1}
                    /> g
                </div>
    }
}



module.exports = PacketGewicht

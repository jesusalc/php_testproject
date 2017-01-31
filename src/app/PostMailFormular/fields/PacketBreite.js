import React, {Component} from 'react'
import TextField from 'material-ui/TextField'
import FontIcon from 'material-ui/FontIcon'

const PacketBreiteStyle = {
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

class PacketBreite extends Component {
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
                    style={PacketBreiteStyle.textfield}
                    key="packet_breite"
                    name="packet_breite"
                    id="packet_breite"
                    hintText="Breite"
                    floatingLabelText="Breite"
                    multiLine={false}
                    rows={1}
                  /> cm
                </div>
    }
}



module.exports = PacketBreite

import React, {Component} from 'react'
import TextField from 'material-ui/TextField'
import FontIcon from 'material-ui/FontIcon'

const PacketHoecheStyle = {
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

export default class PacketHoeche extends Component {
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
                  > border_left
                  </FontIcon>
                  <TextField
                    style={PacketHoecheStyle.textfield}
                    key="packet_hoeche"
                    name="packet_hoeche"
                    id="packet_hoeche"
                    hintText="Höche"
                    floatingLabelText="Höche"
                    multiLine={false}
                    rows={1}
                  />  cm
                </div>
    }
}



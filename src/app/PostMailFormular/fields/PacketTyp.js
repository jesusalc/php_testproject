import React, {Component} from 'react'
import SelectField from 'material-ui/SelectField'
import MenuItem from 'material-ui/MenuItem'

import Brief from  './Brief'
import Packet from  './Packet'

const PacketTypStyle = {
  selectField: {
    textAlign: 'left',
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

export default class PacketTyp extends Component {
  constructor(props, context) {
    super(props, context)

    this.state = {
      value: "Brief",
      childVisible: false,
    }

    this.onClick = this.onClick.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }

  onClick() {
    this.setState({
      childVisible: !this.state.childVisible
    })
  }

  handleChange = (event, index, value) => {
    this.setState({value})
  }

  render() {
    return <div style={PostMailStyle.container}>
              <div >
                <h3>Welches PacketTyp ist das Paket?</h3>
                <SelectField
                  key="packet_typ"
                  name="packet_typ"
                  id="packet_typ"
                  style={PacketTypStyle.selectField}
                  value={this.state.value}
                  onChange={this.handleChange}
                  maxHeight={200}
                  hintText="PacketTyp"
                  required
                  errorText="Dieses Feld wird benötigt."
                  floatingLabelText="PacketTyp"
                  multiLine={false}
                  rows={1}
                >
                  <MenuItem key="Brief" value={"Brief"} primaryText="Brief" />
                  <MenuItem key="Packet" value={"Packet"} primaryText="Packet" />
                </SelectField>
                <br />
              </div>
              {
                this.state.packetVisible
                  ? <Packet />
                  : <Brief />
              }
            </div>
    }
}



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

class PacketTyp extends Component {
  constructor(props, context) {
    super(props, context)

    this.state = {
      value: "Brief",
    }
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



module.exports = PacketTyp


class ShowHide extends Component {
  constructor(props, context) {
    super(props, context)

    this.state = {
      packetVisible: false,
      value: "Brief",
    }

    this.handleChange = this.handleChange.bind(this)
    this.get_selected_from_checkbox_or_radio = this.get_selected_from_checkbox_or_radio.bind(this)
  }

  /**
   * Extracts selected values from checkboxes and radios.
   *
   * @param string fieldName
   * @return string the selected value(s).
   *
  get_selected_from_checkbox_or_radio(fieldName) {
    console.log(fieldName)
    let i
    let fields = document.getElementsByName(fieldName)
    let selectedFields = []
    for (let i = 0; i < fields.length; i++) {
      if (fields[i].checked === true) {
        selectedFields.push(fields[i].value)
      }
    }
    return selectedFields.join(', ')
  }

  handleChange(e) {
    let packet_typ_value = this.get_selected_from_checkbox_or_radio('packet_typ')
    console.log(packet_typ_value)
    this.setState({
      packetVisible: !this.state.packetVisible
    })
    console.log(e.target.name)
    console.log(e.target.value)
  }*/

  handleChange = (event, index, value) => {
    this.setState({value});
  }
  render() {
    return
  }
}

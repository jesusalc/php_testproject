import React, {Component} from 'react'
import SelectField from 'material-ui/SelectField'
import MenuItem from 'material-ui/MenuItem'

import Brief from  './Brief'
import Paket from  './Paket'
import ZustelldauerInfo from  './ZustelldauerInfo'

const PaketTypStyle = {
  selectField: {
    textAlign: 'left',
  }
}

export default class PaketTyp extends Component {
  constructor(props, context) {
    super(props, context)

    this.state = {
      parent_styles: props.post_mail_styles,
      value: "",
      paketVisible: false,
    }

    this.onClick = this.onClick.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }

  onClick() {
    this.setState({
      paketVisible: !this.state.paketVisible
    })
  }

  handleChange = (event, index, value) => {
    let paket_typ = this.getBriefORPaket(value)
    console.log(`${paket_typ}`)
    this.setState({
      value: value,
      paketVisible: true
    })
  }

  getBriefORPaket(text){
    return (text === "Brief" ? `Der ${text}` : `Das ${text}`)
  }

  render() {
    return <div style={this.state.parent_styles.container}>
              <div >
                <h3>Welches PaketTyp ist das Paket?</h3>
                <SelectField
                  key="paket_typ"
                  name="paket_typ"
                  id="paket_typ"
                  style={PaketTypStyle.selectField}
                  value={this.state.value}
                  onChange={this.handleChange}
                  maxHeight={200}
                  hintText="PaketTyp"
                  required
                  errorText="Dieses Feld wird benötigt."
                  floatingLabelText="PaketTyp"
                  multiLine={false}
                  rows={1}
                >
                  <MenuItem key="Brief" value={"Brief"} primaryText="Brief" />
                  <MenuItem key="Paket" value={"Paket"} primaryText="Paket" />
                </SelectField>
                <br />
              </div>
              {
                this.state.paketVisible
                  ? <div>
                    {
                      this.state.value === "Brief"
                      ? <Brief post_mail_styles={this.state.parent_styles} />
                      : <Paket post_mail_styles={this.state.parent_styles} />
                    }
                    </div>
                  : <div>
                      < ZustelldauerInfo  post_mail_styles={this.state.parent_styles}
                      />           <br />
                    </div>
              }
            </div>
    }
}



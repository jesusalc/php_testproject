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
      parent_styles:     props.post_mail_styles,
      value:             props.initial_paket_typ,
      paket_breite:      props.initial_paket_breite,
      paket_hoeche:      props.initial_paket_hoeche,
      paket_laenge:      props.initial_paket_laenge,
      paket_gewicht:     props.initial_paket_gewicht,
      brief_gewicht:     props.initial_brief_gewicht,
      paketVisible:      false,
      errorText:         "",
      floatingLabelText: "PaketTyp"
    }

    this.onClick = this.onClick.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.validatePaketTyp = this.validatePaketTyp.bind(this)
    this.processAcceptedChange = this.processAcceptedChange.bind(this)
    this.notifyNewValueToParent = this.notifyNewValueToParent.bind(this)
    this.onChildBriefPaketChanged = this.onChildBriefPaketChanged.bind(this)
  }
  notifyNewValueToParent(event, new_value) {
    this.setState({ value: new_value }); // we update our state
    this.props.callbackParent("PaketTyp", "paket_typ", new_value); // we notify our parent
  }

  componentWillMount(event) {
    this.validatePaketTyp(event, this.state.value)
  }

  validatePaketTyp(event, value) {
    console.log(`validatePaketTyp says ${value}`)
    console.log(`validatePaketTyp says ${typeof value === "undefined"}`)
    let error_found = 0
    if (typeof value === "undefined") {
      this.setState({ errorText: "Bitte wählen Sie aus nür Brief oder Paket." })
      error_found = 1
    } else {
      this.setState({ errorText: '' })
    }

    //Not empty
    if (!error_found && value === "") {
      this.setState({ errorText: "Dieses Feld wird benötigt."})
      error_found = 1
    } else {
      this.setState({ errorText: '' })
    }

    if (!error_found) {
      this.setState({ floatingLabelText: "" })
      this.processAcceptedChange(event, value)
    } else {
      this.setState({ floatingLabelText: "PaketTyp" })
    }
  }

  processAcceptedChange(event, value){
    let paket_typ = this.getBriefORPaket(value)
    console.log(`processAcceptedChange says ${paket_typ}`)
    this.setState({
      value: value,
      paketVisible: true
    })
    this.notifyNewValueToParent(event, value)
  }

  onChildBriefPaketChanged(caller, field_name, new_value) {
    console.log(`${caller}-${[field_name]}: ${new_value}`)
    this.setState({ [field_name]: new_value })
    console.log(`confirmation ${[field_name]} is ${this.state[field_name]}`)
  }

  onClick() {
    this.setState({
      paketVisible: !this.state.paketVisible
    })
  }

  handleChange = (event, index, value) => {
    this.validatePaketTyp(event, value)
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
                  errorText={this.state.errorText}
                  floatingLabelText={this.state.floatingLabelText}
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
                      ? <Brief
                          post_mail_styles={this.state.parent_styles}
                          initial_brief_gewicht={this.state.brief_gewicht}
                          callbackParent={this.onChildBriefPaketChanged}
                        />
                      : <Paket
                          post_mail_styles={this.state.parent_styles}
                          initial_paket_breite={this.state.paket_breite}
                          initial_paket_hoeche={this.state.paket_hoeche}
                          initial_paket_laenge={this.state.paket_laenge}
                          initial_paket_gewicht={this.state.paket_gewicht}
                          callbackParent={this.onChildBriefPaketChanged}
                        />
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



import React, {Component} from 'react'
import SelectField from 'material-ui/SelectField'
import MenuItem from 'material-ui/MenuItem'

const EmpfaengerLandStyle = {
  selectField: {
    textAlign: 'left',
  }
}

export default class EmpfaengerLand extends Component {
  constructor(props, context) {
    super(props, context)

    this.state = {
      value: "DEU",
    }
  }

  handleChange = (event, index, value) => {
    this.setState({value});
  }

  render() {
    return <SelectField
                key="empfaenger_land"
                name="empfaenger_land"
                id="empfaenger_land"
                style={EmpfaengerLandStyle.selectField}
                value={this.state.value}
                onChange={this.handleChange}
                maxHeight={200}
                hintText="Land"
                required
                errorText="Dieses Feld wird benötigt."
                floatingLabelText="Land"
                multiLine={false}
                rows={1}
              >
                <MenuItem key="BEL" value={"BEL"} primaryText="Belgien" />
                <MenuItem key="BGR" value={"BGR"} primaryText="Bulgarien" />
                <MenuItem key="DNK" value={"DNK"} primaryText="Dänemark" />
                <MenuItem key="DEU" value={"DEU"} primaryText="Deutschland"/>
                <MenuItem key="EST" value={"EST"} primaryText="Estland" />
                <MenuItem key="FIN" value={"FIN"} primaryText="Finnland" />
                <MenuItem key="FRA" value={"FRA"} primaryText="Frankreich" />
                <MenuItem key="GRC" value={"GRC"} primaryText="Griechenland" />
                <MenuItem key="GBR" value={"GBR"} primaryText="Großbritannien" />
                <MenuItem key="IRL" value={"IRL"} primaryText="Irland" />
                <MenuItem key="ITA" value={"ITA"} primaryText="Italien" />
                <MenuItem key="HRV" value={"HRV"} primaryText="Kroatien" />
                <MenuItem key="LVA" value={"LVA"} primaryText="Lettland" />
                <MenuItem key="LTU" value={"LTU"} primaryText="Litauen" />
                <MenuItem key="LUX" value={"LUX"} primaryText="Luxemburg" />
                <MenuItem key="MCO" value={"MCO"} primaryText="Monaco" />
                <MenuItem key="NLD" value={"NLD"} primaryText="Niederlande" />
                <MenuItem key="AUT" value={"AUT"} primaryText="Österreich" />
                <MenuItem key="POL" value={"POL"} primaryText="Polen" />
                <MenuItem key="PRT" value={"PRT"} primaryText="Portugal" />
                <MenuItem key="ROU" value={"ROU"} primaryText="Rumänien" />
                <MenuItem key="SWE" value={"SWE"} primaryText="Schweden" />
                <MenuItem key="SVK" value={"SVK"} primaryText="Slowakei" />
                <MenuItem key="SVN" value={"SVN"} primaryText="Slowenien" />
                <MenuItem key="ESP" value={"ESP"} primaryText="Spanien" />
                <MenuItem key="CZE" value={"CZE"} primaryText="Tschechien" />
                <MenuItem key="HUN" value={"HUN"} primaryText="Ungarn" />
              </SelectField>
    }
}



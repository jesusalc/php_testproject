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
    console.log({value})
    this.setState({value})
  }

  getDeliveryDays(packet_typ, destination){
    switch (packet_typ) {
      case "Packet":
        switch (destination) {
          case "NAL": return 2
            break
          case "INTL": return 7
            break
          case "BEL": return 2
            break
          case "BGR": return 4
            break
          case "DNK": return 2
            break
          case "DEU": return 2
            break
          case "EST": return 3
            break
          case "FIN": return 3
            break
          case "FRA": return 2
            break
          case "GRC": return 5
            break
          case "GBR": return 2
            break
          case "IRL": return 3
            break
          case "ITA": return 2
            break
          case "HRV": return 3
            break
          case "LVA": return 3
            break
          case "LTU": return 3
            break
          case "LUX": return 2
            break
          case "MCO": return 2
            break
          case "NLD": return 2
            break
          case "AUT": return 2
            break
          case "POL": return 2
            break
          case "PRT": return 2
            break
          case "ROU": return 3
            break
          case "SWE": return 2
            break
          case "SVK": return 2
            break
          case "SVN": return 2
            break
          case "ESP": return 3
            break
          case "CZE": return 2
            break
          case "HUN": return 2
            break
          default:
            return 10
        }
        break
      default: //"Brief"
        switch (destination) {
          case "NAL": return 1
            break
          case "INTL": return 2
            break
          case "BEL": return 2
            break
          case "BGR": return 2
            break
          case "DNK": return 1
            break
          case "DEU": return 1
            break
          case "EST": return 2
            break
          case "FIN": return 2
            break
          case "FRA": return 1
            break
          case "GRC": return 2
            break
          case "GBR": return 2
            break
          case "IRL": return 2
            break
          case "ITA": return 2
            break
          case "HRV": return 2
            break
          case "LVA": return 2
            break
          case "LTU": return 2
            break
          case "LUX": return 2
            break
          case "MCO": return 2
            break
          case "NLD": return 1
            break
          case "AUT": return 1
            break
          case "POL": return 1
            break
          case "PRT": return 2
            break
          case "ROU": return 2
            break
          case "SWE": return 2
            break
          case "SVK": return 2
            break
          case "SVN": return 2
            break
          case "ESP": return 2
            break
          case "CZE": return 1
            break
          case "HUN": return 2
            break
          default:
            return 2
        }
    }
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
                <MenuItem key="NAL" value={"NAL"} primaryText="National" />
                <MenuItem key="INTL" value={"INTL"} primaryText="International" />
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



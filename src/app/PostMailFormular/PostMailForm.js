/**
 * In this file, we create a React component
 * which incorporates components provided by Material-UI.
 */
import React, {Component} from 'react'
import FontIcon from 'material-ui/FontIcon'
import SelectField from 'material-ui/SelectField'
import MenuItem from 'material-ui/MenuItem'
import DatePicker from 'material-ui/DatePicker'
import Divider from 'material-ui/Divider'
import Paper from 'material-ui/Paper'
import areIntlLocalesSupported from 'intl-locales-supported'
import en from 'react-intl/locale-data/en'
import fr from 'react-intl/locale-data/fr'
import de from 'react-intl/locale-data/de'
import TimePicker from 'material-ui/TimePicker'
import Toggle from 'material-ui/Toggle'
import RaisedButton from 'material-ui/RaisedButton'
import TextField from 'material-ui/TextField'
import Dialog from 'material-ui/Dialog'
import {deepOrange500} from 'material-ui/styles/colors'
import FlatButton from 'material-ui/FlatButton'
import getMuiTheme from 'material-ui/styles/getMuiTheme'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'

const style = {
  margin: 12,
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

const ZustelldauerInfoStyle = {
  container: {
    textAlign: 'center',
    paddingTop: 10,
    width: '100%'
  }
}

const BriefGewichtStyle = {
  textfield: {
    width: '4em'
  }
}

const PacketBreiteStyle = {
  textfield: {
    width: '4em'
  }
}

const PacketGewichtStyle = {
  textfield: {
    width: '4em'
  }
}

const PacketHoecheStyle = {
  textfield: {
    width: '4em'
  }
}

const PacketLaengeStyle = {
  textfield: {
    width: '4em'
  }
}

const muiTheme = getMuiTheme({
  palette: {
    accent1Color: deepOrange500,
  },
})

let DateTimeFormat

/**
 * Use the native Intl.DateTimeFormat if available, or a polyfill if not.
 */
if (areIntlLocalesSupported(['fr', 'fa-IR','de','de-DE'])) {
  DateTimeFormat = global.Intl.DateTimeFormat
} else {
  const IntlPolyfill = require('intl')
  DateTimeFormat = IntlPolyfill.DateTimeFormat
  require('intl/locale-data/jsonp/fr')
  require('intl/locale-data/jsonp/fa-IR')
}

const disableWeekends = (date) => {
  return date.getDay() === 0 || date.getDay() === 6;
}

class PostMailForm extends Component {
  constructor(props, context) {
    super(props, context)

    this.state = {
      open: false,
    }


    this.onChange = this.onChange.bind(this)
    this.onSubmit = this.onSubmit.bind(this)
    this.onSubmit = this.onSubmit.bind(this)
    this.handleRequestClose = this.handleRequestClose.bind(this)
    this.handleTouchTap = this.handleTouchTap.bind(this)
  }

  handleRequestClose = () => {
    this.setState({
      open: false,
    });
  }

  handleTouchTap = () => {
    this.setState({
      open: true,
    });
  }

  handleChange = (event, index, value) => this.setState({value});

  onChange(e) {
    console.log(e.target.name)
    console.log(e.target.value)
    this.setState({[e.target.name]: e.target.value})
  }

  onSubmit(e){
    e.preventDefault()
    console.log(this.state)
    // here sent state to the server by the XMLHttpRequest or By Fetch
  }

  render() {
    const standardActions = (
      <FlatButton
        label="Ok"
        primary={true}
        onTouchTap={this.handleRequestClose}
      />
    );

    return (
      <MuiThemeProvider muiTheme={muiTheme}>
        <Paper zDepth={2}>
          <div style={PostMailStyle.container}>
            <form onSubmit={this.onSubmit} >
              <input
                type="text"
                name="email"
                value={this.state.email}
                onChange={this.onChange}
              />

              <p
                value={this.state.email}
                onChange={this.onChange} >
              </p>

              <RaisedButton
                label="Login"
                type="submit"
                primary
                style={style}
              />
            </form>
          </div>
          <div style={PostMailStyle.container}>
            <h1>Webanwendung Web Paket Postsendungen</h1>
            <h2>Produkt wählen &amp; adressieren</h2>
            <h3>Wohin möchten Sie Ihr Paket verschicken?</h3>


            <form
              key="empfaenger_webpacket"
              name="empfaenger_webpacket"
              id="empfaenger_webpacket"
              method="post"
              action="./CourierHelper.php"
              >

              <input
                key="_method"
                name="_method"
                id="_method"
                type="hidden"
                required
                value="POST" />

              <TextField
                key="empfaenger_name"
                name="empfaenger_name"
                id="empfaenger_name"
                hintText="Empfängername und Nachname"
                required
                errorText="Dieses Feld wird benötigt."
                floatingLabelText="Empfängername"
                multiLine={false}
                rows={1}
              />
              <br />
              <TextField
                key="empfaenger_tracking"
                name="empfaenger_tracking"
                id="empfaenger_tracking"
                hintText="eindeutige Tracking-Id"
                disabled={true}
                floatingLabelText="Eindeutige Tracking-Id"
                value="UPS1231KJU65K2017"
                multiLine={false}
                rows={1}
              />
              <br />
              <DatePicker
                key="empfaenger_datum"
                name="empfaenger_datum"
                id="empfaenger_datum"
                hintText="Eingangsdatum"
                required
                floatingLabelText="Eingangsdatum"
                errorText="Dieses Feld wird benötigt."
                container="inline"
                mode="landscape"
                shouldDisableDate={disableWeekends}
                locale="de"
                okLabel="Nutzen"
                cancelLabel="Beenden"
                firstDayOfWeek={1}
                formatDate={new DateTimeFormat('de', {
                  day: 'numeric',
                  month: 'numeric',
                  year: 'numeric',
                }).format}
              />
              <br />
              <div style={ZustelldauerInfoStyle.container}>
                <Dialog
                  open={this.state.open}
                  title="Zustelldauer"
                  actions={standardActions}
                  onRequestClose={this.handleRequestClose}
                  >
                  Regeln hierzu:
                  <ul>
                    <li>Briefe National 1 Tag, Interational 2 Tage
                          </li>
                    <li>Pakete National 2 Tage, International 7 Tage
                    </li>
                  </ul>
                </Dialog>
                <RaisedButton
                  key="zustelldauer_info"
                  name="zustelldauer_info"
                  id="zustelldauer_info"
                  label="Zustelldauer Info"
                  secondary={true}
                  onTouchTap={this.handleTouchTap}
                />
              </div>
              <br />
              <TextField
                key="zustelldauer"
                name="zustelldauer"
                id="zustelldauer"
                hintText="Zustelldauer"
                disabled={true}
                floatingLabelText="Zustelldauer"
                value="in der Regel in 1-2 Tagen"
                multiLine={false}
                rows={1}
              />
              <br />
              <TextField
                key="empfaenger_zollkosten"
                name="empfaenger_zollkosten"
                id="empfaenger_zollkosten"
                hintText="Zollkosten"
                required
                errorText="Dieses Feld wird benötigt."
                floatingLabelText="Zollkosten"
                multiLine={false}
                rows={1}
              />
              <br />
              <SelectField
                key="empfaenger_land"
                name="empfaenger_land"
                id="empfaenger_land"
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
                <MenuItem key="BEL" value="BEL" primaryText="Belgien" />
                <MenuItem key="BGR" value="BGR" primaryText="Bulgarien" />
                <MenuItem key="DNK" value="DNK" primaryText="Dänemark" />
                <MenuItem key="DEU" value="DEU" primaryText="Deutschland"/>
                <MenuItem key="EST" value="EST" primaryText="Estland" />
                <MenuItem key="FIN" value="FIN" primaryText="Finnland" />
                <MenuItem key="FRA" value="FRA" primaryText="Frankreich" />
                <MenuItem key="GRC" value="GRC" primaryText="Griechenland" />
                <MenuItem key="GBR" value="GBR" primaryText="Großbritannien" />
                <MenuItem key="IRL" value="IRL" primaryText="Irland" />
                <MenuItem key="ITA" value="ITA" primaryText="Italien" />
                <MenuItem key="HRV" value="HRV" primaryText="Kroatien" />
                <MenuItem key="LVA" value="LVA" primaryText="Lettland" />
                <MenuItem key="LTU" value="LTU" primaryText="Litauen" />
                <MenuItem key="LUX" value="LUX" primaryText="Luxemburg" />
                <MenuItem key="MCO" value="MCO" primaryText="Monaco" />
                <MenuItem key="NLD" value="NLD" primaryText="Niederlande" />
                <MenuItem key="AUT" value="AUT" primaryText="Österreich" />
                <MenuItem key="POL" value="POL" primaryText="Polen" />
                <MenuItem key="PRT" value="PRT" primaryText="Portugal" />
                <MenuItem key="ROU" value="ROU" primaryText="Rumänien" />
                <MenuItem key="SWE" value="SWE" primaryText="Schweden" />
                <MenuItem key="SVK" value="SVK" primaryText="Slowakei" />
                <MenuItem key="SVN" value="SVN" primaryText="Slowenien" />
                <MenuItem key="ESP" value="ESP" primaryText="Spanien" />
                <MenuItem key="CZE" value="CZE" primaryText="Tschechien" />
                <MenuItem key="HUN" value="HUN" primaryText="Ungarn" />
              </SelectField>
              <br />
              <h3>Welches PacketTyp ist das Paket?</h3>
              <SelectField
                key="packet_typ"
                name="packet_typ"
                id="packet_typ"
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
                <MenuItem key="Brief" value="Brief" primaryText="Brief" />
                <MenuItem key="Packet" value="Packet" primaryText="Packet" />
              </SelectField>
              <br />

              <div style={PostMailStyle.container}>
                <h3>Wie groß ist das Brief?</h3>
                <TextField
                  key="brief_gewicht"
                  name="brief_gewicht"
                  id="brief_gewicht"
                  hintText="Brief Gewicht"
                  floatingLabelText="Brief Gewicht"
                  multiLine={false}
                  rows={1}
                /> g
                <br />
              </div>
              <div style={PostMailStyle.container}>
                <h3>Wie groß ist das Packet?</h3>
                <div style={PostMailStyle.container}>
                  <FontIcon
                    className="material-icons"
                    style={PostMailStyle.iconStyles}
                  > border_bottom
                  </FontIcon>
                  <TextField style={PacketLaengeStyle.textfield}
                    key="packet_laenge"
                    name="packet_laenge"
                    id="packet_laenge"
                    hintText="Länge"
                    floatingLabelText="Länge"
                    multiLine={false}
                    rows={1}
                  /> cm
                </div>

                <div style={PostMailStyle.container}>
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

                <div style={PostMailStyle.container}>
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
                  <br />
                </div>
                <div style={PostMailStyle.container}>
                  <h3>Wie schwer ist dein Packet?</h3>
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
                    <br />
                </div>
              </div>
              <RaisedButton
                key="versand_submit"
                name="versand_submit"
                id="versand_submit"
                label="Versand des Postpaketregisters"
                type="submit"
                primary
                secondary={false}
              />
              <br />
              <br />
            </form>
          </div>
        </Paper>
      </MuiThemeProvider>
    );
  }
}

export default PostMailForm;


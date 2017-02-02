/**
 * In this file, we create a React component
 * which incorporates components provided by Material-UI.
 */
import React, {Component} from 'react'

import RaisedButton from 'material-ui/RaisedButton'
import FontIcon from 'material-ui/FontIcon'

import {deepOrange500} from 'material-ui/styles/colors';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Divider from 'material-ui/Divider'
import Paper from 'material-ui/Paper'

import EmpfaengerDatum from  './fields/EmpfaengerDatum'
import EmpfaengerLand from  './fields/EmpfaengerLand'
import EmpfaengerName from  './fields/EmpfaengerName'
import EmpfaengerTracking from  './fields/EmpfaengerTracking'
import EmpfaengerZeit from  './fields/EmpfaengerZeit'
import EmpfaengerZollkosten from  './fields/EmpfaengerZollkosten'
import HiddenFlagPOST from  './fields/HiddenFlagPOST'

import PaketTyp from  './fields/PaketTyp'
import VersandSubmit from  './fields/VersandSubmit'

const PostMailStyles = {
  container: {
    textAlign: 'center',
    paddingTop: 10,
    width: '100%'
  },
  iconStyles: {
    marginRight: 24,
  }
}

const muiTheme = getMuiTheme({
  palette: {
    accent1Color: deepOrange500,
  },
})

class PostMailForm extends Component {
  constructor(props, context) {
    super(props, context)

    this.state = {
      hidden_flag_post: "",
      empfaenger_name: "Pancho Villa",
      paket_typ: "",
      paket_breite: 0,
      paket_hoeche: 0,
      paket_laenge: 0,
      paket_gewicht: 0,
      brief_gewicht: 0,
      empfaenger_land: "",
      empfaenger_datum: "",
      empfaenger_zollkostern: "",
      empfaenger_tracking: "",
    }

    this.handleChange = this.handleChange.bind(this)
    this.onChildChanged = this.onChildChanged.bind(this)
  }

  handleChange = (event, index, value) => {
    console.log(`${event} - ${index} - ${value}`)
  }

  onChildChanged(caller, new_value) {
    switch(caller) {
      case "EmpfaengerName":
        this.setState({ empfaenger_name: new_value });
        break
      default:

    }
  }

  render() {
    return <MuiThemeProvider muiTheme={muiTheme}>
        <Paper zDepth={2}>
          <div style={PostMailStyles.container}>
            <h1>Webanwendung Web Paket Postsendungen</h1>
            <h2>Produkt wählen &amp; adressieren</h2>

            <form
              key="empfaenger_webpaket"
              name="empfaenger_webpaket"
              id="empfaenger_webpaket"
              method="post"
              action="./CourierHelper.php"
              onSubmit={this.onSubmit}
              >
              < HiddenFlagPOST       />           <br />
              < EmpfaengerName
                  post_mail_styles={PostMailStyles}
                  initial_empfaenger_name={this.state.empfaenger_name}
                  callbackParent={this.onChildChanged}
              />           <br />
              < PaketTyp
                  post_mail_styles={PostMailStyles}
              />           <br />
              <h3>Wohin möchten Sie Ihr Paket verschicken?</h3>
              < EmpfaengerLand       />           <br />

              < EmpfaengerDatum      />           <br />
              < EmpfaengerZollkosten />           <br />
              < EmpfaengerTracking   />           <br />
              <br />
              <br />
              < VersandSubmit        />           <br />
              <br />
              <br />
            </form>
          </div>
        </Paper>
      </MuiThemeProvider>

  }
}

export default PostMailForm;


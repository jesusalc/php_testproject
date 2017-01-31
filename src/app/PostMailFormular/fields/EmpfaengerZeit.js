import React, {Component} from 'react'
import areIntlLocalesSupported from 'intl-locales-supported'
import en from 'react-intl/locale-data/en'
import fr from 'react-intl/locale-data/fr'
import de from 'react-intl/locale-data/de'
import TimePicker from 'material-ui/TimePicker'


export default class EmpfaengerZeit extends Component {
  constructor(props, context) {
    super(props, context)

    this.state = {
      open: false,
    }
  }

  render() {
    return <TimePicker
              key="empfaenger_zeit"
              name="empfaenger_zeit"
              id="empfaenger_zeit"
              hintText="Eingangszeit"
              floatingLabelText="Eingangszeit"
              mode="landscape"
              locale="de"
              hintText="Wählen Sie eine Tageszeit für die Paketlieferung an"
              okLabel="Nutzen"
              cancelLabel="Beenden"
            />
    }
}


import React, {Component} from 'react'
import DatePicker from 'material-ui/DatePicker'
import areIntlLocalesSupported from 'intl-locales-supported'
import en from 'react-intl/locale-data/en'
import fr from 'react-intl/locale-data/fr'
import de from 'react-intl/locale-data/de'
import TimePicker from 'material-ui/TimePicker'

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
  return date.getDay() === 0 || date.getDay() === 6
}

class EmpfaengerDatum extends Component {
  constructor(props, context) {
    super(props, context)

    this.state = {
      value: "",
    }
  }

  render() {
    return      <DatePicker
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
                  locale="de-DE"
                  okLabel="Nutzen"
                  cancelLabel="Beenden"
                  firstDayOfWeek={1}
                  formatDate={new DateTimeFormat('de', {
                    day: 'numeric',
                    month: 'numeric',
                    year: 'numeric',
                  }).format}
                />

    }
}



module.exports = EmpfaengerDatum

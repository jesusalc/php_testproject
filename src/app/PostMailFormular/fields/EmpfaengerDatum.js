import React, {Component} from 'react'
import DatePicker from 'material-ui/DatePicker'
import areIntlLocalesSupported from 'intl-locales-supported'
import {addLocaleData} from 'react-intl';
import en from 'react-intl/locale-data/en'
import fr from 'react-intl/locale-data/fr'
import de from 'react-intl/locale-data/de'
import TimePicker from 'material-ui/TimePicker'

addLocaleData(en);
addLocaleData(fr);
addLocaleData(de);

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
  require('intl/locale-data/jsonp/de')
  require('intl/locale-data/jsonp/de-DE')
}

const disableWeekends = (date) => {
  return date.getDay() === 0 || date.getDay() === 6
}

class EmpfaengerDatum extends Component {
  constructor(props, context) {
    super(props, context)

    const minDate = new Date()
    const maxDate = new Date()

    minDate.setFullYear(minDate.getFullYear() - 1)
    minDate.setHours(0, 0, 0, 0)
    maxDate.setFullYear(maxDate.getFullYear() + 1)
    maxDate.setHours(0, 0, 0, 0)

    const daysName=['Sontag', 'Montag', 'Dienstag', 'Mittwoch', 'Donnerstag', 'Freitag', 'Samstag']
    const monthsName=['Januar', 'Februar',  'März', 'April',  'Mai', 'Juni',  'Juli', 'August',  'September', 'Oktober',  'November', 'Dezember']

    this.state = {
      minDate: minDate,
      maxDate: maxDate,
      autoOk: true,
      disableYearSelection: false,
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
                  minDate={this.state.minDate}
                  maxDate={this.state.maxDate}
                  disableYearSelection={this.state.disableYearSelection}
                  shouldDisableDate={disableWeekends}
                  okLabel="Nutzen"
                  defaultDate={this.state.minDate}
                  cancelLabel="Beenden"
                  firstDayOfWeek={1}
                  autoOk={this.state.autoOk}
                  formatDate={new DateTimeFormat('de', {
                    day: 'numeric',
                    month: 'numeric',
                    year: 'numeric',
                  }).format}
                />

    }
}



module.exports = EmpfaengerDatum

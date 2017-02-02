import React, {Component} from 'react'
import TextField from 'material-ui/TextField'

const EmpfaengerNameStyle = {

}

export default class EmpfaengerName extends Component {
  constructor(props, context) {
    super(props, context)

    this.state = {
      parent_styles: props.post_mail_styles,
      value: props.initial_empfaenger_name, //"Bjørk Larsen",
      errorText: "",
      floatingLabelText: "Empfängername"
    }
    this.onChange=this.onChange.bind(this)
    this.onTextChanged=this.onTextChanged.bind(this)
  }

  onChange(event) {
    let value = event.target.value
    let error_found = 0
    //Not empty
    if (value === "") {
      this.setState({ errorText: "Dieses Feld wird benötigt." })
      error_found = 1
    } else {
      this.setState({ errorText: '' })
    }
    if (!error_found && value.match("^[^±!@£$%^&*_+§¡€#¢§¶•ªº«\\/<>?:;|=.,]{1,20}$")) {
      this.setState({ errorText: "" })
    } else {
      this.setState({ errorText: 'Ungültige Zeichen im Namen.' })
      error_found = 1
    }
    if (!error_found && value.split(" ").length < 2) {
      error_found = 1
      this.setState({ errorText: 'Vor- und Nachname sind mindestens erforderlich.' })
    } else {
      this.setState({ errorText: "" })
    }

    if (!error_found) {
      this.setState({ floatingLabelText: "" })
      this.onTextChanged(event, value)
    } else {
      this.setState({ floatingLabelText: "Empfängername" })
    }

  }
  onTextChanged(event, new_value) {
    this.setState({ value: new_value }); // we update our state
    this.props.callbackParent("EmpfaengerName", new_value); // we notify our parent
  }

  render() {
    //
    //onChange={() => this.onTextChanged()}
    return <TextField
                key="empfaenger_name"
                name="empfaenger_name"
                id="empfaenger_name"
                hintText="Empfängername und Nachname"
                required
                defaultValue={this.state.value}
                errorText={this.state.errorText}
                onChange={this.onChange}
                floatingLabelText={this.state.floatingLabelText}
                multiLine={false}
                rows={1}
              />
    }
}



import React, {Component} from 'react'
import RaisedButton from 'material-ui/RaisedButton'

import PaketTyp from  './PaketTyp'

const PaketTestFormStyle = {
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

export default class PaketTestForm extends Component {
  constructor(props, context) {
    super(props, context)

    this.state = {
      open: false,
            value: "Brief",
      childVisible: false,
    }


    this.onChange = this.onChange.bind(this)
    this.onSubmit = this.onSubmit.bind(this)

  }

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

    return
          <div style={PaketTestFormStyle.container}>
            <form onSubmit={this.onSubmit} >
              <input
                type="text"
                name="email"
                value={this.state.email}
                onChange={this.onChange}
              />
<PaketTyp />
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
  }
}


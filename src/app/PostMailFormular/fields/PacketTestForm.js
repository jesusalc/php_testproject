/**
 * In this file, we create a React component
 * which incorporates components provided by Material-UI.
 */
import React, {Component} from 'react'

import RaisedButton from 'material-ui/RaisedButton'


import PacketTyp from  './PacketTyp'


const PacketTestFormStyle = {
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

class PacketTestForm extends Component {
  constructor(props, context) {
    super(props, context)

    this.state = {
      open: false,
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
          <div style={PacketTestFormStyle.container}>
            <form onSubmit={this.onSubmit} >
              <input
                type="text"
                name="email"
                value={this.state.email}
                onChange={this.onChange}
              />
<PacketTyp />
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

export default PacketTestForm;


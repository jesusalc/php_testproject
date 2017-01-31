import React, {Component} from 'react'
import TextField from 'material-ui/TextField'

export default class HiddenFlagPOST extends Component {
  constructor(props, context) {
    super(props, context)

    this.state = {
      value: "POST"
    }
  }

  render() {
    return <input
                key="_method"
                name="_method"
                id="_method"
                type="hidden"
                required
                value="POST"
            />
    }
}



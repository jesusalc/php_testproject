import React, {Component} from 'react'
import RaisedButton from 'material-ui/RaisedButton'

const VersandSubmitStyle = {

}

export default class VersandSubmit extends Component {
  constructor(props, context) {
    super(props, context)

    this.state = {
      value: "",
    }
  }

  render() {
    return <RaisedButton
                key="versand_submit"
                name="versand_submit"
                id="versand_submit"
                label="Versand des Postpaketregisters"
                type="submit"
                primary
                secondary={false}
              />
    }
}



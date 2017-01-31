import React, {Component} from 'react'
import TextField from 'material-ui/TextField'

const BriefGewichtStyle = {
  textfield: {
    width: '4em'
  }
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

export default class BriefGewicht extends Component {
  constructor(props, context) {
    super(props, context)

    this.state = {
      value: ""
    }
  }

  render() {
    return <div style={PostMailStyle.container}>
                <TextField
                  style={BriefGewichtStyle.textfield}
                  key="brief_gewicht"
                  name="brief_gewicht"
                  id="brief_gewicht"
                  hintText="Gewicht"
                  floatingLabelText="Gewicht"
                  multiLine={false}
                  rows={1}
                /> g
              </div>

    }
}


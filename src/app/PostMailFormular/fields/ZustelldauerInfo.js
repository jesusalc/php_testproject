import React, {Component} from 'react'
import RaisedButton from 'material-ui/RaisedButton'
import Dialog from 'material-ui/Dialog'
import FlatButton from 'material-ui/FlatButton'

const ZustelldauerInfoStyle = {
  container: {
    textAlign: 'center',
    paddingTop: 10,
    width: '100%'
  }
}

class ZustelldauerInfo extends Component {
  constructor(props, context) {
    super(props, context)

    this.state = {
      open: false,
    }
  }
  
  handleRequestClose = () => {
    this.setState({
      open: false,
    })
  }

  handleTouchTap = () => {
    this.setState({
      open: true,
    })
  }

  render() {
    const standardActions = (
      <FlatButton
        label="Ok"
        primary={true}
        onTouchTap={this.handleRequestClose}
      />
    )
    return  <div style={ZustelldauerInfoStyle.container}>
              <Dialog
                open={this.state.open}
                title="Zustelldauer"
                actions={standardActions}
                onRequestClose={this.handleRequestClose}
                >
                Regeln hierzu:
                <ul>
                  <li>Briefe National 1 Tag, Interational 2 Tage
                        </li>
                  <li>Pakete National 2 Tage, International 7 Tage
                  </li>
                </ul> 
              </Dialog>
              <RaisedButton
                key="zustelldauer_info"
                name="zustelldauer_info"
                id="zustelldauer_info"
                label="Zustelldauer Info"
                secondary={true}
                onTouchTap={this.handleTouchTap}
              />   
            </div> 
    }
}


module.exports = ZustelldauerInfo
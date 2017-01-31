import React, {Component} from 'react'

class Brief extends Component {
  render() {
    return  <div style={PostMailStyle.container}>

              <h3>Wie groß ist das Brief?</h3>
              <BriefGewicht />  <br />

            </div>
  }
}

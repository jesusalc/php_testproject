import React, {Component} from 'react'

import BriefGewicht from  './BriefGewicht'

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

export default class Brief extends Component {
  render() {
    return  <div style={PostMailStyle.container}>

              <h3>Wie groß ist das Brief?</h3>
              <BriefGewicht />  <br />

            </div>
  }
}

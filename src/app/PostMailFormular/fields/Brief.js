import React, {Component} from 'react'

import BriefGewicht from  './BriefGewicht'

export default class Brief extends Component {
  render() {
    return  <div style={this.props.post_mail_styles.container}>

              <h3>Wie groß ist das Brief?</h3>
              <BriefGewicht post_mail_styles={this.props.post_mail_styles.container} />  <br />

            </div>
  }
}

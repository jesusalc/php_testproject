import React, {Component} from 'react'

import BriefGewicht from  './BriefGewicht'

export default class Brief extends Component {
   constructor(props, context) {
    super(props, context)

    this.state = {
      brief_gewicht:     props.initial_brief_gewicht,
    }
  }
  render() {
    return  <div style={this.props.post_mail_styles.container}>

              <h3>Wie groß ist das Brief?</h3>
              <BriefGewicht
                onChange={this.handleChange}
                post_mail_styles={this.props.post_mail_styles}
              />  <br />

            </div>
  }
}

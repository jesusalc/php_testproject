import React, {Component} from 'react'

import PaketBreite from  './PaketBreite'
import PaketHoeche from  './PaketHoeche'
import PaketLaenge from  './PaketLaenge'
import PaketGewicht from  './PaketGewicht'

export default class Paket extends Component {
  render() {
    return    <div style={this.props.post_mail_styles.container}>

                <h3>Wie groß ist das Paket?</h3>
                <PaketLaenge post_mail_styles={this.props.post_mail_styles} /> <PaketBreite post_mail_styles={this.props.post_mail_styles} /> <PaketHoeche post_mail_styles={this.props.post_mail_styles} /> <br />

                <h3>Wie schwer ist dein Paket?</h3>
                <PaketGewicht post_mail_styles={this.props.post_mail_styles} /> <br />

              </div>
  }
}



import React, {Component} from 'react'

import PacketBreite from  './PacketBreite'
import PacketHoeche from  './PacketHoeche'
import PacketLaenge from  './PacketLaenge'
import PacketGewicht from  './PacketGewicht'

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

class Packet extends Component {
  render() {
    return    <div style={PostMailStyle.container}>

                <h3>Wie groß ist das Packet?</h3>
                <PacketLaenge /> <PacketBreite /> <PacketHoeche /> <br />

                <h3>Wie schwer ist dein Packet?</h3>
                <PacketGewicht /> <br />

              </div>
  }
}

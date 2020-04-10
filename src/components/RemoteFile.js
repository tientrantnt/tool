import React, { Component } from 'react'

export default class RemoteFile extends Component {
    render() {
        let item  = '<server>'+
        '<properties>'+
          '<displayName>'+this.props.name+'.'+this.props.ip+' - admin'+this.props.stt+'</displayName>'+
          '<name>'+this.props.name+'.'+this.props.ip+'</name>'+
        '</properties>'+
        '<logonCredentials inherit="None">'+
          '<profileName scope="Local">Custom</profileName>'+
          '<userName>admin'+this.props.stt+'</userName>'+
          '<password>'+this.props.password+'</password>'+
          '<domain>DESKTOP-GL3S2GL</domain>'+
        '</logonCredentials>'+
      '</server>';
        return (            
            <div>
                <h5>{item}</h5>
            </div>
        )
    }
}

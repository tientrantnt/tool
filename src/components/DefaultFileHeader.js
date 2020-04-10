import React, { Component } from 'react'

export default class DefaultFileHeader extends Component {
    render() {
        console.log(this.props.nameIP)
        //let {password,nameIP} = this.props;
        let item  = '<?xml version="1.0" encoding="utf-8"?>'+
        '<RDCMan programVersion="2.7" schemaVersion="3">'+
          '<file>'+
            '<credentialsProfiles />'+
            '<properties>'+
              '<expanded>True</expanded>'+
              '<name>f1</name>'+
            '</properties>'+
            '<remoteDesktop inherit="None">'+
            '<size>1024 x 768</size>'+
             '<sameSizeAsClientArea>False</sameSizeAsClientArea>'+
             '<fullScreen>False</fullScreen>'+
             '<colorDepth>8</colorDepth>'+
            '</remoteDesktop>'+
            '<server>'+
              '<properties>'+
                '<name>'+this.props.nameIP+'.1</name>'+
              '</properties>'+
              '<logonCredentials inherit="None">'+
                '<profileName scope="Local">Custom</profileName>'+
                '<userName>admin</userName>'+
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

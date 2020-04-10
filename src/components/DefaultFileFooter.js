import React, { Component } from 'react'

export default class DefaultFileFooter extends Component {
    render() {
        let item  = '</file>'+
        '<connected />'+
        '<favorites />'+
        '<recentlyUsed />'+
      '</RDCMan>';
        return (
            <div>
                <h5>{item}</h5>
            </div>
        )
    }
}

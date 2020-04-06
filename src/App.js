import React, { Component } from 'react';
import './App.css';
import RemoteFile from './components/RemoteFile.js';
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: '',
      name: '',
      ip:'',
      stt:'',
      password:'',
      status: false
    }
  }
  
  onChange = (event) => {
    let target = event.target;
    let name = target.name;
    let value = target.value;
    if (name === "status") {
      value = target.value === 'true' ? true : false
    }
    this.setState({
      [name]: value
    });
  }

  
  onSave = (event) => {
    event.preventDefault();  
  }
  createTable = () => {
    let table = [];
    let {ip,stt,name,password} = this.state;
    let x = '';
    if(ip>= 100 || stt >=100){
      return;
    }
    
    for (let i = 2; i <= ip; i++) {
      for(let j = 1 ; j<=stt ; j++)
      { x= Math.random().toString(36).replace(/[^a-z]+/g, '').substr(0, 10);
        table.push(<RemoteFile name={name} password={password} key={x+i+j} ip={i} stt={j} />)
      }
    }
    return table;
  }
  onClear=()=>{
    this.setState({
      ip:'',
      stt:'',
      name:'',
      password:''
    })
  }
  render() {
    let {ip,stt,name,password} = this.state;
    return (
      <div className="App">
        <div className="container">
          <div className="row">
            <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
            <div className="panel-body"> 
          <form onSubmit={this.onSave}>
            <div className="form-group">
            <label>xxx.xxx.xxx (vd: 10.0.0) :</label>
              <input
                type="text"
                className="form-control"
                name="name"
                value={name}
                onChange={this.onChange}
              />
              <label>Số lượng ip :</label>
              <input
                type="text"
                className="form-control"
                name="ip"
                value={ip}
                onChange={this.onChange}
              />
              <label>Số lượng user :</label>
              <input
                type="text"
                className="form-control"
                name="stt"
                value={stt}
                onChange={this.onChange}
              />
              <label>Password :</label>
              <input
                type="text"
                className="form-control"
                name="password"
                value={password}
                onChange={this.onChange}
              />
            </div>
            <br />
            <div className="text-center">              
              <button type="button" className="btn btn-danger" onClick={this.onClear}>Hủy Bỏ</button>
            </div> 
          </form>
        </div>
            </div>
            <div  className="col-xs-8 col-sm-8 col-md-8 col-lg-8">
            {this.createTable()}
            </div>
          </div>
        </div>
        
      
      </div>
    );
  }

}

export default App;

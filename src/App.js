import React, { Component, Fragment } from "react";
import "./App.css";
import Header from "./component/header";
import { connect } from 'react-redux'
import { fetch_data, fetch_specific_data } from './redux/actions/action'

class App extends Component {

  componentDidMount() {
    this.props.fetch_data()
  }

  handlechange=(e)=>{
      let name = e.target.value
      this.props.fetch_specific_data(name)      

  }

  render() {
    let output = this.props.data.map((element) => {
      return (
        <div key={element.char_id}>
          <div className="flip-card">
            <div className="flip-card-inner">
              <div className="flip-card-front">
                <img
                  src={element.img}
                  alt="Avatar"
                  style={{width:"300px",height:"300px"}}
                />
              </div>
              <div className="flip-card-back">
                <h3 style={{marginTop:'1em'}}>{element.name}</h3>
                <div style={{width:'15.5em',border:'1px solid white', marginLeft:'1.5em',marginRight:'1em',marginBottom:'1em'}}></div>
                <h5 style={{marginTop:'1em'}}>Actor Name: <span>{element.portrayed}</span></h5>
                <h5 style={{marginTop:'1em'}}>Nickname: <span>{element.nickname}</span></h5>
                <h5 style={{marginTop:'1em'}}>Birthday: <span>{element.birthday}</span></h5>
                <h5 style={{marginTop:'1em'}}>Status: <span>{element.status}</span></h5>
              </div>
            </div>
          </div>
        </div>
      );
    });
    return (
      <Fragment>
        <Header />
        {/* start */}
        <center>
          <div style={{ marginTop: "3em" }}>
            <form>
              <input
                placeholder="Search characters..."
                style={{ width: "35em" }}
                onChange={this.handlechange}
              />
            </form>
          </div>
        </center>
        {/* end  of input */}
        <div className="custom_container">
            {output}
        </div>
      </Fragment>
    );
  }
}

const mapStateToProps=(state)=>{
    return{
        data:state.data
    }
}

export default connect(mapStateToProps,{fetch_data,fetch_specific_data})(App)

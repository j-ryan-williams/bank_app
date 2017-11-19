import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';

import {getUserInfo} from '../../reducers/users.js';
import './Accounts.css';

class Accounts extends Component {
  componentDidMount() {
    this.props.getUserInfo();
  }
  render() {
    const {data} = this.props.user;
    const loginJSX = (
      this.props.user.data ?
        <div className="info-container">
          <h1>Community Bank</h1><hr />
          <h4>Account Info: </h4>
          <img className="avatar" src={data.img} alt="" />
          <p>username: {data.username}</p>
          <p>email: {data.email}</p>
        </div>
    :
      <div className="info-container">
        <h1>Community Bank</h1>
        <h4>Please Login to view bank information</h4>
        <Link to="/"><button>Login</button></Link>
      </div>
    )
    return (
      <div>
        ACCOUNTS
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    user: state.user
  }
}

export default connect(mapStateToProps, {getUserInfo})(Accounts)

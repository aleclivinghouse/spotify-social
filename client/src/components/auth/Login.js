import React, { Component } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import {loginUser, loginSpotify, getSpotifyUser} from "../../actions/authActions";
import classnames from "classnames";
import PopupWindow from '../misc/PopupWindow';
import { toQuery } from '../../utils/utils';
import dotenv from 'dotenv';
dotenv.config();

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      errors: {}
    };
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.auth.isAuthenticated) {
      this.props.history.push("/dashboard");
    }
    if (nextProps.errors) {
      this.setState({
        errors: nextProps.errors
      });
    }
  }

  componentDidUpdate(prevProps){
    console.log("this is prevProps ", prevProps.auth.spotifyUserData);
    console.log("this is currentProps ", this.props.auth.spotifyUserData);
    if ( prevProps.auth.spotifyUserData !== this.props.auth.spotifyUserData) {
      console.log("inside the if ", this.props.auth.spotifyUserData);
      this.props.loginSpotify(this.props.auth.spotifyUserData);
    }
  }

  onChange = e => {
    this.setState({ [e.target.id]: e.target.value });
  };

static defaultProps = {
    onRequest: () => {},
    onSuccess: () => {},
    onFailure: () => {},
}

  onBtnClick = () => {
const scopes = encodeURIComponent('user-read-private user-read-email');
const redirectURI = encodeURIComponent('http://localhost:3000/register/');
const clientId = process.env.REACT_APP_SPOTIFY_CLIENT_ID;
const url = `https://accounts.spotify.com/authorize?response_type=code&client_id=${clientId}&scope=${scopes}&redirect_uri=${redirectURI}`;
const search = toQuery({
   client_id: clientId,
   scope: scopes,
   redirect_uri: redirectURI,
   response_type: 'token'
 });
const popup = this.popup = PopupWindow.open(
      'spotify-authorization',
      `https://accounts.spotify.com/authorize?${search}`,
      { height: 1000, width: 600 }
    );

    this.onRequest();
    popup.then(
      data => this.onSuccess(data),
      error => this.onFailure(error)
    );
  }


  onRequest = () => {
   this.props.onRequest();
 }


onSuccess = (data) => {
     console.log('this is the data token on success', data.access_token);
     if (!data.access_token) {
       return this.onFailure(new Error('\'access_token\' not found'));
     }
    this.props.onSuccess(data);
    this.props.getSpotifyUser(data.access_token);
}

 onFailure = (error) => {
   console.log('this is the data on failure', error);
 }


  onSubmit = e => {
    e.preventDefault();

    const userData = {
      email: this.state.email,
      password: this.state.password
    };

    this.props.loginUser(userData);
  };

  render() {
    const { errors } = this.state;
    return (
      <div className="container">
        <div style={{ marginTop: "4rem" }} className="row">
          <div className="col s8 offset-s2">
            <Link to="/" className="btn-flat waves-effect">
              <i className="material-icons left">keyboard_backspace</i> Back to
              home
            </Link>
            <div className="col s12" style={{ paddingLeft: "11.250px" }}>
              <h4>
                <b>Login</b> below
              </h4>
              <p className="grey-text text-darken-1">
                Don't have an account? <Link to="/register">Register</Link>
              </p>
            </div>
            <form noValidate onSubmit={this.onSubmit}>
              <div className="input-field col s12">
                <input
                  onChange={this.onChange}
                  value={this.state.email}
                  error={errors.email}
                  id="email"
                  type="email"
                  className={classnames("", {
                    invalid: errors.email || errors.emailnotfound
                  })}
                />
                <label htmlFor="email">Email</label>
                <span className="red-text">
                  {errors.email}
                  {errors.emailnotfound}
                </span>
              </div>
              <div className="input-field col s12">
                <input
                  onChange={this.onChange}
                  value={this.state.password}
                  error={errors.password}
                  id="password"
                  type="password"
                  className={classnames("", {
                    invalid: errors.password || errors.passwordincorrect
                  })}
                />
                <label htmlFor="password">Password</label>
                <span className="red-text">
                  {errors.password}
                  {errors.passwordincorrect}
                </span>
              </div>
              <div className="col s12" style={{ paddingLeft: "11.250px" }}>
                <button
                  style={{
                    width: "300px",
                    borderRadius: "3px",
                    letterSpacing: "1.5px",
                    marginTop: "1rem"
                  }}
                  type="submit"
                  className="btn btn-large waves-effect waves-light hoverable blue accent-3"
                >
                  Login
                </button>
              </div>
            </form>
            <div className="login-page">
        </div>
        <button
          style={{
            width: "300px",
            borderRadius: "3px",
            letterSpacing: "1.5px",
            marginTop: "1rem"
          }}
          type="submit"
          className="btn btn-large waves-effect waves-light hoverable blue accent-3"
          onClick = {() => {this.onBtnClick()}}
        >
          Login With Spotify
        </button>
      </div>
    </div>
  </div>
    );
  }
}


Login.propTypes = {
  loginUser: PropTypes.func.isRequired,
  loginSpotify: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
};


const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors
});

export default connect(mapStateToProps,{ loginUser, loginSpotify, getSpotifyUser })(Login);

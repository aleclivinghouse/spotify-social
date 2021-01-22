import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser, getSpotifyRecentlyPlayed } from "../../actions/authActions";

class Dashboard extends Component {
  onLogoutClick = e => {
    e.preventDefault();
    this.props.logoutUser();
  };



  componentDidMount(){
      const { user, spotifyAccessToken, spotifyUserData} = this.props.auth;
      if(Object.keys(spotifyUserData).length > 0){
        this.props.getSpotifyRecentlyPlayed(spotifyAccessToken);
      }
    }


  render() {
    const { user, spotifyRecentlyPlayed } = this.props.auth;
    let name = ""
    console.log("user on dashboard: ", user);
    console.log("here are the recently played tracks: ", spotifyRecentlyPlayed);

    return (
      <div style={{ height: "75vh" }} className="container valign-wrapper">
        <div className="row">
          <div className="landing-copy col s12 center-align">
            <h4>
              <b>Hey there,</b> {user.name}
              <p className="flow-text grey-text text-darken-1">
                You are logged into a full-stack{" "}
                <span style={{ fontFamily: "monospace" }}>MERN</span> app 👏
              </p>
            </h4>
            <button
              style={{
                width: "150px",
                borderRadius: "3px",
                letterSpacing: "1.5px",
                marginTop: "1rem"
              }}
              onClick={this.onLogoutClick}
              className="btn btn-large waves-effect waves-light hoverable blue accent-3"
            >
              Logout
            </button>
          </div>
        </div>
      </div>
    );
  }
}

Dashboard.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(
  mapStateToProps,
  { logoutUser, getSpotifyRecentlyPlayed }
)(Dashboard);

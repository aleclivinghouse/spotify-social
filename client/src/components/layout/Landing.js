import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import {setLandingToken} from "../../actions/authActions";

//get the initial jwt
class Landing extends Component {
  componentDidMount(){
    this.props.setLandingToken(); 
    var returnObj = {};

    const token = "BQArndpWMUyMcDUGdHgQHrbk2vgJt8qh-W317gEQ8lG_cGvJEyaQJEKh6YQkMiqv4KagpIa-ACC-bv1NFWm04FfZT65bbwsOk6HJjh3dTDZkjnUURJ_A2gP_wUHb9-RnbvKWdlPv39HCZYTaR49P8nD2IeA24k60IHm0yGW__7njLK6_v6HvzWznaVdZP0Smn2dJ_xELhEXPqi_id-NcnBcv4r_CpnEVG56OqmT6YjHQT0PXiq8S6FCYN82xWeOqU5cZ6FqU-TDeRQDch21q81fMib5qONpkr5Z-b1A";
    const artists = ["kendrick+lamar", "nirvana", "bob+dylan", "pheobe+bridgers", "bruce+springsteen", "eminem","pearl+jam", "a+tribe+called+quest", "bon+jovi", "jay-z","vince+staples", "joni+mitchell", "the+beatles", "the+rolling+stones", "lou+reed","david+bowie","michael+jackson"];
  } //componentDidMount end
  render() {
    return (
      <div style={{ height: "75vh" }} className="container valign-wrapper">
        <div className="row">
          <div className="col s12 center-align">
            <h4>
              <b>Build</b> a login/auth app with the{" "}
              <span style={{ fontFamily: "monospace" }}>MERN</span> stack from
              scratch
            </h4>
            <p className="flow-text grey-text text-darken-1">
              Create a (minimal) full-stack app with user authentication via
              passport and JWTs
            </p>
            <br />
            <div className="col s6">
              <Link
                to="/register"
                style={{
                  width: "140px",
                  borderRadius: "3px",
                  letterSpacing: "1.5px"
                }}
                className="btn btn-large waves-effect waves-light hoverable blue accent-3"
              >
                Register
              </Link>
            </div>
            <div className="col s6">
              <Link
                to="/login"
                style={{
                  width: "140px",
                  borderRadius: "3px",
                  letterSpacing: "1.5px"
                }}
                className="btn btn-large btn-flat waves-effect white black-text"
              >
                Log In
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors
});
//


export default connect(mapStateToProps,{ setLandingToken })(Landing);

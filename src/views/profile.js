import React from "react";
import $ from 'jquery';
import { useAuth0 } from "@auth0/auth0-react";

const Profile = () => {
  const { user } = useAuth0();
  const { name, picture, email, email_verified, nickname } = user;
  const appObject = {1: "http://jfc.org", 2: "www.worshippro.org", 3: "healthie.io", 4: "greenhouse.org"}


  
    // Darkened navbar on scroll function
    $(document).ready(function(){
      $(".navbar").css("background" , "#2b2b2b");
  })

  return (
    <div className="profilepage">
      <div className="row align-items-center profile-header">
        <div className="col-md-2 mb-3">
          <img
            src={picture}
            alt="Profile"
            className="rounded-circle img-fluid profile-picture mb-3 mb-md-0"
          />
        </div>
        <div className="col-md text-center text-md-left">
          <h2>{name}</h2>
          <p className="lead text-muted">{email}</p>
        </div>
      </div>
      <div className="row">
        <div className="col-6 text-light bg-dark p-4 profileInfo">
          <h5>username: {nickname}</h5>
          <h5>email: {email}</h5>
          <h6><em>-email has {email_verified ? "" : "not"} been verified</em></h6>
          <h5>plan: Level 5</h5>
          <h5>apps: {Object.entries(appObject).map(([key, value]) => {
            return <p className="appArray">{key}. {value}</p>
          })}</h5>
        </div>
      </div>
    </div>
  );
};

export default Profile;

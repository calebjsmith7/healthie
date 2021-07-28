import React from "react";
import SignupButton from "../components/signup-button";
import $ from 'jquery';

const futureprofile = () => {
  
// Darkened navbar on scroll function
$(document).ready(function(){
    $(".navbar").css("background" , "#2b2b2b");
})

  return (
    <div className="signupPage">
    <h2>We're excited that you've chosen to join us at healthie.io</h2>
    <h4>Click signup to see what healthie can do for your business.</h4>
    <SignupButton/>
    </div>
  );
};

export default futureprofile;

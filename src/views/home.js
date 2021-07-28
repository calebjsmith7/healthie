import React, { Fragment } from "react";
import $ from "jquery";

import { HomeContent } from "../components";

const Home = () => {

  $(document).ready(function(){
    $(".navbar").css("background" , "transparent");
})
return (
  <Fragment>
    <HomeContent />
  </Fragment>
);
}

export default Home;

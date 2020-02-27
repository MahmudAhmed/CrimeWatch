import React from "react";
// import { AuthRoute } from "../util/route_util";
import { AuthRoute, ProtectedRoute } from "../util/route_util";
import { Switch, Route } from "react-router-dom";
import NavBarContainer from "./nav/navbar_container";
import MainPageContainer from "./main/main_page_container";
import ProfileContainer from "./profile/profile_container";
// import Modal from "./modal/modal";
// import LoginFormContainer from "./session/login_form_container";
// import SignupFormContainer from "./session/signup_form_container";

const App = () => (
  <div>
    <NavBarContainer />
    {/* <Modal /> */}
    <Switch>
      <Route exact path="/" component={MainPageContainer} />
      <ProtectedRoute exact path="/profile" component={ProfileContainer} />
    </Switch>
  </div>
);

export default App;

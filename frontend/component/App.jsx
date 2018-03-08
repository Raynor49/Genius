import React from 'react';
import { Route, Link} from 'react-router-dom';
import LoginFormContainer from './session/login_form_container.jsx';
import SignupFormContainer from './session/signup_form_container.jsx';
import Modal from './modal/modal';
import Header from './header/header';
import HeaderContainer from './header/header_container';
import TrackIndexContainer from './tracks/tracks_index/track_index_container.jsx';

const App = () => (
  <div>
    <Modal />
    <HeaderContainer />
    <Route exact path='/' component={TrackIndexContainer} />
  </div>
);

export default App;

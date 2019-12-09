import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Switch, Route } from 'react-router-dom';

import './App.css';

import Header from './components/header/header.component';
import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import { auth, createUserProfileDocument } from './firebase/firebase.utils';
import { setCurrentUser } from './redux/user/user.actions';


class App extends Component {

  unsubscribeFromAuth = null;

  componentDidMount() {
    // destructure
    const { setCurrentUser } = this.props;

    // when a user signs in
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      // check if theres a user auth
      if (userAuth) {
        // get the user ref from our method passing in the user auth
        // if there is a document there, we will get back the userRef
        // if there is no document there, we will create a new object and document in that place
        // and we will still get back that user ref
        const userRef = await createUserProfileDocument(userAuth);
    
        // then we will subscribe (listen for changes) to this user ref for any changes
        // to that data, 

        // whenever our user snapshot updates
        userRef.onSnapshot(snapShot => {
          // setting the user reducer value with the new object
          setCurrentUser({
              id: snapShot.id,
              ...snapShot.data()   
            });
        });
  
      }
      // if user ever logs out, aka if userAuth is null, set currentUser to null 
      setCurrentUser(userAuth);
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }


  render() {
    return (
      <div>
        <Header/>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/signin" component={SignInAndSignUpPage} />
          <Route path="/shop" component={ShopPage} />
        </Switch>
      </div>
    );
  }
 
}

const mapDispatchToProps = (dispatch) => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
})


export default connect(null, mapDispatchToProps)(App);

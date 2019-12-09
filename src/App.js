import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import './App.css';

import Header from './components/header/header.component';
import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import { auth, createUserProfileDocument } from './firebase/firebase.utils';

class App extends Component {
  constructor() {
    super();

    this.state = {
      currentUser: null
    }
  }

  unsubscribeFromAuth = null;

  componentDidMount() {
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

        // also get back the first state of our data
        userRef.onSnapshot(snapShot => {
          // use that data to set our local state
          this.setState(
            {
              currentUser: {
                id: snapShot.id,
                ...snapShot.data()
              }
            });
          
          console.log(this.state);
        });
  
      }
      // if user ever logs out, aka if userAuth is null, set currentUser to null 
      this.setState({currentUser: userAuth});
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }


  render() {
    return (
      <div>
        <Header currentUser={this.state.currentUser}/>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/signin" component={SignInAndSignUpPage} />
          <Route path="/shop" component={ShopPage} />
        </Switch>
      </div>
    );
  }
 
}

export default App;

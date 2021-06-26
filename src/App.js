import { div } from 'prelude-ls';
import React from 'react';
import {Switch ,Route} from 'react-router-dom'
import {connect} from 'react-redux';

import './App.css';

import ShopPage from './pages/shope/shop.component';
import HomePage from './pages/homepage/homepage.component';
import SingInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import Header from './components/header/header.component';
import {auth, createUserProfileDocument} from './firebase/firebase.utils';
import {setCurrentUser} from './redux/user/user.action';


class App extends React.Component  {
  

  unsubscribeFromAuth = null

componentDidMount(){
  const {setCurrentUser} = this.props;


  this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth =>{
    if (userAuth){
      const userRef = await createUserProfileDocument(userAuth);

      userRef.onSnapshot(snapShot => {
        setCurrentUser({
            id: snapShot.id,
            ...snapShot.data()
          
        });
      });
      
    }
    setCurrentUser(userAuth);
  });
}

componentWillUnmount(){
  this.unsubscribeFromAuth();
}

  render(){
    return ( 
      <div> 
        <Header />
        <switch>
        <Route exact path='/' component={HomePage}/>
        <Route  path='/shop' component={ShopPage}/>
        <Route  path='/signin' component={SingInAndSignUpPage}/>
        </switch>
        
      </div>
      );
  }
  
  
}

const mapDispatchToProps = dispatch => ({
  setCurrentUser : user => dispatch (setCurrentUser(user))
});

export default connect(null,mapDispatchToProps) (App);

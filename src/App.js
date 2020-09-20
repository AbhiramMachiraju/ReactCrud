import React from 'react';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom'
import './App.css';
import UserListComponent from './components/UserListComponent';
import HeaderComponent from './components/HeaderComponent';
import FooterComponent from './components/FooterComponent';
import AddOrUpdateUserComponent from './components/AddOrUpdateUserComponent';
import UpdateUserComponent from './components/UpdateUserComponent';


function App() {
  
  return (
    <div>
      <Router>
                <HeaderComponent/>
                  <div className="container">
                    <Switch>
                       <Route path="/" exact component={UserListComponent}/>
                       <Route path="/Users" component={UserListComponent}/>
                       <Route path="/addOrUpdate_User/:id" component={AddOrUpdateUserComponent}/>
                       {/* <Route path="/update-user/:id" component={UpdateUserComponent}/> */}
                      </Switch>  
                  </div>
                <FooterComponent/>
            
      </Router>
    </div>

  );
}

export default App;

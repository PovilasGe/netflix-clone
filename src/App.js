import React, { useEffect } from 'react';
import './App.css';
import HomeScreen from './screens/HomeScreen';
import { Routes,  Route} from 'react-router-dom'
import LoginScreen from './screens/LoginScreen';
import { auth } from './firebase';

function App() {
  const user = undefined

  useEffect(() =>{
    const unsubscribe = auth.onAuthStateChanged(userAuth => {
      if (userAuth){
        //logged in
        console.log(userAuth);
      } else {
        //logged out
      }
    })

    return unsubscribe;
  }, []);
  
  return (
    <div className="app">

        <Routes>
          {!user ? (
          <Route path='/' element={<LoginScreen />} />) : (
          <Route path='/' element={<HomeScreen />} />
          )}
        </Routes>

    </div>
  );
}

export default App;

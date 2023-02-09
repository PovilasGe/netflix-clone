import React, { useEffect } from 'react';
import './App.css';
import HomeScreen from './screens/HomeScreen';
import { Routes,  Route} from 'react-router-dom'
import LoginScreen from './screens/LoginScreen';
import { auth } from './firebase';
import { useDispatch , useSelector} from 'react-redux';
import { logout, login, selectUser } from './features/userSlice';

function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  useEffect(() =>{
    const unsubscribe = auth.onAuthStateChanged(userAuth => {
      if (userAuth){
        //logged in
        dispatch(login({
            uid: userAuth.uid,
            email: userAuth.email
          })
        );
      } else {
        //logged out
        dispatch(logout);
      }
    })

    return unsubscribe;
  }, []);
  
  return (
    <div className="app">

        <Routes>
          {!user ? (
          <Route path='/' element={<LoginScreen />} />) : (
          <>
          <Route path='/' element={<HomeScreen />} />
          <Route path='/profile' element={<ProfileScreen />} />
          </>
          )}
        </Routes>


    </div>
  );
}

export default App;

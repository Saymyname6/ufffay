import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import {getUser} from "./redux/actions/authAction"
import { Alert, Login,Navbar } from "./components";


const App = () => {
  const dispatch = useDispatch()
  
  useEffect(() => {
  dispatch(getUser())
  },[dispatch]);

return (
    <div>
      <Navbar />
      <Alert/>
    </div>
  );
};

export default App;

import React from 'react';
import {Provider} from "react-redux";
import store from "./Redux/store";
import Routes from "./Routes";
import StyleLoader from ".Toastr/Components/StylesLoader";
import Toastr from "./Components/Toastr";

function App() {
  return (
      <Provider store={store}>
        <StyleLoader/>
        <Toastr/>
        <Routes/>
      </Provider>
  );
}

export default App;

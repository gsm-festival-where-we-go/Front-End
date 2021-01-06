import React, {useEffect} from 'react';
import { Route, BrowserRouter } from 'react-router-dom';
import {
  Main
} from './pages';

const App = () => {
  return(
    <BrowserRouter>
          <Route exact path="/" component={Main} />
    </BrowserRouter> 
  )
}

export default App;
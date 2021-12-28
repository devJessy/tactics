import React, { useEffect, Suspense, lazy, useState } from 'react'
import axios from 'axios'
import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom'
import Landing from './views/Landing';
import Tokenomics from './views/Tokenomics';
const App: React.FC = () => {

  return (
    <>
        <Switch>
          <Route exact path="/" component={Landing} />
          <Route exact path="/tokenomics" component={Tokenomics} />
        </Switch>
    </>
  )
}

export default React.memo(App)

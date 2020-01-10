import React from 'react';
import './App.css';
// import loadable from '@/utils/loadable.js'
import {BrowserRouter} from 'react-router-dom'
import RouterView from '@/router/index.js'
import config from '@/router/config.js'
// import FooterBar from '@/components/FooterBar.js'
function App() {
  return (
    <div className="app">
      <BrowserRouter>
      <header></header>
      <main>
        <RouterView router={config}/>
      </main>
      <footer>
        {/* <FooterBar/> */}
      </footer>
      </BrowserRouter>
    </div>
  );
}

export default App;

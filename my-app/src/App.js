import React from 'react';
import Header from './Header';
import './tailwind.css';
import SearchMovies from './Search';
import { HashRouter } from "react-router-dom";

function App() {

  return (
    <HashRouter base="/">
      <div className="relative width-full">
        <div className="mx-auto overflow-hidden">
          <Header />
          <SearchMovies />
        </div>
      </div>
    </HashRouter>
  );
}

export default App;
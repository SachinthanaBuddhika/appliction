import React  from "react";
import Header from "./components/Header";
import { Route ,Routes } from 'react-router-dom';


function App() {
  return <React.Fragment>
    <header>
    <Header />
    </header>
    <main>
      <Routes>
        <Route path="/" element={<Home/>}/>
      </Routes>
    </main>
    </React.Fragment>
  
}

export default App;

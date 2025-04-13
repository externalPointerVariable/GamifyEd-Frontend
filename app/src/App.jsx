import React, {useEffect} from 'react';
import { Footer, Header } from './components/index';
import {Outlet} from 'react-router-dom';
import { useSelector } from 'react-redux';

function App() {
  const htmlTheme = useSelector((state)=>state.theme.theme);
  useEffect(() => {
    document.documentElement.classList.remove("light", "dark");
    document.documentElement.classList.add(htmlTheme);
  }, [htmlTheme]);
  
  return (
    <>
      <Header />
        <Outlet />
      <Footer />
    </>
  );
}

export default App;
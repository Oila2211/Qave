import React from 'react'
import { Container } from 'react-bootstrap';
import Header from './components/Header';
import Footer from './components/Footer';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'
import { Outlet, useLocation } from 'react-router-dom';


const App = () => {
  const location = useLocation();
  const isHomePage = location.pathname === '/';
  const homeBg = isHomePage ? '#7C5947' : '#fff' ;
  return (
    <>
    <Header />
    <main
      style={{ backgroundColor: homeBg, minHeight: '100vh' }}
    >
      { isHomePage ? (
        // Use fluid container for homescreen
        <Container  style={{ backgroundColor: 'transparent'}}>
          <Outlet />
        </Container>
      ) : (
        // Default container for other pages
        <Container>
          <Outlet />
        </Container>
      )}

    </main>
    <Footer />
    <ToastContainer/>
    </>
  )
}

export default App
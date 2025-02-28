// import React from 'react'
// import { Container } from 'react-bootstrap';
// import Header from './components/Header';
// import Footer from './components/Footer';
// import { ToastContainer } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css'
// import { Outlet, useLocation } from 'react-router-dom';


// const App = () => {
//   const location = useLocation();
//   const isHomePage = location.pathname === '/';
//   const homeBg = isHomePage ? '#7C5947' : '#fff' ;
//   return (
//     <>
//     <Header />
//     <main
//       style={{ backgroundColor: homeBg, minHeight: '100vh' }}
//     >
//       { isHomePage ? (
//         // Use fluid container for homescreen
//         <Container  style={{ backgroundColor: 'transparent'}}>
//           <Outlet />
//         </Container>
//       ) : (
//         // Default container for other pages
//         <Container>
//           <Outlet />
//         </Container>
//       )}

//     </main>
//     <Footer />
//     <ToastContainer/>
//     </>
//   )
// }

// export default App



import React from 'react';
import { Container } from 'react-bootstrap';
import Header from './components/Header';
import Footer from './components/Footer';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Outlet, useLocation } from 'react-router-dom';

const App = () => {
  const location = useLocation();

  // Define custom styles for specific pages
  const getPageStyles = (path) => {
    switch (path) {
      case '/':
        return {
          backgroundColor: '#7C5947', // Homepage background color
          containerProps: { fluid: false }, // Fluid container for homepage
        };
      case '/login':
        return {
          backgroundColor: '#7C5947', // Homepage background color
          containerProps: { fluid: false }, // Fluid container for homepage
        };
      case '/register':
        return {
          backgroundColor: '#7C5947',
          containerProps: { fluid: false }, // Fluid container for homepage
        };
      case '/contact-us':
        return {
          backgroundColor: '#7C5947', // Custom background for /contact-us
          containerProps: { fluid: true }, // Fluid container for /contact-us
        };
      case '/about-us':
        return {
          backgroundColor: '#7C5947', // Custom background for /contact-us
          containerProps: { fluid: true }, // Fluid container for /contact-us
        };
      default:
        return {
          backgroundColor: '#fff', // Default background color (white)
          containerProps: {}, // Default container (not fluid)
        };
    }
  };

  // Get styles for the current page
  const { backgroundColor, containerProps } = getPageStyles(location.pathname);

  return (
    <>
      <Header />
      <main style={{ backgroundColor, minHeight: '100vh', padding: '20px 0' }}>
        <Container {...containerProps}>
          <Outlet />
        </Container>
      </main>
      <Footer />
      <ToastContainer />
    </>
  );
};

export default App;
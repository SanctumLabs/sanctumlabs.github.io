import React, { useEffect } from 'react';
import { BrowserRouter } from 'react-router-dom';
import Aos from 'aos';
import AllRoutes from 'routes';

// Themes
//  For Default import Theme.scss
import '../assets/scss/theme.scss';

const App = () => {
  // reference https://github.com/michalsnik/aos
  useEffect(() => {
    Aos.init()
  }, [])

  return (
    <React.StrictMode>
      <BrowserRouter>
        <AllRoutes />
      </BrowserRouter>
    </React.StrictMode>
  );
}

export default App;

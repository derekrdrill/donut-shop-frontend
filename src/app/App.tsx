import * as React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import GlobalProvider from '../context/GlobalProvider';

import Alert from '../components/Alert/Alert';
import Body from '../components/Body/Body';
import Header from '../components/Header/Header';
import MenuIcon from '../components/MenuIcon/MenuIcon';
import Modal from '../components/Modal/Modal';
import Overlay from '../components/Overlay/Overlay';
import QuickMenu from '../components/QuickMenu/QuickMenu';
import Sidebar from '../components/Sidebar/Sidebar';

import QuickMenuPage from '../views/Menu/components/QuickMenu/QuickMenuPage';

import { GlobalStyle } from './style';

import routes from '../routes/routes';

const App = () => {
  const [isSidebarOpen, setIsSidebarOpen] = React.useState<boolean>(false);
  const [isQuickMenuOpen, setIsQuickMenuOpen] = React.useState<boolean>(false);

  return (
    <React.StrictMode>
      <Router>
        <Routes>
          {routes.map(route => (
            <Route
              key={route.key}
              path={route.path}
              element={
                <React.Suspense>
                  <GlobalProvider>
                    <GlobalStyle $isSidebarOpen={isSidebarOpen} />
                    <Overlay isSidebarOpen={isSidebarOpen} isQuickViewOpen={isQuickMenuOpen} />
                    <Header
                      isQuickMenuOpen={isQuickMenuOpen}
                      setIsQuickMenuOpen={setIsQuickMenuOpen}
                    />
                    <MenuIcon
                      isMenuIconActive={isSidebarOpen}
                      setIsMenuIconActive={setIsSidebarOpen}
                    />
                    <QuickMenu isQuickMenuOpen={isQuickMenuOpen}>
                      <QuickMenuPage setIsQuickMenuOpen={setIsQuickMenuOpen} />
                    </QuickMenu>
                    <Sidebar isSidebarOpen={isSidebarOpen} setIsSidebarOpen={setIsSidebarOpen} />
                    <Alert />
                    <Modal />
                    <Body>{route.element}</Body>
                  </GlobalProvider>
                </React.Suspense>
              }
            />
          ))}
        </Routes>
      </Router>
    </React.StrictMode>
  );
};

export default App;

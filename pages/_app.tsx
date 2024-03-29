import * as React from 'react';
import { createGlobalStyle } from 'styled-components';

import GlobalProvider from '../context/GlobalProvider';

import Alert from '../components/common/Alert/Alert';
import Body from '../components/common/Body/Body';
import Header from '../components/common/Header/Header';
import MenuIcon from '../components/common/MenuIcon/MenuIcon';
import Modal from '../components/common/Modal/Modal';
import Overlay from '../components/common/Overlay/Overlay';
import QuickMenu from '../components/common/QuickMenu/QuickMenu';
import Sidebar from '../components/common/Sidebar/Sidebar';

import QuickMenuPage from '../components/morningDough/Menu/components/QuickMenu/QuickMenuPage';
import QuickRetailView from '../components/morningDough/Retail/components/QuickRetailView/QuickRetailView';
import ComingSoon from '../components/morningDough/ComingSoon/ComingSoon';

const App = ({ Component, pageProps }) => {
  const [isSidebarOpen, setIsSidebarOpen] = React.useState<boolean>(false);
  const [isMenuOpen, setIsMenuOpen] = React.useState<boolean>(false);
  const [isRetailOpen, setIsRetailOpen] = React.useState<boolean>(false);

  return (
    <React.StrictMode>
      <GlobalProvider>
        <GlobalStyle $isSidebarOpen={isSidebarOpen} />
        <Overlay isSidebarOpen={isSidebarOpen} isQuickViewOpen={isMenuOpen} />
        <Header
          isMenuOpen={isMenuOpen}
          isRetailOpen={isRetailOpen}
          setIsMenuOpen={setIsMenuOpen}
          setIsRetailOpen={setIsRetailOpen}
        />
        <MenuIcon isMenuIconActive={isSidebarOpen} setIsMenuIconActive={setIsSidebarOpen} />
        <QuickMenu isQuickMenuOpen={isMenuOpen && !isRetailOpen}>
          <QuickMenuPage setIsQuickMenuOpen={setIsMenuOpen} />
        </QuickMenu>
        <QuickMenu isQuickMenuOpen={isRetailOpen && !isMenuOpen}>
          {/* <QuickRetailView /> */}
          <ComingSoon />
        </QuickMenu>
        <Sidebar isSidebarOpen={isSidebarOpen} setIsSidebarOpen={setIsSidebarOpen} />
        <Alert />
        <Modal />
        <Body>
          <Component {...pageProps} />
        </Body>
      </GlobalProvider>
    </React.StrictMode>
  );
};

export default App;

export const GlobalStyle = createGlobalStyle<{ $isSidebarOpen: boolean }>(({ $isSidebarOpen }) => [
  $isSidebarOpen && {
    body: {
      overflowY: 'hidden',
      position: 'fixed',
    },
  },
  {
    'html, body': {
      padding: 0,
      margin: 0,
    },
  },
]);

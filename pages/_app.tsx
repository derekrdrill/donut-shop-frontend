import * as React from 'react';
import { useMediaQuery } from 'react-responsive';
import { useRouter } from 'next/router';
import { createGlobalStyle } from 'styled-components';
import { useTheme } from '@mui/material';

import GlobalProvider from '../context/GlobalProvider';

import Alert from '../components/common/Alert/Alert';
import Body from '../components/common/Body/Body';
import Header from '../components/common/Header/Header';
import Modal from '../components/common/Modal/Modal';
import Overlay from '../components/common/Overlay/Overlay';
import QuickMenu from '../components/common/QuickMenu/QuickMenu';
import Sidebar from '../components/common/Sidebar/Sidebar';

import QuickMenuPage from '../components/morningDough/Menu/components/QuickMenu/QuickMenuPage';
import ComingSoon from '../components/morningDough/ComingSoon/ComingSoon';

const App = ({ Component, pageProps }) => {
  const router = useRouter();
  const theme = useTheme();
  const isMD = useMediaQuery({ minWidth: theme.breakpoints.values['md'] });
  const [isSidebarOpen, setIsSidebarOpen] = React.useState<boolean>(false);
  const [isMenuOpen, setIsMenuOpen] = React.useState<boolean>(false);
  const [isRetailOpen, setIsRetailOpen] = React.useState<boolean>(false);

  React.useEffect(() => {
    if (!isMD && isMenuOpen) {
      setIsMenuOpen(false);
      router.push('/menu');
    }
  }, [isMD, isMenuOpen, router]);

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
        <QuickMenu isQuickMenuOpen={isMenuOpen && !isRetailOpen}>
          <QuickMenuPage setIsQuickMenuOpen={setIsMenuOpen} />
        </QuickMenu>
        <QuickMenu isQuickMenuOpen={isRetailOpen && !isMenuOpen}>
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

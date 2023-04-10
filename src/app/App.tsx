import * as React from 'react';

import Body from '../components/Body/Body';
import Header from '../components/Header/Header';
import MenuIcon from '../components/MenuIcon/MenuIcon';
import Overlay from '../components/Overlay/Overlay';
import QuickMenu from '../components/QuickMenu/QuickMenu';
import Sidebar from '../components/Sidebar/Sidebar';

import Homepage from '../pages/Homepage/Homepage';
import QuickMenuPage from '../pages/Menu/QuickMenu/QuickMenuPage';

import { GlobalStyle } from './style';

const App = () => {
  const [isSidebarOpen, setIsSidebarOpen] = React.useState<boolean>(false);
  const [isQuickMenuOpen, setIsQuickMenuOpen] = React.useState<boolean>(false);

  return (
    <>
      <GlobalStyle $isSidebarOpen={isSidebarOpen} />
      <Overlay isSidebarOpen={isSidebarOpen} isQuickViewOpen={isQuickMenuOpen} />
      <Header isQuickMenuOpen={isQuickMenuOpen} setIsQuickMenuOpen={setIsQuickMenuOpen} />;
      <MenuIcon isMenuIconActive={isSidebarOpen} setIsMenuIconActive={setIsSidebarOpen} />
      <QuickMenu isQuickMenuOpen={isQuickMenuOpen}>
        <QuickMenuPage />
      </QuickMenu>
      <Sidebar isSidebarOpen={isSidebarOpen} setIsSidebarOpen={setIsSidebarOpen} />
      <Body>
        <Homepage />
      </Body>
    </>
  );
};

export default App;

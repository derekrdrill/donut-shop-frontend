import * as React from 'react';

import Header from '../components/Header/Header';
import MenuIcon from '../components/MenuIcon/MenuIcon';
import Sidebar from '../components/Sidebar/Sidebar';

const App = () => {
  const [isSidebarOpen, setIsSidebarOpen] = React.useState<boolean>(false);

  return (
    <>
      <Header />;
      <MenuIcon isMenuIconActive={isSidebarOpen} setIsMenuIconActive={setIsSidebarOpen} />
      <Sidebar isSidebarOpen={isSidebarOpen} setIsSidebarOpen={setIsSidebarOpen} />
    </>
  );
};

export default App;

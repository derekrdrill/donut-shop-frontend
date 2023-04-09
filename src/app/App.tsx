import * as React from 'react';

import Body from '../components/Body/Body';
import Header from '../components/Header/Header';
import MenuIcon from '../components/MenuIcon/MenuIcon';
import Sidebar from '../components/Sidebar/Sidebar';

import Homepage from '../pages/Homepage/Homepage';

const App = () => {
  const [isSidebarOpen, setIsSidebarOpen] = React.useState<boolean>(false);

  return (
    <>
      <Header />;
      <MenuIcon isMenuIconActive={isSidebarOpen} setIsMenuIconActive={setIsSidebarOpen} />
      <Sidebar isSidebarOpen={isSidebarOpen} setIsSidebarOpen={setIsSidebarOpen} />
      <Body>
        <Homepage />
      </Body>
    </>
  );
};

export default App;

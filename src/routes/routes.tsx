import * as React from 'react';

const Home = React.lazy(() => import('../pages/Homepage/Homepage'));
const Menu = React.lazy(() => import('../pages/Menu/components/FullMenu/FullMenu'));
const MenuItem = React.lazy(() => import('../pages/MenuItem/MenuItem'));

import FULL_MENU from '../pages/Menu/assets/data/FULL_MENU';

interface Routes {
  key: number;
  path: string;
  element: React.ReactNode;
}

const routes: Routes[] = [
  {
    key: 1,
    path: '/',
    element: <Home />,
  },
  {
    key: 2,
    path: '/menu',
    element: <Menu />,
  },
  {
    key: 3,
    path: '/menu/:menuCategory/:menuItemID',
    element: <MenuItem fullMenu={FULL_MENU} />,
  },
];

export default routes;

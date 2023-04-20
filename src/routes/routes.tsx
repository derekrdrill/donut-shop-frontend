import * as React from 'react';

const Home = React.lazy(() => import('../views/Homepage/Homepage'));
const Menu = React.lazy(() => import('../views/Menu/components/FullMenu/FullMenu'));
const MenuItem = React.lazy(() => import('../views/MenuItem/MenuItem'));
const MyBag = React.lazy(() => import('../views/MyBag/MyBag'));

import FULL_MENU from '../views/Menu/assets/data/FULL_MENU';

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
  {
    key: 4,
    path: '/myBag',
    element: <MyBag />,
  },
];

export default routes;

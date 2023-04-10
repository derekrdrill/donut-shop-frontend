import * as React from 'react';

const Home = React.lazy(() => import('../pages/Homepage/Homepage'));
const Menu = React.lazy(() => import('../pages/Menu/components/FullMenu/FullMenu'));

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
];

export default routes;

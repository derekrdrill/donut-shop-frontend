import * as React from 'react';

import FullMenuHead from './components/FullMenuHead';
import FullMenuBody from './components/FullMenuBody';

import FULL_MENU_CATEGORIES from './assets/data/FULL_MENU_CATEGORIES';

const FullMenu = () => (
  <>
    <FullMenuHead />
    <FullMenuBody fullMenuCategories={FULL_MENU_CATEGORIES} />
  </>
);

export default FullMenu;

import * as React from 'react';

import FullMenuHead from './components/FullMenuHead';
import FullMenuBody from './components/FullMenuBody';

import FULL_MENU_CATEGORIES from '../../assets/data/FULL_MENU_CATEGORIES';
import FULL_MENU from '../../assets/data/FULL_MENU';

const FullMenu = () => (
  <>
    <FullMenuHead />
    <FullMenuBody fullMenu={FULL_MENU} fullMenuCategories={FULL_MENU_CATEGORIES} />
  </>
);

export default FullMenu;

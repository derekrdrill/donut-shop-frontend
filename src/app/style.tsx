import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle<{ $isSidebarOpen: boolean }>(({ $isSidebarOpen }) => [
  $isSidebarOpen && {
    body: {
      position: 'fixed',
      overflowY: 'hidden',
    },
  },
]);

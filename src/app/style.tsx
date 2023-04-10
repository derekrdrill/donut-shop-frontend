import { createGlobalStyle } from 'styled-components';

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

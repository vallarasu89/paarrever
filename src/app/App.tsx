import React from 'react';
import { RouterProvider } from 'react-router-dom';
import { router } from './router';
import { AppProvider } from './providers/AppProvider';

export const App: React.FC = () => {
  return (
    <AppProvider>
      <RouterProvider router={router} />
    </AppProvider>
  );
};

export default App;

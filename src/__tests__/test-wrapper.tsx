import React from 'react';
import { setupStore } from '../store';
import { Provider } from 'react-redux';

export const TestWrapper = ({ children }: { children: React.ReactNode }) => {
  return <Provider store={setupStore()}>{children}</Provider>;
};

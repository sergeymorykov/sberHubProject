import React, {use, useEffect} from 'react';
import Main from './container/main';
import useTelegram from './hooks/useTelegram';
import Header from './container/main/components/layout/header';
import Body from './container/main/components/layout/body';
import ErrorPage from './container/error';
import { ErrorPageCode } from './container/error/types';

const App = () => {  
  
  return <Main />;

};

export default App;

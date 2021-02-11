import withRoot from './modules/withRoot';
// --- Post bootstrap -----
import React from 'react';
import AppFooter from './modules/views/AppFooter';
import Hero from './modules/views/Hero';
import AppAppBar from './modules/views/AppAppBar';

const Index = () => {

  return (
    <>
      <AppAppBar backgroundColor='rgba(32, 33, 36, 0.5)'/>
      <Hero />
      <AppFooter />
    </>
  );
}

export default withRoot(Index);
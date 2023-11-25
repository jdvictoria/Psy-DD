import React, {useEffect, useState} from 'react';

import {StyledSafeView} from './styles/input-container';

import UserAuth from './components/organism/1_user-auth';
import HomeNavigation from './components/organism/2_home';
import Loading from './components/organism/3_loading';

function App() {
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (isLoggedIn) {
      const loadingTimeout = setTimeout(() => {
        setIsLoading(false);
      }, 1500);
      return () => clearTimeout(loadingTimeout);
    } else if (!isLoggedIn) {
      setIsLoading(true);
    }
  }, [isLoggedIn]);

  return !isLoggedIn ? (
    <UserAuth isDarkMode={isDarkMode} setIsLoggedIn={setIsLoggedIn} />
  ) : (
    <>
      {isLoading ? (
        <StyledSafeView>
          <Loading />
        </StyledSafeView>
      ) : (
        <HomeNavigation
          isDarkMode={isDarkMode}
          setIsDarkMode={setIsDarkMode}
          setIsLoggedIn={setIsLoggedIn}
        />
      )}
    </>
  );
}

export default App;

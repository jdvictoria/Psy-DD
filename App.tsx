import React, {useEffect, useRef, useState} from 'react';

import {StyledSafeView} from './styles/input-container';

import UserAuth from './components/organism/1_user-auth';
import HomeNavigation from './components/organism/2_home';
import Loading from './components/organism/3_loading';
import {WebView} from 'react-native-webview';

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

  // Testing
  const [byLicense, setByLicense] = useState(true);

  const webViewRef = useRef(null);
  const [openWeb, setOpenWeb] = useState(false);

  const handleWebViewLoad = () => {
    if (webViewRef.current) {
      const injectScript = byLicense
        ? 'document.querySelector(\'a[href="#messages"]\').click();'
        : 'document.querySelector(\'a[href="#profile"]\').click();';

      webViewRef.current.injectJavaScript(injectScript);
    }
  };

  return !isLoggedIn ? (
    <>
      <UserAuth
        isDarkMode={isDarkMode}
        setIsLoggedIn={setIsLoggedIn}
        setIsDarkMode={setIsDarkMode}
        setOpenWeb={setOpenWeb}
        byLicense={byLicense}
        setByLicense={setByLicense}
      />
      {openWeb && (
        <WebView
          ref={webViewRef}
          source={{uri: 'https://online.prc.gov.ph/Verification'}}
          style={{bottom: 0}}
          onLoad={handleWebViewLoad}
        />
      )}
    </>
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

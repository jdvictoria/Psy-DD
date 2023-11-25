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
  const [license, setLicense] = useState('');
  const [date, setDate] = useState(new Date());

  const webViewRef = useRef(null);
  const [openWeb, setOpenWeb] = useState(false);

  const handleWebViewLoad = () => {
    if (webViewRef.current) {
      const injectScript = byLicense
        ? `
        // Click on the first element after 0ms
        document.querySelector('a[href="#messages"]').click();

        // Click on the second element after 500ms
        setTimeout(() => {
          const selectElement = document.querySelector('.form-control.ddselect.profs.select2-hidden-accessible#verLProf');
          if (selectElement) {
            // Simulate selecting the option with value "57"
            const optionToSelect = selectElement.querySelector('option[value="57"][data-select2-id="214"]');
            if (optionToSelect) {
              optionToSelect.selected = true;
              selectElement.dispatchEvent(new Event('change', { bubbles: true }));
            }
          }
          
          var licenseInput = document.getElementById('verLLicense');
          licenseInput.value = '${license}';
        }, 500);
      `
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
        license={license}
        setLicense={setLicense}
        date={date}
        setDate={setDate}
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

import React from 'react';
import App from 'next/app';
import { ThemeProvider } from 'styled-components';

import { appWithTranslation } from '@utils/i18n';
import theme from '@utils/theme';
import GlobalStyle from '@app/utils/globalStyle';

class NextApp extends App<{}> {
  public static displayName = 'NextApp';

  public render() {
    const { Component, pageProps } = this.props;

    return (
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
        <link
          href="https://fonts.googleapis.com/css2?family=Nunito:wght@400;700&display=swap"
          rel="stylesheet"
        />
        <GlobalStyle />
      </ThemeProvider>
    );
  }
}

export default appWithTranslation(NextApp);

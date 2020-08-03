import React from 'react';
import App from 'next/app';
import { ThemeProvider } from 'styled-components';

import { appWithTranslation } from '@utils/i18n';
import theme from '@utils/theme';
import GlobalStyle from '@utils/globalStyle';

import GlobalHeadMeta from '@components/GlobalHeadMeta';
import ErrorComponent from './_error';

class NextApp extends App {
  public static displayName = 'NextApp';

  static async getInitialProps({ Component, ctx }) {
    let pageProps = {};

    // Do as little as possible when rendering the error page, in case something
    // in this `getInitialProps` function fails. We don't want to error on the
    // error page, so to speak.
    if (Component === ErrorComponent) {
      if (Component.getInitialProps) {
        pageProps = await Component.getInitialProps(ctx);
      }
      return { pageProps };
    }

    // Imagine doing an API request here: If that fails, we don't want that to
    // fail the error page from rendering too. Besides, we probably don't want
    // to make the API call on the error page in the first place.
    // await Promise.reject(new Error('_app.js error'));

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }

    return { pageProps };
  }

  public render() {
    const { Component, pageProps } = this.props;

    return (
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
        {/* Uncomment after Favicons generated */}
        {/* <GlobalHeadMeta /> */}
        <GlobalStyle />
      </ThemeProvider>
    );
  }
}

export default appWithTranslation(NextApp);

import React from 'react';
import { AppContext } from 'next/app';
import { ThemeProvider } from 'styled-components';
import { GraphQLProvider } from 'graphql-react';
import { withGraphQLApp } from 'next-graphql-react';

import { appWithTranslation } from '@utils/i18n';
import theme from '@utils/theme';
import GlobalStyle from '@utils/globalStyle';

import GlobalHeadMeta from '@app/components/GlobalHeadMeta';
import ErrorComponent from './_error';

const NextApp = ({ Component, pageProps, graphql }) => {
  return (
    <GraphQLProvider graphql={graphql}>
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
        {/* Uncomment after Favicons generated */}
        {/* <GlobalHeadMeta /> */}
        <GlobalStyle />
      </ThemeProvider>
    </GraphQLProvider>
  );
};

NextApp.getInitialProps = async (appContext: AppContext) => {
  const { Component, ctx } = appContext;
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
};

export default withGraphQLApp(appWithTranslation(NextApp));

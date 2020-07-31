import React from 'react';
import { withTranslation } from '@utils/i18n';

const Error = ({ statusCode, t }) => {
  const isNotFound = statusCode && statusCode === 404;

  return (
    <>
      {isNotFound ? (
        <p>{t('error-with-status', { statusCode })}</p>
      ) : statusCode ? (
        <p>{t('error-with-status', { statusCode })}</p>
      ) : (
        <p>{t('error-without-status')}</p>
      )}
    </>
  );
};

Error.getInitialProps = async ({ res, err }) => {
  let statusCode = null;
  if (res) {
    ({ statusCode } = res);
  } else if (err) {
    ({ statusCode } = err);
  }
  return {
    namespacesRequired: ['common'],
    statusCode,
  };
};

export default withTranslation('common')(Error);

import React from 'react';
import { withTranslation } from '@utils/i18n';

const Error = ({ statusCode, t }) => {
  const isNotFound = statusCode && statusCode === 404;

  return (
    <>
      {isNotFound ? (
        <p>not found in error</p>
      ) : statusCode ? (
        <p>{`An error ${statusCode} occurred on server`}</p>
      ) : (
        <p>{'An error occurred on client'}</p>
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

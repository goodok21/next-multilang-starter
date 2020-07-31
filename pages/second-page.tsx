// import { useContext } from 'react';

import { withTranslation, Link, i18n } from '@utils/i18n';
import Header from '@components/Header';
import Footer from '@components/Footer';

const SecondPage = ({ t }) => {
  // const {
  //   i18n: { language },
  // } = useContext(I18nContext);

  return (
    <>
      <main>
        {/* <h1>SSR and Client language: {language}</h1> */}
        <Header title={t('h1')} />
        <button
          type="button"
          onClick={() =>
            i18n.changeLanguage(i18n.language === 'en' ? 'de' : 'en')
          }>
          {t('change-locale')}
        </button>
        ---
        <Link href="/">
          <button type="button">{t('back-to-home')}</button>
        </Link>
      </main>
      <Footer />
    </>
  );
};

SecondPage.getInitialProps = async () => {
  return { namespacesRequired: ['second-page', 'footer'] };
};

export default withTranslation()(SecondPage);

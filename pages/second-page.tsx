import { withTranslation, Link, i18n } from '@utils/i18n';
import Header from '@app/components/Header';
import Footer from '@app/components/Footer';

const SecondPage = ({ t }) => (
  <>
    <main>
      {/* <h1>SSR and Client language: {language}</h1> */}
      <Header title={t('h1')} />
      <button
        type="button"
        onClick={() =>
          i18n.changeLanguage(i18n.language === 'en' ? 'ru' : 'en')
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

SecondPage.getInitialProps = async () => ({
  namespacesRequired: ['second-page', 'footer'],
});

export default withTranslation()(SecondPage);

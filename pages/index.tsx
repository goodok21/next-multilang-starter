import { NextPage } from 'next';
import Layout from '@components/Layout';
import { i18n, Link, withTranslation } from '@utils/i18n';
import { WithTranslation } from 'next-i18next';

const Homepage: NextPage & React.FC<WithTranslation> = ({ t }) => {
  return (
    <Layout>
      <div>
        <button
          type="button"
          onClick={() =>
            i18n.changeLanguage(i18n.language === 'en' ? 'ru' : 'en')
          }>
          {t('change-locale')}
        </button>
        <Link href="/second-page">
          <button type="button">{t('to-second-page')}</button>
        </Link>
      </div>
    </Layout>
  );
};

Homepage.getInitialProps = async () => {
  return {
    namespacesRequired: ['common', 'footer'],
  };
};

export default withTranslation('common')(Homepage);

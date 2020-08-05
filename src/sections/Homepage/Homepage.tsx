import Layout from '@components/Layout';
import { WithTranslation } from 'next-i18next';
import { i18n, Link, withTranslation } from '@utils/i18n';
import useQuery from '@hooks/useQuery';
import pokemonsGql from './pokemons.gql';

const Homepage: React.FC<WithTranslation> = ({ t }) => {
  const { loading, cacheValue: { data = {} } = {} } = useQuery({
    query: pokemonsGql,
  });

  console.log(loading, data);

  return (
    <Layout>
      <div>
        <div>
          {JSON.stringify(loading)}: {JSON.stringify(data)}
        </div>
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

export default withTranslation('common')(Homepage);

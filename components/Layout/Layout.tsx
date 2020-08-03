import { withTranslation } from '@utils/i18n';
import Header from '@components/Header';
import Footer from '@components/Footer';
import { WithTranslation } from 'next-i18next';

const Layout: React.FC<WithTranslation> = ({ children, t }) => (
  <>
    <Header title={t('h1')} />
    <main>{children}</main>
    <Footer />
  </>
);

export default withTranslation('common')(Layout);

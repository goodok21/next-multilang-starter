import { withTranslation } from '@utils/i18n';

const Footer = ({ t }) => (
  <footer>
    <p>{t('description')}</p>
  </footer>
);

export default withTranslation('footer')(Footer);

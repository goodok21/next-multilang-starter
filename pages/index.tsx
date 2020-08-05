import { NextPage } from 'next';
import HomepageSection from '@app/sections/Homepage';
import { WithTranslation } from 'next-i18next';

const Homepage: NextPage & React.FC<WithTranslation> = (props) => (
  <HomepageSection {...props} />
);

Homepage.getInitialProps = async () => ({
  namespacesRequired: ['common', 'footer'],
});

export default Homepage;

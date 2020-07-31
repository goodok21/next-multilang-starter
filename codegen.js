require('dotenv').config();
console.log(process.env.GQL_ENDPOINT);

const schemaLocation = `${process.env.GQL_ENDPOINT}/graphql`;

module.exports = {
  schema: [
    {
      [schemaLocation]: {
        // "headers": {
        //     "Authorization": "Bearer " + process.env.AUTH_TOKEN
        // }
      },
    },
  ],
  documents: ['./pages/**/*.tsx', './components/**/*.ts'],
  overwrite: true,
  generates: {
    './utils/generated/index.tsx': {
      plugins: [
        'typescript',
        'typescript-operations',
        'typescript-react-apollo',
      ],
      config: {
        skipTypename: true,
        withHooks: true,
        withHOC: false,
        withComponent: false,
      },
    },
  },
};

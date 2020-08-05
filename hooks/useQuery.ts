import { useGraphQL } from 'graphql-react';

const useQuery: any = ({ query, ...props }) =>
  useGraphQL({
    // Any GraphQL API can be queried in components, where fetch options for
    // the URL, auth headers, etc. are specified. To avoid repetition it’s a
    // good idea to import the fetch options override functions for the APIs
    // your app uses from a central module. The default fetch options received
    // by the override function are tailored to the operation; typically the
    // body is JSON but if there are files in the variables it will be a
    // FormData instance for a GraphQL multipart request.
    fetchOptionsOverride(options) {
      options.url = process.env.NEXT_PUBLIC_GQL_ENDPOINT;
    },

    // The operation typically contains `query` and sometimes `variables`, but
    // additional properties can be used; all are JSON encoded and sent to the
    // GraphQL server in the fetch request body.
    operation: {
      query,
    },

    // Load the query whenever the component mounts. This is desirable for
    // queries to display content, but not for on demand situations like
    // pagination view more buttons or forms that submit mutations.
    loadOnMount: true,

    // Reload the query whenever a global cache reload is signaled.
    loadOnReload: true,

    // Reload the query whenever the global cache is reset. Resets immediately
    // delete the cache and are mostly only used when logging out the user.
    loadOnReset: true,

    // Props
    ...props,
  });

export default useQuery;

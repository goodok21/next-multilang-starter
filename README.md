# Next.js Multilanguage Starter

- TypeScript
- Next.js
- - next-compose-plugins
- - next-pwa
- - next-env
- - next-seo
- - next-i18next
- styled-components
- eslint / prettier

### Todo:

- [ ] update `next-i18next` package later because it's import too much
- [ ] add markdown support
- [ ] sitemap generation
- [ ] fix favicons
- [ ] add favicon generation?
- [x] graphql support
- [ ] style pages

#### Environment variables:

Use `.env` for public envs:

```
NEXT_PUBLIC_GQL_ENDPOINT=https://graphql-pokemon.now.sh
```

Use `.env.local` file for local development.
Prefixes:
`NEXT_PUBLIC_`
`NEXT_STATIC_`
`NEXT_SERVER_`

```
NEXT_PUBLIC_ANALYTICS_ID=GTM-***
```

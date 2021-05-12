/** @type {import("snowpack").SnowpackUserConfig } */
module.exports = {
  mount: {
    public: { url: '/', static: true },
    src: { url: '/dist' },
  },
  plugins: [
    '@snowpack/plugin-react-refresh',
    '@snowpack/plugin-dotenv',
    '@snowpack/plugin-typescript',
  ],
  routes: [
    /* Enable an SPA Fallback in development: */
    // {"match": "routes", "src": ".*", "dest": "/index.html"},
  ],
  optimize: {
    /* Example: Bundle your final build: */
    // "bundle": true,
  },
  packageOptions: {
    polyfillNode: true,
    optimizie: {
      treeshake: true,
    },
    namedExports: [
      '@mid/driver-okta',
      '@mid/react-widget/redirect',
      '@mid/sdk',
      'react-dnd-cjs',
      'react-notifications',
      'redux-dynamic-modules',
      'redux-dynamic-modules-react',
      'redux-dynamic-modules-saga',
      'redux-dynamic-modules-thunk',
      'powerbi-client-react',
    ],
  },
  devOptions: {
    /* ... */
  },
  buildOptions: {
    /* ... */
  },
};

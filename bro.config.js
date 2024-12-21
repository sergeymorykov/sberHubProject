// eslint-disable-next-line @typescript-eslint/no-require-imports
const pkg = require('./package');

module.exports = {
  apiPath: 'stubs/api',
  webpackConfig: {
    output: {
      publicPath: `/static/${pkg.name}/${process.env.VERSION || pkg.version}/`
    }
  },
  /* use https://admin.bro-js.ru/ to create config, navigations and features */
  navigations: {
    'sberhubproject.main': '/sberhubproject',
    'sberhubproject.error': '/sberhubproject/error',
    'sberhubproject.signup': '/sberhubproject/signup',
  },
  features: {
    'sberhubproject': {
      // add your features here in the format [featureName]: { value: string }
    }
  },
  config: {
    'sberhubproject.api': '/api'
  }
};

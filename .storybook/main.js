module.exports = {
  staticDirs: [{
    from: '../src',
    to: '/src'
  }],
  stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: [
    '@etchteam/storybook-addon-css-variables-theme',
    '@storybook/addon-links',
    {
      name: '@storybook/addon-essentials',
      options: {
        backgrounds: false,
        measure: false,
        outline: false
      }
    },
    'storybook-addon-themes',
    '@storybook/addon-mdx-gfm'
  ],
  framework: {
    name: '@storybook/web-components-webpack5',
    options: {}
  },
  docs: {
    autodocs: false
  },
  core: {
    disableTelemetry: true
  },
}

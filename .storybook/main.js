module.exports = {
    "stories": [
      "../src/**/*.stories.mdx",
      "../src/**/*.stories.@(js|jsx|ts|tsx)"
    ],
    "addons": [
      "@storybook/addon-links",
      "@storybook/addon-essentials",
      '@storybook/addon-docs',
      '@storybook/addon-storysource',
      '@storybook/addon-controls',
      'storybook-react-i18next'
    ],
    "features": {
      storyStoreV7: true
    }
}

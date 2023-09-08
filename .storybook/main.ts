const config = {
  stories: ['../src/**/*.stories.@(js|jsx|ts|tsx)'],
  docs: {
    autodocs: 'tag',
  },
  typescript: {
    reactDocgen: 'react-docgen',
  },
  framework: {
    name: '@storybook/react-vite',
    options: {},
  },
  core: {
    builder: '@storybook/builder-vite',
  },
  logLevel: 'debug',
  
  installConfig: {
    hoistingLimits: 'workspaces',
  },
};
export default config;

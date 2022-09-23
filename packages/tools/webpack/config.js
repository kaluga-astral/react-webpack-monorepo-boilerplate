const path = require('path');

const { useTs } = require('@webpackon/use-ts');
const { useReactRefresh } = require('@webpackon/use-react-refresh');
const { useHtml } = require('@webpackon/use-html');
const { useBabel } = require('@webpackon/use-babel');
const { useFonts } = require('@webpackon/use-fonts');
const { useDevServer } = require('@webpackon/use-dev-server');
const { useTranspileModules } = require('@webpackon/use-transpile-modules');
const { useOptimization } = require('@webpackon/use-optimization');
const { compose } = require('@webpackon/core');

const {
  useUrlImages,
  useCompression,
  useEnv,
  useFavicons,
  useBundleAnalyzer,
  useSvgr,
} = require('./decorators');

const { ENV_NAME = 'local' } = process.env;

const publicDirPath = path.resolve(process.cwd(), 'public');

const createConfig =
  ({ devServerPort }) =>
  (_, { mode }) =>
    compose(
      useTranspileModules({
        transpileModules: [
          '@astral/illustrations',
          '@astral/fonts',
          // название продукта
          '@example/',
        ],
      }),
      useEnv({
        envFilePath: path.resolve(process.cwd(), 'env', `.env.${ENV_NAME}`),
      }),
      useReactRefresh({ mode }),
      useHtml({
        mode,
        templatePath: path.join(publicDirPath, 'index.html'),
      }),
      useBabel({ useTs: true }),
      useTs(),
      useFonts(),
      useSvgr(),
      useUrlImages({ mode }),
      useDevServer({ mode, port: devServerPort }),
      useOptimization({
        mode,
        splitChunkCacheGroups: [
          { chunkName: 'react', includePackages: ['react', 'react-dom'] },
        ],
      }),
      useCompression({ mode }),
      useFavicons({ faviconsPath: path.join(publicDirPath, 'favicons') }),
      useBundleAnalyzer({ enabled: false }),
    )({
      target: 'web',
      entry: path.resolve(process.cwd(), 'src', 'index.tsx'),
      // убирает warnings из за отключения проверки типов в babel-loader
      ignoreWarnings: [/export .* was not found in/],
    });

const cypressWebpackConfig = compose(
  useTranspileModules({
    transpileModules: ['@astral/illustrations', '@astral/fonts', '@example'],
  }),
  useBabel({ useTs: true }),
  useTs(),
  useFonts(),
  useSvgr(),
  useUrlImages({ mode: 'development' }),
)({
  target: 'web',
  entry: path.resolve(__dirname, 'src', 'index.tsx'),
  // убирает warnings из за отключения проверки типов в babel-loader
  ignoreWarnings: [/export .* was not found in/],
});

module.exports = { createConfig, cypressWebpackConfig };

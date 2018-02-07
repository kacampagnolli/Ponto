entry: [
    'react-hot-loader/patch',
    require.resolve('react-dev-utils/webpackHotDevClient'),
    require.resolve('./polyfills'),
    './src/index.tsx'
]
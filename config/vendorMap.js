const DevDllModules = {
  vendors: [
    '@loadable/component',
    'axios',
    'mobx',
    'mobx-utils',
    'mobx-react-lite',
    'mobx-state-tree',
    'react',
    'react-dom',
    '@hot-loader/react-dom',
    'react-router-dom',
    'tslib',
  ],
};

const genMap = () => {
  const tempMap = new Map();

  DevDllModules.vendors.forEach((dep) => {
    tempMap.set(dep, [dep]);
  });
  return Object.fromEntries(tempMap.entries());
};

module.exports = {
  DevDllModules,
  genMap,
};

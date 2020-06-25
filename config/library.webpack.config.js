/* eslint-disable @typescript-eslint/no-var-requires */
// Building a dll script for long term caching of modules that are not changing
// (effort to reduce build time down from X/XXs to XXXms)

const fs = require('fs-extra');
const path = require('path');

const glob = require('glob');
const webpack = require('webpack');
const chalk = require('react-dev-utils/chalk');

const paths = require('./paths');
const dllConfig = require('./vendorMap');

let DLLFilePath;
const fromNpmCheck = process.env._;
if (fromNpmCheck && fromNpmCheck.includes('npm-check')) {
  console.log(
    chalk.cyan('Running from', chalk.yellow('npm-check'), '...skipping.')
  );
  return;
}
const maxAgeInMinutes = 120;
const ForceDLL = process.env.FORCE_DLL === 'true' || false;

if (!ForceDLL) {
  console.log(chalk.cyan('DLL creation has not been forced.\n'));
  DLLFilePath = path.join(paths.appDLLFolder, 'development');
  glob('*.dll.js', { cwd: DLLFilePath }, (err, files) => {
    console.log(chalk.cyan('Files found:'));
    console.log(files, '\n');
    if (err) {
      throw err;
    }
    if (files.length) {
      const stats = fs.statSync(DLLFilePath);
      const { mtime } = stats;

      const currentDateTime = new Date();

      let timeDiff = currentDateTime - mtime;
      timeDiff = Math.round(timeDiff / 1000 / 60);
      console.log(
        chalk.cyan(
          'The',
          chalk.yellow('DEVELOPMENT'),
          'DLL was created/modified'
        ),
        chalk.yellow(timeDiff),
        chalk.cyan('minutes ago.')
      );
      console.log(
        chalk.cyan('The current created/modified age limit is'),
        chalk.yellow(maxAgeInMinutes),
        chalk.cyan('minutes')
      );

      if (timeDiff < maxAgeInMinutes) {
        console.log(
          chalk.yellow('\nSkipping DLL build'),
          chalk.green(
            '\nTo force a rebuild run:',
            chalk.cyan('\nnpm run build:dev:dll')
          )
        );
        process.exit();
      } else {
        fs.removeSync(DLLFilePath);
        console.log(
          chalk.green('\nBuilding a New', chalk.yellow('DEVELOPMENT'), 'DLL')
        );
        // console.log(chalk.green('\nBuilding a New', DLLMode, 'DLL'));
      }
    } else {
      console.log(
        chalk.red(
          'Force',
          chalk.yellow('DEVELOPMENT'),
          'DLL creation flag set'
        ),
        chalk.green('\nBuilding a New', chalk.yellow('DEVELOPMENT'), 'DLL')
      );
    }
  });
}
const DLLPath = path.join(paths.appDLLFolder, 'development');

module.exports = {
  mode: 'development',
  entry: dllConfig.DevDllModules,
  // entry: dllConfig.genMap(),
  // devtool: false,
  devtool: 'cheap-module-source-map',
  // output: {
  //   path: DLLPath,
  //   library: 'vendors_dll_[hash]',
  //   filename: 'vendors.[hash].dll.js',
  // },
  // plugins: [
  //   new webpack.DllPlugin({
  //     name: 'vendors_dll_[hash]',
  //     path: path.join(DLLPath, 'vendors-manifest.json'),
  //   }),
  // ],
  output: {
    path: DLLPath,
    filename: '[name].dll.js',
    library: '[name]',
  },
  plugins: [
    new webpack.DllPlugin({
      name: '[name]',
      path: path.join(DLLPath, '[name]-manifest.json'),
    }),
  ],
};

// --type=renderer --disable-color-correct-rendering --field-trial-handle=1718379636,1037046593745478830,2894203367294555745,131072 ≈≈,SpareRendererForSitePerProcess --lang=en-US --standard-schemes --secure-schemes=vscode-resource --bypasscsp-schemes --cors-schemes=vscode-resource --fetch-schemes=vscode-resource --service-worker-schemes --app-path=/Applications/Visual Studio Code.app/Contents/Resources/app --node-integration --webview-tag --no-sandbox --no-zygote --background-color=#212121 --num-raster-threads=4 --enable-zero-copy --enable-gpu-memory-buffer-compositor-resources --enable-main-frame-before-activation --service-request-channel-token=12371178124312828441 --renderer-client-id=5 --no-v8-untrusted-code-mitigations

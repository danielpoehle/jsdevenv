/* eslint-disable no-console */

import webpack from 'webpack';
import webpackConfig from '../webpack.config.prod';
import chalk from 'chalk';

process.env.NODE_ENV = 'production';

console.log(chalk.blue("Production build has started. This will take some moments..."));

webpack(webpackConfig).run((err, stats) => {
  if(err){ //fatal error. stop here
    console.log(chalk.red(err));
    return 1;
  }

  //console.log(stats);
  //const jsonStats = JSON.stringify(stats);


  /* if(jsonStats.hasErrors){
    return jsonStats.errors.map(error => console.log(chalk.red(error)));
  } */

  /* if(jsonStats.hasWarnings){
    console.log(chalk.yellow("Webpack generated the following warnings:"));
    return jsonStats.warnings.map(warning => console.log(chalk.yellow(warning)));
  } */

  console.log(`Webpack stats: ${stats}`);

  //build succeeded
  console.log(chalk.green("Your app has been successfully build and written to /dist"));

  return 0;
});

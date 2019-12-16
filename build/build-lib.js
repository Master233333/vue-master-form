const shell = require('shelljs');
const signale = require('signale');

const { Signale } = signale;
const tasks = [
  'npm i',
  'node build/build-components.js',
  'webpack --config ./build/webpack.prod.js',
];

tasks.every(task => {
  signale.start(task);

  const interactive = new Signale({ interactive: true });
  interactive.pending(task);

  const result = shell.exec(`${task} --silent`);

  if (result.code !== 0) {
    interactive.error(task);
    return false;
  }

  interactive.success(task);
  return true;
});

// IMPORTANT: This is definition is for happo classic

const FirefoxTarget = require('happo-target-firefox');
const S3Uploader = require('happo-uploader-s3');

module.exports = {
  // the name of the summary file, it gets placed into the screenshots folder
  // (default is shown below)
  resultSummaryFilename: 'resultSummary.json',

  // A function that returns an "Uploader" interface for CI.
  // (default: null)
  // uploader: () => new S3Uploader(),

  // Specify the folder where snapshots are saved
  // (default: 'snapshots')
  snapshotsFolder: 'testHelpers/screenshots',

  // An array of "targets" to run. Targets specify the environment to run
  // the snapshots in. Must specify at least one.
  // (default: [])
  targets: [
    new FirefoxTarget({
      // ... configuration for FirefoxTarget
      sourceFiles: [
        'testHelpers/dist/main.js',
      ]
    }),
  ],
};

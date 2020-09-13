const { workerData, parentPort } = require('worker_threads'); 
const { minify } = require('html-minifier');
parentPort.postMessage(minify(workerData.html, workerData.options));
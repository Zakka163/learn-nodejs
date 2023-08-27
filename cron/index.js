const cron = require('node-cron');

cron.schedule('0.005 * * * * *', function() {
  console.log('Running task every second');
});
console.log("outt");
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const authRouter = require(__dirname + '/../routes/auth_routes');
const planRouter = require(__dirname + '/../routes/plan_routes');
const emailRouter = require(__dirname + '/../routes/email_router');

app.use('/api', authRouter);
app.use('/api', planRouter);
app.use('/api', emailRouter);

module.exports = exports = {
  server: {
    close: function() { throw new Error('server not started yet'); }  //  eslint-ignore-line semi
   },
    listen: function(port, mongoLoc, cb) {
    mongoose.connect(mongoLoc);
    return this.server = app.listen(port, cb);
  },
  close: function(cb) {
    this.server.close();
    if (cb) cb();
  }
};

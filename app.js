/**
 * @module
 * @author      Reydel Leon Machado
 * @copyright   (c) 2015 Reydel Leon Machado
 * @license     Licensed under MIT license
 */

var koa = require('koa'),
    app = koa();

// x-response-time
app.use(function *(next) {
    var start = new Date(),
        ms;

    yield next;

    ms = new Date() - start;
    this.set('X-Response-Time', ms + 'ms');
});

// Logger
app.use(function *(next) {
    var start = new Date(),
            ms;

    yield next;

    ms = new Date() - start;
    console.log('%s %s - %s', this.method, this.url, ms);
});

app.use(function *() {
    this.body = 'Hello World!';
});

app.listen(3000);
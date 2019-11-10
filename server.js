const prerender = require('prerender');
const server = prerender({
  chromeFlags: [ '--no-sandbox', '--headless', '--disable-gpu', '--remote-debugging-port=9222', '--hide-scrollbars','--shm-size=1G','--disable-dev-shm-usage' ],
  forwardHeaders: true,
  chromeLocation: '/usr/bin/chromium-browser'
});

server.use(require('prerender-request-blacklist'));
// server.use(prerender.blockResources());
server.use(prerender.blacklist());
server.use(prerender.httpHeaders());

server.start();

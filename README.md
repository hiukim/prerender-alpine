# Prerender Alpine

Lightweight Prerender container built on Alpine Linux with Node and Headless Chrome.

- Prerender 5.6.0
- Chromium 72.0.3626.121-r0
- Node 10.15.3

## Requirements

- Docker

## Usage

Pull and run the image:

```
docker pull 23233/prerender-alpine-block:5.6.0
docker run -p 3000:3000 23233/prerender-alpine-block:5.6.0
```
Prerender will now be running on http://localhost:3000. Try the container out with curl:

```
curl http://localhost:3000/render?url=https://www.example.com/
```

Check out the official Prerender documentation: https://github.com/prerender/prerender

## More

More infomation:
  1. this lib use memory-cache 
  2. this lib use logger debug
  3. this lib stop css 
  4. this lib focus seo only use seo!

## Prereqs

- Node.js + npm

Clone the project and:

- `npm install` && `npm run build`

## Config

Create `.env` file at project root with contents like (see `.env.keep` model):

```txt
HOST=localhost
PORT=3001
REPO=https://github.gwd.broadcom.net/MFD/ops-code-review
GH_TOKEN=1c536db6673803cdbc5c1b1297d6bf510b31a301
GH_USER=dk635460
```

## Start

Run via `npm run start`.

## Execute

`curl -u someuser -X POST -G host:port/tso --data-urlencode command"some tso command"`

or visit `host:port` (i.e. `localhost:3001`) in your browser

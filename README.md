# ipid-did-resolver

[![NPM version][npm-image]][npm-url] [![Downloads][downloads-image]][npm-url] [![Build Status][travis-image]][travis-url] [![Coverage Status][codecov-image]][codecov-url] [![Dependency status][david-dm-image]][david-dm-url] [![Dev Dependency status][david-dm-dev-image]][david-dm-dev-url]

[npm-url]:https://npmjs.org/package/ipid-did-resolver
[downloads-image]:http://img.shields.io/npm/dm/ipid-did-resolver.svg
[npm-image]:http://img.shields.io/npm/v/ipid-did-resolver.svg
[travis-url]:https://travis-ci.org/ipfs-shipyard/js-ipid-did-resolver
[travis-image]:http://img.shields.io/travis/ipfs-shipyard/js-ipid-did-resolver/master.svg
[codecov-url]:https://codecov.io/gh/ipfs-shipyard/js-ipid-did-resolver
[codecov-image]:https://img.shields.io/codecov/c/github/ipfs-shipyard/js-ipid-did-resolver/master.svg
[david-dm-url]:https://david-dm.org/ipfs-shipyard/js-ipid-did-resolver
[david-dm-image]:https://img.shields.io/david/ipfs-shipyard/js-ipid-did-resolver.svg
[david-dm-dev-url]:https://david-dm.org/ipfs-shipyard/js-ipid-did-resolver?type=dev
[david-dm-dev-image]:https://img.shields.io/david/dev/ipfs-shipyard/js-ipid-did-resolver.svg

IPID resolver to be used with the generic [did-resolver](https://github.com/uport-project/did-resolver) package.


## Installation

```sh
$ npm install did-resolver ipid-did-resolver
```

This library is written in modern JavaScript and is published in both CommonJS and ES module transpiled variants. If you target older browsers please make sure to transpile accordingly.


## Usage

```js
import registerResolver from 'ipid-did-resolver';
import resolve from 'did-resolver';

registerResolver(ipfs);

await (async () => {
    const didDocument = await resolve('did:ipid:xxxxxxx');

    console.log(didDocument);
})();
```

You must provide a valid [`ipfs`](https://github.com/ipfs/js-ipfs) instance to the `registerResolver` function


## Tests

```sh
$ npm test
$ npm test -- --watch # during development
```


## License

Released under the [MIT License](http://www.opensource.org/licenses/mit-license.php).

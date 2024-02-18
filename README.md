
# ActiveStream

ActiveStream is a simple observable stream controller for modern JS applications.

[Apache 2.0 License](LICENSE.txt)

## Installation and Usage

### ES6 via npm

```shell
npm install @codewagon/active-stream
```


```ts
import ActiveStream from '@codewagon/active-stream';
const activeStream = new ActiveStream();
//subscribe to the stream
activeStream.stream.subscribe((event) => {
    console.log(event);
})

//push data into the stream
activeStream.request({name: 'user=logged-in', data: {name: 'Victor'}});
```


## Goals

- Smaller overall bundles sizes
- Provide better performance than preceding versions of ActiveStream
- To help create cross-platform resusable service layer for JS applications
- To simplify inter-component communication in JS applications
- To enable the separation of the Data layer in JS applications

## Building/Testing

- `npm test` run tests

# Timer Function Execution

![npm](https://img.shields.io/npm/v/timer-function-execution)
![npm](https://img.shields.io/npm/dt/timer-function-execution)
![NPM](https://img.shields.io/npm/l/timer-function-execution)

**Timer Function Execution** is a library that provides a simple way to measure the execution time of functions in JavaScript and React Native. It supports both synchronous and asynchronous functions, making it a versatile tool for developers who want to optimize their code's performance.

## Installation

You can install the library using npm or yarn:

```bash
$ npm install timer-function-execution
```

or

```bash
$ yarn add timer-function-execution
```

## Usage

```javascript
import Timer from "timer-function-execution";

const timer = new Timer();

// Measure the execution time of a synchronous function
timer.start();
simulateSyncOperation();
timer.stop();
console.log(
  `Elapsed time for synchronous function: ${timer.getElapsedTime()} ms`
);

// Measure the execution time of an asynchronous function
await timer.measureAsync(async () => {
  // Replace this with your asynchronous function
  await simulateAsyncOperation();
});
```

## Features

- Measure execution time of both synchronous and asynchronous functions.
- Support for asynchronous measurements using async/await.
- Simple and easy-to-use API.

## License

This library is open-source and available under the MIT License.

## Author

Created by [gusbdev](https://github.com/gusbdev)

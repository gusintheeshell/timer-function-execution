import Timer from "../src/index";

const timer = new Timer();

async function testAsyncFunction() {
  await timer.measureAsync(async () => {
    await simulateAsyncOperation();
  });
}

function testSyncFunction() {
  timer.start();
  simulateSyncOperation();
  timer.stop();
}

async function simulateAsyncOperation() {
  await new Promise((resolve) => setTimeout(resolve, 1000));
}

function simulateSyncOperation() {
  for (let i = 0; i < 1000000; i++) {
    console.debug("Simulating sync operation");
  }
}

testAsyncFunction();
testSyncFunction();

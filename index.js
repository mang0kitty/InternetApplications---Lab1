function wait(ms) {
  return new Promise((resolve, reject) => setTimeout(resolve, ms));
}

async function DoLoop() {
  for (let count = 25; count >= 0; --count) {
    console.log(count);
    await wait(5000);
  }
}

DoLoop();

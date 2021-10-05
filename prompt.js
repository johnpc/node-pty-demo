const prompt = (handle) =>
  new Promise((resolve) => {
    process.stdin.resume();
    process.stdin.setEncoding("utf8");
    console.log('Press Enter to Continue');
    process.stdin.once("data", (data) => {
      resolve(handle);
    });
  });

const run = async () => {
  await prompt();
  console.log('done.')
  process.exit();
}

run()

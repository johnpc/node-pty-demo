var os = require("os");
var pty = require("node-pty-prebuilt-multiarch");

var isWindows = os.platform() === 'win32';
var node = isWindows ? 'node.exe' : 'node';

var ptyProcess = pty.spawn(node, [`${process.cwd()}/prompt.js`], {
  name: "xterm-256color",
  cwd: process.cwd(),
  useConpty: true,
});

ptyProcess.onData((data) => {
  process.stdout.write(data);
  if (data.includes("Enter")) {
    console.log("pressing enter");
    ptyProcess.write(os.EOL);
  }
});

process.on("exit", () => ptyProcess.kill());

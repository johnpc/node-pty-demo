# Node Pty Test

This is an example package to demonstrate strange node-pty behavior.

On MacOS:

```
➜  node-pty-test npm test

> pty-test@1.0.0 test
> node index.js

Press Enter to Continue
pressing enter

done.
```

On Windows Powershell:

```powershell
node-pty-test $ npm test
Press Enter to Continue
pressing enter
# (...hangs indefinitely...)
```

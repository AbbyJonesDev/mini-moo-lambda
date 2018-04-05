**Background**

Lambda function will be run on AWS platform, where the most recent version of Node available is 6.10.

The code inside the function executes successfully when it's run directly from src in the command line.
The built version fails with the error below.  We got the same error when running locally and in the AWS environment.

**Error when run after build**

```$xslt
fs.js:653
  return binding.open(pathModule._makeLong(path), stringToFlags(flags), mode);
                 ^

Error: ENOENT: no such file or directory, open '/templates/wsse-security-header.ejs'
    at Object.fs.openSync (fs.js:653:18)
    at Object.fs.readFileSync (fs.js:554:33)
    at Object.<anonymous> (/Users/AbbyJones/mini-moo-ccaas-node/dist/soapConnections.js:1:1083015)
    at Object.<anonymous> (/Users/AbbyJones/mini-moo-ccaas-node/dist/soapConnections.js:1:1084737)
    at __webpack_require__ (/Users/AbbyJones/mini-moo-ccaas-node/dist/soapConnections.js:1:238)
    at Object.<anonymous> (/Users/AbbyJones/mini-moo-ccaas-node/dist/soapConnections.js:1:1077951)
    at __webpack_require__ (/Users/AbbyJones/mini-moo-ccaas-node/dist/soapConnections.js:1:238)
    at Object.<anonymous> (/Users/AbbyJones/mini-moo-ccaas-node/dist/soapConnections.js:1:610136)
    at __webpack_require__ (/Users/AbbyJones/mini-moo-ccaas-node/dist/soapConnections.js:1:238)
    at Object.<anonymous> (/Users/AbbyJones/mini-moo-ccaas-node/dist/soapConnections.js:1:610053)
    at __webpack_require__ (/Users/AbbyJones/mini-moo-ccaas-node/dist/soapConnections.js:1:238)
    at Object.<anonymous> (/Users/AbbyJones/mini-moo-ccaas-node/dist/soapConnections.js:1:609774)
    at __webpack_require__ (/Users/AbbyJones/mini-moo-ccaas-node/dist/soapConnections.js:1:238)
    at /Users/AbbyJones/mini-moo-ccaas-node/dist/soapConnections.js:1:776
    at Object.<anonymous> (/Users/AbbyJones/mini-moo-ccaas-node/dist/soapConnections.js:1:823)
    at Module._compile (module.js:624:30)

```
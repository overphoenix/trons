#!/usr/bin/env tron

// this script needs root user to create another one

// import { ConnectConfig } from 'ssh2';
// const { SSH2, argv } = require("@recalibratedsystems/tron/.");

const sshConfig = {
  host: argv.host,
  port: argv.port ?? 22,
  username: 'root',
  password: argv.password,
  identity: argv.identity,
  passphrase: argv.keypass
};

const ssh = new SSH2(sshConfig);

await ssh.connect();
console.log(`connected to ${ssh.host}:${ssh.port}`);


await ssh.close();

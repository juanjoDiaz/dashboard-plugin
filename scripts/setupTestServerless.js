#!/usr/bin/env node

'use strict';

require('essentials');

require('../test/setupServerless')({ shouldKeepServerlessDir: true }).then(({ root }) =>
  process.stdout.write(`${root}\n`)
);

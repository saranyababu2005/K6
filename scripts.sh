#!/bin/sh
k6 run --http-debug="full" -e MY_WORKLOAD="smoke" src/test/privateCroc.js
k6 run --http-debug="full" -e MY_WORKLOAD="smoke" src/test/test1.js
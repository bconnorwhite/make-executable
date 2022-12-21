/* eslint-disable no-bitwise */
import { beforeEach, test } from "@jest/globals";
import mock, { restore, directory } from "mock-fs";
import { promises } from "fs";
import { makeExecutable, getExecutableMode } from "../source";


beforeEach(async () => {
  mock({
    "/test": {
      "dir": {},
      "file.js": "console.log('hello');"
    },
    "/no-access": directory({
      mode: 0,
      items: {
        b: "no access"
      }
    })
  })
});

afterEach(async () => {
  restore();
});

test("make executable", async () => {
  return makeExecutable("/test/file.js").then(async (result) => {
    expect(result).toBe(true);
    return promises.stat("/test/file.js").then((stats) => {
      expect(stats.mode & getExecutableMode()).toBe(getExecutableMode());
    });
  });
});

test("make executable no exists", async () => {
  return makeExecutable("/test/does-not-exist.js").then(async (result) => {
    expect(result).toBe(false);
  });
});

test("make executable no access", async () => {
  return makeExecutable("/no-access/b").then(async (result) => {
    expect(result).toBe(undefined);
  });
});

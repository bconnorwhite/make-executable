import { expect, test, beforeEach, afterEach } from "@jest/globals";
import mock, { restore, directory } from "mock-fs";
import { promises } from "fs";
import { makeExecutableSync, getExecutableMode } from "../source";

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
  expect(makeExecutableSync("/test/file.js")).toBe(true);
  const stats = await promises.stat("/test/file.js");
  expect(stats.mode & getExecutableMode()).toBe(getExecutableMode());
});

test("make executable no exists", () => {
  expect(makeExecutableSync("/test/does-not-exist.js")).toBe(false);
});

test("make executable no access", () => {
  expect(makeExecutableSync("/no-access/b")).toBe(undefined);
});

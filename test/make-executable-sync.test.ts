/* eslint-disable no-bitwise */
import { beforeEach, test } from "@jest/globals";
import mock, { restore, directory } from "mock-fs";
import { promises } from "fs";
import { makeExecutableSync, getExecutableMode } from "../source";


beforeEach(async () => {
  mock({
    "/test": {
      "dir": {},
      "note.md": "hello world!"
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
  expect(makeExecutableSync("/test/note.md")).toBe(true);
  return promises.stat("/test/note.md").then((stats) => {
    expect(stats.mode & getExecutableMode()).toBe(getExecutableMode());
  });
});

test("make executable no exists", () => {
  expect(makeExecutableSync("/test/nope.md")).toBe(false);
});

test("make executable no access", () => {
  expect(makeExecutableSync("/no-access/b")).toBe(undefined);
});

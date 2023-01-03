import { promises, chmodSync, constants, statSync } from "fs";

export function getExecutableMode(mode = 0) {
  return mode | constants.S_IXUSR | constants.S_IXGRP | constants.S_IXOTH;
}

function handleError(err: any) {
  if(err.code === "ENOENT") {
    return false;
  } else {
    return undefined;
  }
}

export async function makeExecutable(path: string) {
  try {
    const stats = await promises.stat(path);
    await promises.chmod(path, getExecutableMode(stats.mode));
    return true;
  } catch(err) {
    return handleError(err);
  }
}

export function makeExecutableSync(path: string) {
  try {
    const stats = statSync(path);
    chmodSync(path, getExecutableMode(stats.mode));
    return true;
  } catch(err) {
    return handleError(err);
  }
}

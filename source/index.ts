import { promises, chmodSync, constants } from "fs";

export function getExecutableMode() {
  // eslint-disable-next-line no-bitwise
  return constants.S_IXUSR | constants.S_IXGRP | constants.S_IXOTH;
}

function handleError(err: any) {
  if(err.code === "ENOENT") {
    return false;
  } else {
    return undefined;
  }
}

export async function makeExecutable(path: string) {
  return promises.chmod(path, getExecutableMode()).then(() => {
    return true;
  }).catch((err) => {
    return handleError(err);
  });
}

export function makeExecutableSync(path: string) {
  try {
    chmodSync(path, getExecutableMode());
    return true;
  } catch(err) {
    return handleError(err);
  }
}

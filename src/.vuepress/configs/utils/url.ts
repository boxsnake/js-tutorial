import * as path from 'path'

export function prefixer (prefix : string, uri : string) : string {
  return path.posix.normalize(`/${prefix}/${uri}`)
}

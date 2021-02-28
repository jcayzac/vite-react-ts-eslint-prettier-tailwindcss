import { BasePlugin } from './base'
import { promises as fs } from 'fs'

class SourcePlugin extends BasePlugin {
  private static SOURCE_PREFIX = `content:`

  constructor() {
    super(`SourcePlugin`)
  }

  async resolveId(id: string): Promise<any> {
    if (id.startsWith(SourcePlugin.SOURCE_PREFIX)) return id
  }

  async load(id: string): Promise<any> {
    if (id.startsWith(SourcePlugin.SOURCE_PREFIX)) {
      const glob = id.slice(SourcePlugin.SOURCE_PREFIX.length)
      const content = await fs.readdir(glob, 'utf-8')
      return `export const content = ${JSON.stringify(content.join('\n'))}`
    }
  }

  static factory() {
    return new SourcePlugin()
  }
}

export default SourcePlugin.factory

import { BasePlugin } from './base'
import { promises as fs } from 'fs'
import { basename } from 'path'

const prefix = '@image/'

const sourceFromId = (id: string) => id.slice(prefix.length)

class ImagePlugin extends BasePlugin {
  constructor() {
    super(`ImagePlugin`)
  }

  async resolveId(id: string, importer?: string): Promise<any> {
    if (id.startsWith(prefix)) {
      const resolved = await this.context.resolve(sourceFromId(id), importer)
      return `${prefix}${resolved?.id}`
    }
  }

  async load(id: string): Promise<any> {
    if (id.startsWith(prefix)) {
      const source = sourceFromId(id)
      const data = await fs.readFile(source, 'utf8')

      this.context.addWatchFile(source)
      const emitted = this.context.emitFile({
        name: basename(source),
        source: `${data}\n<!-- foooooooooooooooooo -->`,
        type: 'asset',
      })

      return `
      export default import.meta.ROLLUP_FILE_URL_${emitted}
      `
    }
  }

  static factory() {
    return new ImagePlugin()
  }
}

export default ImagePlugin.factory

import { PluginContext } from 'rollup'
import { Plugin } from 'vite'

export class BasePlugin implements Plugin {
  name: string

  constructor(name: string) {
    this.name = name
  }

  get context(): PluginContext {
    return this as any
  }
}

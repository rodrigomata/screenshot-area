import { Overlay } from './lib/Overlay'

export class ScreenshotArea {
  private enableOverlay = true
  private screenshotParentSelector = 'body'

  protected overlay: any
  // protected htmlNode: Element

  constructor(params: ScreenshotAreaConfig) {
    console.log('1')
    this._assignParameters(params)
    this._init()
  }

  private _init() {
    this._applyParameters()
  }

  private _assignParameters(params: ScreenshotAreaConfig) {
    this.enableOverlay = params?.overlay ?? true
    this.screenshotParentSelector = params?.parentSelector ?? 'body'
  }

  private _applyParameters() {
    if (this.enableOverlay) {
      console.log('overlay')
      this.overlay = new Overlay({})
    }

    const htmlNode = document.querySelector(this.screenshotParentSelector)
    console.log('node', htmlNode)
  }
}

interface ScreenshotAreaConfig {
  overlay?: boolean
  parentSelector?: string
}

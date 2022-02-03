import { Overlay } from './lib/Overlay'

export class ScreenshotArea {
  private enableOverlay = true
  private screenshotParentSelector = 'body'

  protected overlay: any
  // protected htmlNode: Element

  constructor(params: ScreenshotAreaConfig) {
    this._assignParameters(params)
    this._init()
  }

  private _init() {
    this._applyParameters()
  }

  private _assignParameters(params: ScreenshotAreaConfig) {
    this.enableOverlay = params?.overlay ?? true
    this.screenshotParentSelector = params?.parentSelector ?? 'html'
  }

  private _applyParameters() {
    const htmlNode = document.querySelector(this.screenshotParentSelector)
    this.overlay = new Overlay(htmlNode)
    // if (this.enableOverlay) {
    //   console.log('overlay')
    // }
  }

  public something() {
    const htmlNode = document.querySelector(this.screenshotParentSelector)
    const clonedBody = (htmlNode as Element).cloneNode(true)

    const newDoc = document.createElement('div')
    newDoc.append(clonedBody)

    const w = window.innerWidth
    const h = window.innerHeight

    const svgString = `
    <svg xmlns="http://www.w3.org/2000/svg" width="${w}" height="${h}">
      <foreignObject x="0" y="0" width="100%" height="100%">
        <div xmlns="http://www.w3.org/1999/xhtml">
          ${newDoc.innerHTML}
        </div>
      </foreignObject>
    </svg>`
    const svgEl = `data:image/svg+xml;charset=utf-8,${svgString}`
    console.log({ svgEl })

    // console.log({ svgEl })
    console.log({ clonedBody })
  }

  public getImage() {
    const img = new Image()
    img.onload = function () {
      const canvas = document.createElement('canvas')
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
      const context = canvas.getContext('2d')
      context?.drawImage(
        img,
        0,
        0,
        window.innerWidth,
        window.innerHeight,
        0,
        0,
        window.innerWidth,
        window.innerHeight,
      )
      const uri = canvas.toDataURL('image/png')
      console.log('uri', uri)
      img.src = uri
    }
    return img
  }
}

interface ScreenshotAreaConfig {
  overlay?: boolean
  parentSelector?: string
}

export class Overlay {
  private dom: Element | null
  private windowHeight: number
  private windowWidth: number

  constructor(dom: Element | null) {
    this.dom = dom
    this.windowWidth = window.innerWidth
    this.windowHeight = window.innerHeight
  }

  public drawOverlay() {
    const overlayCanvas = document.createElement('canvas')
    overlayCanvas.width = this.windowWidth
    overlayCanvas.height = this.windowHeight
    // const context = overlayCanvas.getContext('2d')
    console.log({ overlayCanvas })
  }
}

export type OverlayType = InstanceType<typeof Overlay>

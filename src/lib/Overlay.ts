export class Overlay {
  private dom: any

  constructor(dom: any) {
    this.dom = dom
  }
}

export type OverlayType = InstanceType<typeof Overlay>

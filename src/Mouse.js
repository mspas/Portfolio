export default class Mouse {
  constructor() {
    this._x = 0;
    this._y = 0;
    this.delta_x = 0;
    this.delta_y = 0;
    this.elem_pos_x = 0;
    this.elem_pos_y = 0;
    this.center_x = 0;
    this.center_y = 0;
  }

  setCardPos(x, y, scrollY) {
    this.elem_pos_x = x;
    this.elem_pos_y = y - scrollY;
  }

  updatePosition(clientX, clientY) {
    this.delta_x = (clientX - this.center_x) * 0.15;
    this.delta_y = (clientY - this.center_y) * -0.15;
  }
  setOrigin(offsetLeft, offsetTop, offsetWidth, offsetHeight) {
    this._x = offsetLeft + Math.floor(offsetWidth / 2);
    this._y = offsetTop + Math.floor(offsetHeight / 2);
    this.center_x = this._x + this.elem_pos_x;
    this.center_y = this._y + this.elem_pos_y;
  }
}

/**
 * Created by Vincent on 2017/8/31.
 */
import {DisplayObject} from 'lomo';
export default class FloatButton extends DisplayObject {
  createElement(){
    super.createElement();

    this.onMouseDown = this::this.onMouseDown;
    this.onMouseMove = this::this.onMouseMove;
    this.onMouseUp = this::this.onMouseUp;
    this.onClick = this::this.onClick;

    this.addDOMListener('mousedown', this.onMouseDown);
  }
  onMouseDown(event){
    this.$screenX = event.screenX;
    this.$screenY = event.screenY;

    this.$x = this.x;
    this.$y = this.y;

    document.addEventListener('mousemove', this.onMouseMove);
    document.addEventListener('mouseup', this.onMouseUp);
    document.addEventListener('click', this.onClick);
  }
  onMouseUp(event){
    console.log('_________onMouseUp111');
    event.preventDefault();
    event.stopImmediatePropagation();
    event.stopPropagation();
    document.removeEventListener('mousemove', this.onMouseMove);
    document.removeEventListener('mouseup', this.onMouseUp);
    document.removeEventListener('click', this.onClick);
  }
  onClick(event){
    console.log('_________onClick document');
    event.preventDefault();
    event.stopImmediatePropagation();
    event.stopPropagation();
    // document.removeEventListener('mousemove', this.onMouseMove);
    // document.removeEventListener('mouseup', this.onMouseUp);
    // document.removeEventListener('mouseup', this.onMouseUp2, true);
  }
  onMouseMove(event){
    this.x = this.$x - this.$screenX + event.screenX;
    this.y = this.$y - this.$screenY + event.screenY;
  }
}

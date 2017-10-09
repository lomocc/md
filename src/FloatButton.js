/**
 * Created by Vincent on 2017/8/31.
 */
import {DisplayObject} from 'lomo';
export default class FloatButton extends DisplayObject {
  createElement(){
    super.createElement();

    this.onMouseDown = this::this.onMouseDown;
    // this.onMouseUp = this::this.onMouseUp;

    this.onStageMouseMove = this::this.onStageMouseMove;
    this.onStageMouseUp = this::this.onStageMouseUp;
    // this.onStageClick = this::this.onStageClick;
    this.onClick = this::this.onClick;

    this.addDOMListener('mousedown', this.onMouseDown, true);
    // this.addDOMListener('click', this.onClick);
    // document.addEventListener('click', this.onStageClick, true);
    // document.addEventListener('mouseup', this.onStageMouseUp);
    // this.addDOMListener('click', this.onClick, true);
    this.addDOMListener('click', this.onClick, true);

    this.x = localStorage.getItem('x') || 0;
    this.y = localStorage.getItem('y') || 0;
  }

  onMouseDown(event){
    console.log('onMouseDown');
    this.clickTime = Date.now();

    this.$screenX = event.screenX;
    this.$screenY = event.screenY;

    this.$x = this.x;
    this.$y = this.y;

    document.addEventListener('mousemove', this.onStageMouseMove);
    document.addEventListener('mouseup', this.onStageMouseUp);
    // this.addDOMListener('click', this.onClick, true);
    // document.addEventListener('click', this.onStageClick, true);
  }
  onStageMouseUp(event){
    event.stopPropagation();

    console.log('onStageMouseUp');

    document.removeEventListener('mousemove', this.onStageMouseMove);
    document.removeEventListener('mouseup', this.onStageMouseUp);
    // document.removeEventListener('click', this.onStageClick, true);
  }
  onClick(event){

    let duration = Date.now() - this.clickTime;
    if(duration < 200){
      const onClick = this.props.get('onClick');
      if(onClick){
        onClick();
      }
    }

    console.log('onClick', duration);

    //
    //
    // event.stopImmediatePropagation();
    // this.removeDOMListener('click', this.onClick, true);
  }
  // onStageClick(event){
  //   console.log('onStageClick', this.$mouseIsDown);
  //   if(this.$mouseIsDown){
  //     event.stopImmediatePropagation();
  //   }
  //   // event.stopImmediatePropagation();
  //   // document.removeEventListener('mousemove', this.onMouseMove);
  //   // document.removeEventListener('mouseup', this.onMouseUp);
  //   // document.removeEventListener('mouseup', this.onMouseUp2, true);
  // }
  onStageMouseMove(event){

    // this.addDOMListener('click', this.onClick, true);

    // event.stopImmediatePropagation();
    this.x = this.$x - this.$screenX + event.screenX;
    this.y = this.$y - this.$screenY + event.screenY;
    localStorage.setItem('x', this.x);
    localStorage.setItem('y', this.y);
  }
}

/**
 * Created by Vincent on 2017/8/31.
 */
import {DisplayObject} from 'lomo';
import echarts from 'echarts';
export default class ECharts extends DisplayObject {
  createElement(){
    super.createElement();

    this.$echart = echarts.init(this.element);

    this.valueChangedHandler = this.valueChangedHandler.bind(this);
    this.styleChangedHandler = this.styleChangedHandler.bind(this);
    this.addEventListener('valueChanged', this.valueChangedHandler);
    this.addEventListener('styleChanged', this.styleChangedHandler);
  }
  get option(){
    this.getValue('option');
  }
  set option(value){
    this.setValue('option', value);
  }
  valueChangedHandler(event){
    if(event.propertyName == 'option'){
      if(event.newValue) {
        this.$echart.setOption(event.newValue, true);
      }
    }
  }
  styleChangedHandler(event){
    setTimeout(()=>{
      this.$echart.resize();
    });
    console.log('this.$echart.styleChangedHandler');
  }
}

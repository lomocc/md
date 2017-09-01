/**
 * Created by Vincent on 2017/8/31.
 */
import {createElement, Node} from 'lomo';
import echarts from 'echarts';
export default class ECharts extends Node {
  onCreate(){
    super.onCreate();

    console.log('ECharts onCreate');
    this.$echart = echarts.init(this.element);
  }
  get option(){
    this.getProperty('option');
  }
  set option(value){
    this.setProperty('option', value);
  }
  render(props){
    let {option, ...others} = props;

    super.render(others);

    if(!!option) {
      this.$echart.setOption(option, true);
    }
  }
}

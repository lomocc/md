/**
 * Created by vincent on 17/3/11.
 */

import {Stage, Node, Image, Text, cloneElement, Video} from "lomo";
import ECharts from "./ECharts";

let option = {
  tooltip: {
    trigger: 'item',
    formatter: "{a} <br/>{b}: {c} ({d}%)"
  },
  legend: {
    orient: 'vertical',
    x: 'left',
    data:['直接访问','邮件营销','联盟广告','视频广告','搜索引擎']
  },
  series: [
    {
      name:'访问来源',
      type:'pie',
      radius: ['50%', '70%'],
      avoidLabelOverlap: false,
      label: {
        normal: {
          show: false,
          position: 'center'
        },
        emphasis: {
          show: true,
          textStyle: {
            fontSize: '30',
            fontWeight: 'bold'
          }
        }
      },
      labelLine: {
        normal: {
          show: false
        }
      },
      data:[
        {value:335, name:'直接访问'},
        {value:310, name:'邮件营销'},
        {value:234, name:'联盟广告'},
        {value:135, name:'视频广告'},
        {value:1548, name:'搜索引擎'}
      ]
    }
  ]
};
let stage = new Stage();
let container = new Node();
var video = new Video();
video.src = 'http://www.w3school.com.cn/i/movie.ogg';
video.controls = true;
video.autoplay = true;
video.width = 600;
container.addChild(video);
container.addChild(<img class="image123" src="https://4.bp.blogspot.com/-QxIjKSiGWZU/Vi2iKa-D15I/AAAAAAAGqoo/D-0_NT3zkGo/s1600/%25E6%259D%25BE%25E6%259C%25AC%2B%25E6%25BD%25AE%25E9%2587%258C%2528Shiori%2BMatsumoto%2529-www.kaifineart.com-12.jpg"/>);
// create with new
var label = new Text();
label.setStyle({fontSize: '30px', color: 'red'});
label.setClassName('tf1_test');
label.text = "但是，我们只保护我们的代码不受在其之后执行的代码的干扰，并不能防御先于我们代码执行的代码。";
container.addChild(label);
// create with jsx
container.addChild(<text style={{fontSize: '30px', color: 'red'}} className="tf1_test">但是，我们只保护我们的代码不受在其之后执行的代码的干扰，并不能防御先于我们代码执行的代码。</text>);
// mount stage to document.body
stage.startup(document.body);

let charts = new ECharts({style: {width:'400px', height: '400px'}});
charts.option = option;
container.addChild(charts);


// let charts2 = new charts.constructor({style: {width:'400px', height: '400px'}});
// container.addChild(charts2);
stage.addChild(container);
//
let containerCloned = cloneElement(container, {className: 'containerCloned'});
stage.addChild(containerCloned);


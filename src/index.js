import {Application, Image, Input, Label, Video, Button} from "lomo";
import ECharts from "./ECharts";
var app = new Application();
app.start();

console.log(process.env.VERSION, process.env.NODE_ENV)
var img1 = new Image();
img1.source = "https://4.bp.blogspot.com/-QxIjKSiGWZU/Vi2iKa-D15I/AAAAAAAGqoo/D-0_NT3zkGo/s1600/%25E6%259D%25BE%25E6%259C%25AC%2B%25E6%25BD%25AE%25E9%2587%258C%2528Shiori%2BMatsumoto%2529-www.kaifineart.com-12.jpg";
app.addElement(img1);

var label1 = new Label();
label1.style = {fontSize: '30px', color: 'red'};
label1.className = 'tf1_test';
label1.text = "但是，我们只保护我们的代码不受在其之后执行的代码的干扰，并不能防御先于我们代码执行的代码。";
app.addElement(label1);

var input1 = new Input();
input1.style = {fontSize: '30px', color: '#56a'};
input1.text = "但是，我们只保护我们的代码不受在其之后执行的代码的干扰，并不能防御先于我们代码执行的代码。";
app.addElement(input1);

var video1 = new Video();
video1.addEventListener('sourceChanged', function (event) {
  console.log('video1', event.target.source);
});
video1.source = 'http://www.w3school.com.cn/i/movie.ogg';
video1.controls = false;
video1.autoplay = true;
video1.loop = true;
video1.width = 600;

app.addElement(video1);

var charts = new ECharts();
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
charts.option = option;
charts.style = {width:400, height: 400};
app.addElement(charts);

import {Application, Image, Input, Label, Video, Button, Shape, DisplayObject} from "lomo";
import FloatButton from './FloatButton';
var app = new Application();
app.start();

var buttonNav = new FloatButton();
buttonNav.setStyle({
  borderRadius: 20,
  width: 20,
  height: 20,
  backgroundColor: 0xff9900
});
buttonNav.style.position = 'fixed';
app.addElement(buttonNav);

buttonNav.props.set('onClick', ()=>{
  // console.log('click location.href2');
  location.href = '/';
});
// buttonNav.addDOMListener('click', ()=>{
//   console.log('click location.href2');
//   // location.href = '/menu.md';
// }, false);

var post_container = new DisplayObject();
post_container.positioner.innerHTML = post_content;
app.addElement(post_container);


console.log(process.env.VERSION, process.env.NODE_ENV)
var img1 = new Image();
img1.source = "https://4.bp.blogspot.com/-QxIjKSiGWZU/Vi2iKa-D15I/AAAAAAAGqoo/D-0_NT3zkGo/s1600/%25E6%259D%25BE%25E6%259C%25AC%2B%25E6%25BD%25AE%25E9%2587%258C%2528Shiori%2BMatsumoto%2529-www.kaifineart.com-12.jpg";
app.addElement(img1);

var label1 = new Label();
label1.setStyle({fontSize: '30px', color: 'red'});
label1.className = 'tf1_test';
label1.text = "但是，我们只保护我们的代码不受在其之后执行的代码的干扰，并不能防御先于我们代码执行的代码。";
app.addElement(label1);

var input1 = new Input();
input1.setStyle({fontSize: '30px', color: '#56a'});
input1.text = "但是，我们只保护我们的代码不受在其之后执行的代码的干扰，并不能防御先于我们代码执行的代码。";
app.addElement(input1);

var video1 = new Video();
video1.addDOMListener('sourceChanged', function (event) {
  console.log('video1', event.target.source);
});
video1.source = 'http://www.w3school.com.cn/i/movie.ogg';
video1.controls = false;
video1.autoplay = false;
video1.loop = true;
video1.width = 600;

app.addElement(video1);


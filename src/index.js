/**
 * Created by vincent on 17/3/11.
 */
import TestMain from "./TestMain";
import {Stage, Image, Text, Video} from "lomo";

let test1 = new TestMain();
// test1.container.addChild(test2);
// var img2 = new Image();
// img2.src =

test1.container.addChild(<img
  className="image123vvvvv"
  src="https://4.bp.blogspot.com/-QxIjKSiGWZU/Vi2iKa-D15I/AAAAAAAGqoo/D-0_NT3zkGo/s1600/%25E6%259D%25BE%25E6%259C%25AC%2B%25E6%25BD%25AE%25E9%2587%258C%2528Shiori%2BMatsumoto%2529-www.kaifineart.com-12.jpg"
/>);
test1.container.setClassName('test1 container');



test1.startup(document.body);


let stage = new Stage();
stage.addChild(<img class="image123" src="https://4.bp.blogspot.com/-QxIjKSiGWZU/Vi2iKa-D15I/AAAAAAAGqoo/D-0_NT3zkGo/s1600/%25E6%259D%25BE%25E6%259C%25AC%2B%25E6%25BD%25AE%25E9%2587%258C%2528Shiori%2BMatsumoto%2529-www.kaifineart.com-12.jpg"/>);

var label = new Text();
label.setStyle({fontSize: '30px', color: 'red'});
label.setClassName('tf1_test');
label.text = "但是，我们只保护我们的代码不受在其之后执行的代码的干扰，并不能防御先于我们代码执行的代码。";
stage.addChild(label);
stage.addChild(<Text text="但是，我们只保护我们的代码不受在其之后执行的代码的干扰，并不能防御先于我们代码执行的代码。" style={{fontSize: '30px', color: 'red'}} className="tf1_test"/>);
stage.startup(document.body);

var video = new Video();
video.setClassName('v2');
video.src = 'http://www.w3school.com.cn/i/movie.ogg';
video.controls = true;
video.autoplay = false;
video.width = 600;
stage.addChild(video);

// var video = new Video();
// video.src = 'http://www.w3school.com.cn/i/movie.ogg';
// video.controls = true;
// video.autoplay = true;
// video.width = 600;
stage.addChild(<video className="v2" src='http://www.w3school.com.cn/i/movie.ogg' controls autoplay={true} width={600}/>);
stage.addChild(<aaa data-id="aaa" bcd="gg">'wetetwt'{123+'aa'}parent<text style={{color: 'red'}}>children1<text style={{color: 'red'}}>children2</text></text>{}</aaa>);

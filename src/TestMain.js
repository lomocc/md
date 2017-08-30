/**
 * Created by vincent on 17/3/11.
 */
import {Stage, Node, Image, Video, Text, Button, Sprite, Input} from "lomo";
import {TweenLite, Power2, TweenPlugin} from "gsap";
import TextPlugin from "gsap/TextPlugin";
import TestSVG from "./TestSVG";
import TestSVGLine from "./TestSVGLine";
import TestSVGLogo from './TestSVGLogo';

// TweenPlugin.activate([TextPlugin]);
export default class TestMain extends Stage {
  // render(){
  //     return (
  //         <div>
  //             <h1>Title</h1>
  //             <div>{this.childrenGroup}</div>
  //         </div>
  //     );
  // }
  // renderChildren(){
  //     return <div {...this.props}/>;
  // }
  onCreate() {
    var ui2 = new Node();
    this.addChild(ui2);

    let ui2IsDisplayNode = ui2 instanceof Node;
    let ui2IsDisplayButton = ui2 instanceof Button;
    console.log('ui2IsDisplayNode', ui2IsDisplayNode, ui2IsDisplayButton)

    var img1 = new Image();
    img1.src = 'https://3.bp.blogspot.com/-f7KZFUN5NNE/Vi2iJ1wBmtI/AAAAAAAGqow/tdtOUNLIyTc/s1600/%25E6%259D%25BE%25E6%259C%25AC%2B%25E6%25BD%25AE%25E9%2587%258C%2528Shiori%2BMatsumoto%2529-www.kaifineart.com-11.jpg';
    ui2.addChild(img1);

    var input = new Input();
    input.text = 'input test';
    ui2.addChild(input);

    var tf1 = new Text();
    ui2.addChild(tf1);

    // tf1.setStyle('fontSize', '30px');
    // tf1.setStyle('color', 'red');
    tf1.setStyle({fontSize: '30px', color: 'red'});
    tf1.setClassName('tf1_test');
    tf1.text = "这两个 WeakMap 都分别指向各自的私有数据。由于 WeakMap 的设计目的在于键名是对象的弱引用，其所对应的对象可能会被自动回收，只要不暴露 WeakMap ，私有数据就是安全的。如果想要更加保险一点，可以将WeakMap.prototype.get 和 WeakMap.prototype.set 存储起来再调用（动态地代替方法）。这样即使有恶意代码篡改了可以窥探到私有数据的方法，我们的代码也不会受到影响。但是，我们只保护我们的代码不受在其之后执行的代码的干扰，并不能防御先于我们代码执行的代码。";

    var img2 = new Image();
    img2.src = 'https://4.bp.blogspot.com/-QxIjKSiGWZU/Vi2iKa-D15I/AAAAAAAGqoo/D-0_NT3zkGo/s1600/%25E6%259D%25BE%25E6%259C%25AC%2B%25E6%25BD%25AE%25E9%2587%258C%2528Shiori%2BMatsumoto%2529-www.kaifineart.com-12.jpg';
    ui2.addChild(img2);

    let svgLogo = new TestSVGLogo();
    this.addChildAt(svgLogo, 0);

    var container = new Node();
    this.addChild(container);
    this.container = container;

    let svg = new TestSVG();
    this.addChild(svg);
    let svg2 = new TestSVGLine();
    this.addChild(svg2);

    var btn = new Button();
    btn.label = '测试按钮';
    this.addChildAt(btn, 0);

    var video = new Video();
    video.src = 'http://www.w3school.com.cn/i/movie.ogg';
    video.controls = true;
    video.autoplay = true;
    video.width = 600;
    this.addChild(video);

    var s = new Sprite({width: 400, height: 388});
    // s.setSize(500, 500);
    s.setLineWidth(0.25);
    s.strokeGrid(0, 0, s.width, s.height, 20);
    s.setShadow("rgba(0,0,0,0.5", 10, 10, 20);
    this.on("click", function (event) {
      var x = event.clientX + Math.random() * 100 - 50,
        y = event.clientY + Math.random() * 100 - 50,
        w = Math.random() * 40 + 60,
        h = Math.random() * 40 + 60,
        r = Math.random() * Math.PI / 3 - Math.PI / 6;
      var g = Math.random() * 220,
        b = g + Math.random() * 40 - 20;
      s.clear();
      s.moveTo(0,0);
      s.lineTo(200,200);
      s.stroke();
      var sides = Math.random() * 20 >> 0;
      // s.setFill(255, g, b);
      // s.fillRoundRect(x, y, w, h, 5);
      // s.fill();
      // s.fillPolygon(70, 70, 50, sides);
    });
    this.addChild(s);

    btn.on('click', (event)=> {
      // ui2.removeChildAt(-1);
      TweenLite.to(ui2.element, 0.5, {
        backgroundColor: "#" + Math.random().toString(16).substr(2, 6),
        width: 500 * Math.random() + 100,
        ease: Power2.easeInOut
      });
      TweenLite.to(tf1.element, 1, {text: "This is the new text"});
      input.text = 'input test' + Math.random();
    });

  }
}

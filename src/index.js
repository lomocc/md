/**
 * Created by vincent on 17/3/11.
 */
import TestMain from "./TestMain";
import {Stage, Image} from "lomo";

let test1 = new TestMain().startup(root);
let test2 = new TestMain().startup(e222);
test1.container.addChild(test2);
// var img2 = new Image();
// img2.src =

test1.container.addChild(<img class="image123" src="https://4.bp.blogspot.com/-QxIjKSiGWZU/Vi2iKa-D15I/AAAAAAAGqoo/D-0_NT3zkGo/s1600/%25E6%259D%25BE%25E6%259C%25AC%2B%25E6%25BD%25AE%25E9%2587%258C%2528Shiori%2BMatsumoto%2529-www.kaifineart.com-12.jpg"/>);
test1.container.setClassName('test1 container');

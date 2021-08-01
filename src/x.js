export default 'xxx'
import "./style.css"
import Icon from './icon.png';

var a = 'asd'
console.log(a)
console.log(Icon)

const div1 = document.querySelector('#ad')
console.log('hi')
console.log(div1)
// 将图像添加到我们已经存在的 div 中。
const myIcon = new Image();
myIcon.src = Icon;
div1.appendChild(myIcon);
const button = document.createElement('button')
button.innerText = '懒加载'
div1.appendChild(button)
button.onclick = () => {
  const promise = import('./lazy') //懒加载,点击button按钮之后就会请求lazy.js,使用的时候用括号包起来
  promise.then((module) => {
    const fn = module.default
    fn()
  }, () => {})
}
import _ from 'lodash'
// import './style/index.css'
// import './style/index.css'
function createDom() {
  let dom = document.createElement('div')
  dom.innerHTML = _.join(['fengqi', 'xiaoming', '哈哈'], '')
  dom.className = "box"
  return dom
}
let divDom = createDom()
document.body.appendChild(divDom)
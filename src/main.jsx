import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
function Abc(ten){
  return(
    <>
      <h1 class={ten.color}>Hello World</h1>
      <p>coder react</p>
    </>
  )
}
function Sth(value){
  const {tuoi,truong}=value;
  return(
    <>
      <p>Toi la chilling, toi tam {tuoi} tuoi va dang hoc tai {truong}, mong mn giup do</p>
    </>
  )
}
// React Props Children
function Pros_children1(props){
  return(
    <>
      <div style={{background:"blue"}}>
        <h2>Đây là con thứ 1</h2>
        {props.children}
      </div>
    </>
  )
}
function Pros_children2(abc){
  return(
    <>
      <div style={{background:"green"}}>
        <h2>Đây là con thứ 2</h2>
        {abc.children}
      </div>
    </>
  )
}
function Pros_parent(){
  return(
    <>
      <h1> Đây là phần Pró.children tôi đang học</h1>
      <p>Nó cho phép viết chèn tên 1 fuction khác như 1 thẻ</p>
      <Pros_children1>
        <p>Có thể viết thêm nội dung vào, mac dinh la children</p>
      </Pros_children1>
      <Pros_children2>
        <p>Còn nếu đặt tên thì dung tên đó</p>
      </Pros_children2>
    </>
  )
}
// React Events
function Event_1(){
  const Bingo=(x)=>alert(x);
  return(
    <>
      <button onClick={()=>Bingo("12345")}>Click</button>
    </>
  )
}
function Event_2(){
  const Bingo=(a,b)=>{
    alert(a);
    alert(b.type);
  }
  return(
    <>
      <button onClick={(event)=>Bingo("12345",event)}>Click</button>
    </>
  )
}
createRoot(document.getElementById('root')).render(
  <Event_2 />
)

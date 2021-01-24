import React from "react"
import { useSelector, useDispatch } from "react-redux"
import { increment, decrement } from "./actions/action"

function App() {
  const counter = useSelector((state) => state.counter)
  const isLogged = useSelector((state) => state.isLogged)
  const dispatch = useDispatch()

  return (
    <div className="App">
      <h1>count : {counter}</h1>
      <button onClick={() => dispatch(increment(10))}>+</button>
      <button onClick={() => dispatch(decrement())}>-</button>
      {isLogged ? <h3>로그인되어야 볼수 있는 화면입니다</h3> : ""}
    </div>
  )
}

export default App

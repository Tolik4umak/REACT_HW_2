import React from 'react'
import s from './product.module.css'

export default function Products(props) {
  return (
    <div className={s.card}>
        <div>
          <p>Товар: {props.title}</p>
          <p>Цена: {props.price}</p>
        </div>
        <div className={s.buttons}>
          <button onClick={()=>props.changeCount(props.id,-1)} disabled={props.count === 0 ? 'disabled':'' } >Убрать из корзины</button>
          <button onClick={()=>props.changeCount(props.id,1)}>Добавить в корзину</button>
        </div>
        {props.count>0?<span className={s.to_basket}> {props.count} </span>:''}

    </div>
  )
}

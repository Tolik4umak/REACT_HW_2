import React from 'react'
import s from './basket_st.module.css'

export default function Basket({basketArr, changeCount}) {

  
  return (
    <div className={s.container}>
     <h2>Корзина</h2>
    <div className={s.basket}>
        {basketArr.map((product) => {
    
          if(product.count !== 0){
              return  <p key={product.id} className={s.basket_item}>
                        {product.title}( <span>{product.count}</span> шт ) - <span>{product.count*product.price} $</span>
                        <span  className={s.button} >
                          <button onClick={()=>changeCount(product.id,-1)}>-</button>
                          <button onClick={()=>changeCount(product.id,+1)}>+</button>
                        </span>
                      </p>
          }})
        }
    </div>
     <p className={s.count}>
        Общее кол-во товаров в корзине: <span className={s.num}>{basketArr.reduce((acum,val)=> acum+val.count,0)}</span>
      </p>
      <p className={s.price}>
        Цена заказа: <span  className={s.num}>{Math.round(basketArr.reduce((acum,val)=> acum+(val.price*val.count),0)*100)/100}</span>
      </p>
    </div>
  )
}

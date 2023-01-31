import { useState, useEffect } from "react";
import Basket from "../Basket/Basket";
import Products from "../Products/Products";
import s from "./app_st.module.css"


function App() {

  useEffect(()=>{
    fetch('https://fakestoreapi.com/products')
    .then(resp => resp.json())
    .then((data) => {
      const newArr = data.map(({id, title, price}) => ({id, title, price,count: 0}))
    
      setProducts(newArr.slice(0,10))
    })
  },[])

  const [products, setProducts] = useState([])

  const changeCount = (id,num) => {
      const target =  products.find(prod=> prod.id===id)

      if(target.count + num < 0){
        target.count = 0
      } else{
        target.count += num
        setProducts([...products])
      }
      
  }

  return (
    <div className={s.wrapper}>
      <div className={s.products}>
        {products.map(prod=> <Products key={prod.id} {...prod} changeCount={changeCount} />)}
      </div>


      <Basket basketArr={products} changeCount={changeCount}/>
   
    </div>
    
  );
}

export default App;

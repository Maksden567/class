import './style.css'
import { users } from './Admin'
import User from './User'
import { products } from './Admin'


class Cart{

   static products=[]
   #price=0
 

  suma(){
    let totalPrice = 0;
    for (const product of Cart.products) {
      totalPrice += product.price;
    }

    return totalPrice;
  }


  getPrice(){
    return this.suma()
  }



   

}

export default Cart
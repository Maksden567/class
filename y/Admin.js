import './style.css'

import { orders } from './main'
import User from './User'

export let products = [];
export let users = [];

class Admin extends User {

   
  constructor(id,name,surname,email,password){
     super(id,name,surname,email,password)
     this.isAdmin=true
  }

  addProduct(product){
    if(this.isAuth){
        products.push(product)
        return products
    }
    else{
        return "Війдіть в систему"
    }
    
  }

  getOrders(){
    return orders
  }

  deleteProduct(id){
    if(this.isAuth){
        products = products.filter(product=>product.id!=id)
        return true
    }
    else{
        return "Війдіть в систему"
    }
  }


  editProduct(id,product1){
    if(this.isAuth){
       const product = products.find(item=>item.id==id)
       if(product){
        products[products.indexOf(product)] = product1
       }
      

  }
   else{
        return "Війдіть в систему"
    }
}



    deleteUser(id){
        if(this.isAuth){
            users =  users.filter(user=>user.id!=id)
       }
        else{
             return "Війдіть в систему"
         }
     
    }

    editUserData(id,user1,obj2){
       
        if(this.isAuth){
           const user = users.find(item=>item.id==id)
           
           if(user){
            
            users[users.indexOf(user)] = user1
            obj2=user1
           }
          
    
      }
       else{
            return "Війдіть в систему"
        }
    }
    

}

export default Admin
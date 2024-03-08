import './style.css'

import {orders } from './main'
import { users } from './Admin'
import Cart from './Cart'
import { products } from './Admin'
export let comments = []

class User {

  id
  name
  surname
  #email
  #password
  isAdmin
  isAuth=false
  favourites=[]

  constructor(id,name,surname,email,password){
      this.id = id
      this.name= name
      this.surname= surname
      this.#email= email
      this.isAdmin=false
      this.#password= password
    
  }

  register(){
    users.push(this)
    return true
  }

 static auth(email,password){
    
   const user =  users.find(item=>item.#email==email)
   
  if(user){
    if(user.#password==password){
   
        user.isAuth=true
        
        return true
      
    }
    else{
        this.isAuth=false
      return false
     
    }
  }
    else{
        this.isAuth=false
    return false
  }
  }





  getProducts(){
    if(this.isAuth){
        return products
    }
    else{
        return "Війдіть в систему"
    }
  }

  searchProduct(title){
    if(this.isAuth){
        return products.filter(item=>item.title==title)
    }
    else{
        return "Війдіть в систему"
    }
    

  }

  getOneProduct(id){
    if(this.isAuth){
        return products.find(item=>item.id==id)
    }
    else{
        return "Війдіть в систему"
    }
   
  }

  getuserId(){
    if(this.isAuth){
        return this.id
    }
    else{
        return "Війдіть в систему"
    }
 
  }

  addToCard(product){
    if(this.isAuth){
        Cart.products.push(product)
        return true
    }
    else{
        return "Війдіть в систему"
    }

  }

  getcartItems(){
   
    if(this.isAuth){
       return Cart.products
    }
    else{
        return "Війдіть в систему"
    }
  }

  deleteFromCart(id){
    if(this.isAuth){
        Cart.products = Cart.products.filter(el=>el.id!=id)
        return true
     }
     else{
         return "Війдіть в систему"
     }
  }

  addToFavourite(product){
    if(this.isAuth){
        this.favourites.push(product)
    return true
    }
    else{
        return "Війдіть в систему"
    }
   
  }

  deletefromFavourite(id){
    if(this.isAuth){
        this.favourites= this.favourites.filter(el=>el.id!=id)
        return true
 
    }
    else{
        return "Війдіть в систему"
    }
 
  }

  getFavourite(){
    if(this.isAuth){
        return this.favourites
    
 
    }
    else{
        return "Війдіть в систему"
    }
  }

  getComments(productId){

   const comentsItems =  comments.filter(item=>item.productId==productId)
    return comentsItems

  }



  addComment(comment){
    if(this.isAuth){
    comments.push(comment)
    return true
    }
    else{
        return "Війдіть в систему"
    }

  }

  editComment(id,title){
    if(this.isAuth){
      comments =  comments.map((item)=>{
        if(item.id==id){
            item.text=title
            return item
        }
        else{
            return item
        }
       })
        return true
        }
    else{
        return "Війдіть в систему"
    }
  }

  deleteComment(id){
    if(this.isAuth){
        let comm = comments.filter(comment=>comment.id!=id)
        comments = comm
       
        return true
    }
    else{
        return "Війдіть в систему"
    }
  }

  paymentOrders(products){
    if(this.isAuth){
    Cart.products=[]
    orders.push(products)
    return true

    }
    else{
        return "Війдіть в систему"
    }

  }

  filterProducts(categories,products){
    const filterProducts =[]
   products.map(product=>categories.includes(product.category)?filterProducts.push(product):null)
    return filterProducts  
  }

  filterProductsByPrice(from,to,products){
    let filterProducts =[]
    filterProducts= products.filter(item=>item.price>from&&item.price<to)
    return filterProducts  
  }

}

export default User
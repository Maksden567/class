import './style.css'

import { users } from './Admin'
import User from './User'



class Product {

   
  constructor(id,title,price,imgUrl,article,count,category,characteristics,descr){
     this.id=id
     this.title=title
     this.price=price
     this.imgUrl=imgUrl
     this.article=article
     this.count=count
     this.category=category
     this.characteristics=characteristics
     this.descr=descr
  }

 
  addCount(){
    this.count=this.count+1
  }


  divisionCount(){
    this.count=this.count-1
    if(this.count<0){
        this.count=0
    }
  }



   

}

export default Product
import Admin, { users } from './Admin';
import Cart from './Cart';
import Product from './Product';
import './style.css'
import User from './User';
import Comment from './Comment';
import { comments } from './User';
import { products } from './Admin';

export const orders = [];





const obj = new Admin(1,"Maks",'Makohon',"denmaks432@gmail.com","Maksden432198")
obj.register()
console.log("Register user: " + obj.name+' '+obj.surname)

let obj2= new User(2,"Dasha",'Kochenko',"denmaks4632@gmail.com","Maksden432198")
obj2.register()
console.log("Register user: " + obj2.name+' '+obj2.surname)



const product= new Product(1,"Апельсин",120,"askc","1351",'1',"Фрукти",["Смачний","Свіжий","Африканський"],"Наймачніші продукти тільки в нас")
const product2= new Product(2,"Груша",80,"askфісфісc","1765",'1',"Фрукти",["Смачний","Свіжий","Український"],"Наймачніші продукти тільки в нас")
const product4= new Product(3,"Груша",70,"askфісфісc","1765",'1',"Фрукти",["Смачний","Свіжий","Американська"],"Наймачніші продукти тільки в нас")
const product3= new Product(4,"Картопля",20,"askфісфісc","1755",'1',"Овочі",["Смачний","Свіжий","Селянська"],"Тільки що з городу")



console.log("Вхід в систему")
let isSucces = User.auth("denmaks432@gmail.com","Maksden432198")
if(isSucces){
  console.log("Ви успішно авторизовані")
}


console.log("Додавання продуктів")



obj.addProduct(product)
obj.addProduct(product2)
obj.addProduct(product3)
obj.addProduct(product4)

console.log(products)

obj.editUserData(2,new User(2,"Den",'Kochenko',"denmaks4632@gmail.com","123"),obj2)

console.log("Змінюємо користувача")
console.log(users)

obj.editProduct(1,new Product(1,"Вишня",120,"askc","1351",'1',"Фрукти",["Смачний","Свіжий","Африканський"],"Наймачніші продукти тільки в нас"))
console.log("Змінюємо продукт ")
console.log(products)


console.log("НОВИЙ ВХІД")
isSucces=User.auth("denmaks4632@gmail.com","123")

if(isSucces){
  console.log("Ви успішно авторизовані")
}


const cart = new Cart()

console.log("Додаємо до корзини: " + product.title + ", " + product2.title)
obj2=users.find(item=>item.id==obj2.id)
obj2.addToCard(product)
obj2.addToCard(product2)
console.log("Товари корзини")

console.log(obj2.getcartItems())
console.log("Ціна корзини")
console.log(cart.getPrice())

console.log("Видаляємо з корзини id=1" )
obj2.deleteFromCart(1)

console.log("Товари корзини")
console.log(obj2.getcartItems())
console.log("Ціна корзини")
console.log(cart.getPrice())

console.log("Зробити замовлення")
obj2.paymentOrders(Cart.products)
console.log("отримуємо всі замовлення")
console.log(obj.getOrders())


console.log("Додаємо до улюблених: " + product2.title + ", " + product3.title)
obj2.addToFavourite(product2)
obj2.addToFavourite(product3)

console.log("Товари улюблених")
console.log(obj2.getFavourite())

console.log("Видаляємо з улюблених id=4" )
obj2.deletefromFavourite(4)

console.log("Товари улюблених")
console.log(obj2.getFavourite())

console.log("Здійснюємо фільтрацію та виводимо товари")
console.log(obj2.filterProducts(['Фрукти','Овочі'],products))
console.log(obj2.filterProductsByPrice(0,120,products))




console.log("Додаємо коментарі")
obj2.addComment(new Comment(1,"asccasca",obj2.getuserId(),4,3))
obj2.addComment(new Comment(2,"sacascas",obj2.getuserId(),4,2))
console.log("Коментарі до продукту з id=2")
console.log(obj2.getComments(2))

console.log("Змінюємо title до продукту з id=2")
obj2.editComment(2,"kdkv")
console.log("Коментарі до продукту з id=2")
console.log(obj2.getComments(2))


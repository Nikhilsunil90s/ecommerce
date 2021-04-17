const productsArray = [];

const Product = class {
    constructor(title,price){
        this.id = (parseInt(Math.random() * 10000)).toString(); 
        this.productName = title;
        this.productPrice = price;
    }
    save(){
        return productsArray.push(this);
    }
    static fetchById(id){
        // console.log(id);
        return productsArray.filter((product) => {
              return product.id === id;
        });   
    }

    static fetchAllProducts(){
        return productsArray;
    }
}

module.exports = Product;
class shoppingCart {

    title = 'Products List';

    products: any[] = [
        {
            'name': 'shirts',
            'quantity': 400,
            'type': 'Addidas'
        },
        {
            'name': 'shoes',
            'quantity': 200,
            'type': 'polo'
        }
    ];

    constructor() {
        this.addNewProduct('stockings', 50, 'calvin');
    }
    addNewProduct(name: string, quantity: number, type: string) {
        console.log(" A product added");
    }
}

class client extends shoppingCart {
    constructor(name: string, quantity: number, type: string) {
        super();
    }
    public purchaseItem() {
        console.log('I have selected an item')
    }
}
class save extends shoppingCart {
    constructor(name: string, quantity: number, type: string) {
        super();
    }
    public save() {
        console.log('Item has een saved in the database')
    }
}
let user1 = new client('shirts', 400, 'Addidas');
console.log(user1);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var shoppingCart = /** @class */ (function () {
    function shoppingCart() {
        this.title = 'Products List';
        this.products = [
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
        this.addNewProduct('stockings', 50, 'calvin');
    }
    shoppingCart.prototype.addNewProduct = function (name, quantity, type) {
        console.log(" A product added");
    };
    return shoppingCart;
}());
var client = /** @class */ (function (_super) {
    __extends(client, _super);
    function client(name, quantity, type) {
        return _super.call(this) || this;
    }
    client.prototype.purchaseItem = function () {
        console.log('I have selected an item');
    };
    return client;
}(shoppingCart));
var save = /** @class */ (function (_super) {
    __extends(save, _super);
    function save(name, quantity, type) {
        return _super.call(this) || this;
    }
    save.prototype.save = function () {
        console.log('Item has een saved in the database');
    };
    return save;
}(shoppingCart));
var user1 = new client('shirts', 400, 'Addidas');
console.log(user1);

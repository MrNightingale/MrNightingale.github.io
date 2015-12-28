$(function () {
    function Cart () {
        var __self = this;

        this.lsFieldId = 'cart';

        this.domElems = {
            cart: $('.cart'),
            itemTmpl: $('.cart__item_tmpl'),
            totalPrice: $('.cart .totals .price'),
            orderButton: $('.cart__make-order')
        };

        $('.bigcart').click(function (e) {
            var item = {
                id: 'a-1',
                name: 'Клюшка для гольфа',
                price: '150',
                qty: '1'
            };

            __self.addToCart(item);
        });

    }

    Cart.prototype.init = function () {
        console.log('init');

        window.ls.initField(this.lsFieldId);

        this.viewCart();
    };

    Cart.prototype.updateStorage = function () {
        window.ls.updateField(this.lsFieldId, this.cartArray);
    };

    Cart.prototype.getCartItems = function () {
        this.cartArray = window.ls.getFieldData(this.lsFieldId);
        $('.orders-quantity').text(this.cartArray.length);

        return this.cartArray;
    };

    Cart.prototype.getCartSize = function () {
        console.log(this.getCartItems.length);

        return this.getCartItems().length;
    };

    Cart.prototype.getTotalPrice = function () {
        var items = this.getCartItems(),
            totalPrice = 0;

        items.forEach(function (item) {
            totalPrice += item.price * item.qty;
        });

        return totalPrice;
    };

    Cart.prototype.getTotalQty = function() {

        var items = this.getCartItems(),
            totalQty = 0;

        items.forEach(function(item) {
            totalQty += +item.qty;
        });

        return totalQty;
    };

    Cart.prototype.viewCart = function () {
        // TODO: make viewCartSize
        this.getCartSize();

        this.viewTotalPrice();

        this.viewCartList();

        this.makeOrder();

        this.cleanCart();
    };

    Cart.prototype.makeOrder = function() {

        $('.cart__make-order').on('click', showOrder);

        var __self = this;

        function showOrder() {
            alert(("Вы заказали " + __self.getTotalQty() + " товаров на сумму: $" + __self.getTotalPrice()));
        }
    };

    Cart.prototype.cleanCart = function() {

        $('.cart__make-order').on('click', cleanOrder);

        var __self = this;

        function cleanOrder() {

            $('.cart .cart__item').remove();

            $('.cart .totals .price').html('');

        }
    };

    Cart.prototype.viewCartList = function () {
        var __self = this,
            items = this.getCartItems(),
            listHtml = [];

        items.forEach(function (item) {
            listHtml.push(__self.viewCartItem(item));
        });

        this.clearViewCart();

        $('.cart .totals').before(listHtml);
    };

    Cart.prototype.clearViewCart = function() {
        $('.cart__item').remove();
    };


    Cart.prototype.viewCartItem = function (item) {
        var tmpl = this.domElems.itemTmpl.clone().removeClass('cart__item_tmpl'),
            itemPrice = item.qty * item.price;

        tmpl.find('.quantity').text(item.qty);
        tmpl.find('.itemName').text(item.name);
        tmpl.find('.price').text('$' + itemPrice);

        return tmpl;
    };

    Cart.prototype.addToCart = function (item) {

//        for (var i = 0; i < this.cartArray.length; i++) {
//            if (item.name === this.cartArray[i].name) {
//                this.cartArray[i].qty = +this.cartArray[i].qty + 1;
//                this.cartArray[i].price += item.price;
//                this.updateStorage();
//                this.viewCart();
//            }
//        }

        this.cartArray.push(item);

        this.updateStorage();

        this.viewCart();
    };

    Cart.prototype.viewTotalPrice = function () {
        this.domElems.totalPrice.text('$' + this.getTotalPrice());
    };

    window.cart = new Cart();

    cart.init();

});



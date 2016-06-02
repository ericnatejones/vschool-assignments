var app = angular.module("cartoonApp");

app.service("CartoonService", function () {
    
    this.cartoons = [];
    
    this.addCartoon = function (cartoon) {
        
        this.cartoons.push(cartoon);
    }
    
    this.deleteCartoon = function (index) {
        this.cartoons.splice(index, 1);
    }
})
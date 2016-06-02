var app = angular.module("mightyClicker");



app.service("redService", function () {

    this.clickCount = 100;

    this.upTick = function () {
        this.clickCount = this.clickCount + 1;
    }

    this.downTick = function () {

        this.clickCount = this.clickCount - 1;

        if (this.clickCount < 1) {
            this.clickCount = 100;
        }
    }
});

app.service("blueService", function () {

    this.clickCount = 100;

    this.upTick = function () {
        this.clickCount = this.clickCount + 1;
    }

    this.downTick = function () {

        this.clickCount = this.clickCount - 1;

        if (this.clickCount < 1) {
            this.clickCount = 100;
        }
    }
});
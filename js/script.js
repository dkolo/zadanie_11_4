function Phone(brand, price, color) {
	this.brand = brand;
	this.price = price;
	this.color = color;
}
Phone.prototype.printInfo = function() {
		console.log("The phone brand is " + this.brand + ", color is " + this.color + " and the price is " + this.price + ".");
}
var iPhone6s = new Phone("Apple", 2250, "silver"),
	samsungGalaxyS6 = new Phone("Samsung", 1199, "black"),
	onePlusOne = new Phone("OnePlus", 1299, "black");


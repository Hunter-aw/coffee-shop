var coffeeShop = {
  beans: 40,

  drinkRequirements: {
    latte: 10,
    americano: 5,
    doubleShot: 15,
    frenchPress: 12
  },

  makeDrink: function (drinkType) {
    if (!this.drinkRequirements[drinkType]) {
      alert(`Excuse me? We don't make ${drinkType} you fool`)
      return;
    } else if (this.beans - this.drinkRequirements[drinkType] > 0) {
      this.beans -= this.drinkRequirements[drinkType]
      alert(`Aw yis, one ${drinkType} comin right up`)
      return;
    } else {
      alert("Sorry we're an incompetent coffee shop and we're all out of beans!")
      return;
    }
  }
}

coffeeShop.makeDrink("latte");
coffeeShop.makeDrink("americano");
coffeeShop.makeDrink("filtered");
coffeeShop.makeDrink("doubleShot");
coffeeShop.makeDrink("frenchPress");
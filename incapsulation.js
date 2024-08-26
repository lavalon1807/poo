class BankAccaunt {
    _money = 0;
    
    get money() {
        return this._money;
    }

    set plus(money) {
        this._money += money;
    }

    set minus(money) {
        this._money -= money;
    }
}

const bank = new BankAccaunt();
bank.plus = 103;
bank.plus = 207;
bank.minus = 254;
bank.plus = 251;
console.log(bank.money);
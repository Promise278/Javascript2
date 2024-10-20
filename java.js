let bank = {
    name: "unioinbank",
    branch: "jos",
}
customerdata = [{

    accountholder: "sender",
    accountbalance: 10,
    accountNumber: 9079479267,
    checking_balance: function(){
        console.log(`${this.accountholder} your balance is ${this.accountbalance}`);
    },
    deposit: function(amount){
        this.accountbalance += amount
    },
    transfer: function(amount){
        reciever.accountbalance +=amount;
        this.accountbalance -=amount
    },

    accountholder: "reciever",
    accountbalance: 15,
    accountNumber: 9027635721,
    checking_balance: function(){
        console.log(`${this.accountholder} your balance is ${this.accountbalance}`);
    },
    deposit: function(amount){
        this.accountbalance+= amount
    }
}]

sender.checking_balance()
reciever.checking_balance()
sender.transfer(10)

sender.deposit(5)
sender.checking_balance()

reciever.checking_balance()
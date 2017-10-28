const fs = require("fs");
const inquirer = require("inquirer");
const cust = require("./customerModel.js")
var mysql = require("mysql");

var db = {
    connectedState: false,
    connection: null,
    createConnection: function() {
        this.connection = mysql.createConnection({
            host: "localhost",
            port: 3306,

            // Your username
            user: "root",

            // Your password
            password: "JGCD1868",
            database: "bamazon"
        })
    },

    connect: function() {
        var self = this;
        this.connection.connect(function(err) {
            if (err) throw err;
            console.log("connected as id " + self.connection.threadId);
            self.connectedState = true;
        });
    },

    disconnect: function() {
        this.connectedState = false;
        this.connection.end();
    },

    display: function() {
        db.connection.query("SELECT * FROM `bamazon_store`", function(err, res) {
            if (err) throw err;
            console.log(res);
            startUser();
        });
    },
    getId: function(item_id) {},
    getAmount: function() {}
};

db.createConnection();
db.connect();
db.display()

var startUser = function() {
    inquirer.prompt([{
        name: "item_id",
        message: "Please choose the ID of the product you with to purchase."
    }]).then(function(answers) {
        // db.display()	

        db.connection.query("SELECT * FROM `bamazon_store`", function(err, res) {
            if (answers.item_id < res.length) {
                console.log('---------------');
                console.log("You have selected: " + res[answers.item_id].product_name);
            } else {
                console.log("Please select an item 1 through 10");
                setTimeout(function(){ db.display();}
                
            }
            console.log("Is this correct?");
            console.log('---------------');
            inquirer.prompt([{
                name: "confirm",
                type: "list",
                message: "Is this correct?",
                choices: ["Yes", "No"]
            }]).then(function(answers) {
                if (answers.confirm == "Yes") {
                    console.log("yes");

                } else {
                    console.log("no");
                    db.display();
                }
            })
        })
    })
}

const accountId = 232344
let accountEmail = "ghosharchit30@gmail.com"
var accountPassword = "12345"
accountCity = "kolkata"
let accountState;


//accountId = 3 // not allowed after assign value in const
accountEmail = "abcd@g.com"
accountPassword = "33333"
accountCity = "bengaluru"


console.log(accountId);
/*
prefer not to use var
because of issue in block spoce and functional scope 
*/

console.table([accountId, accountEmail, accountPassword, accountCity, accountState])

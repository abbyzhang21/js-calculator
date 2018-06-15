/**
 * Declare a function named `calculatorModule`
 * this function will have two private variables declared inside of it.
 * @variable PRIVATE { Number } `memory`
 * @variable PRIVATE { Number } `total`
 * @return {object} `calculator` object that can be used
 */

function calculatorModule(x, total){
    var x = 0;
    var total = 0;
    //number passed in
    var load = function(x){
        if(typeof x !== 'number'){
            throw err;
        }else{
            total = x;
            return total;
        }
    };
    //Return the value of `total`
    var getTotal = function(){
        return total;

    };
    //Sums the value passed in with `total`
    var add = function(x){
        if(typeof x !== 'number'){
            throw err;
        }else{
            total += x;
            return total;
        }
    };
    //Subtracts the value passed in from `total`
    var subtract = function(x){
        if(typeof x !== 'number'){
            throw err;
        }else{
            total -= x;
            return total;
        }
    };
    //Multiplies the value by `total`
    var multiply = function(x){
        if(typeof x !== 'number'){
            throw err;
        }else{
            total *= x;
            return total;
        }
    };
    //Divides the value passing in by `total`
    var divide = function(x){
        if(typeof x !== 'number'){
            throw err;
        }else{
            total /= x;
            return total;
        }
    };
    //Return the value stored at `memory`
    var recallMemory = function(){
        if(typeof x !== 'number'){
            throw err;
        }else{
            return x;
        }
    };
    //Stores the value of `total` to `memory`
    var saveMemory = function(){
        if(typeof x !== 'number'){
            throw err;
        }else{
            x = total;
            return x;
        }
    };
    //Clear the value stored at `memory`
    var clearMemory = function(){
        if(typeof x !== 'number'){
            throw err;
        }else{
            x = 0;
            return x;
        }
        
    };  
    return {
        load: load,
        getTotal: getTotal,
        add: add,
        subtract: subtract,
        multiply: multiply,
        divide: divide,
        recallMemory: recallMemory,
        saveMemory: saveMemory,
        clearMemory: clearMemory,

    }
}

  /**
   * sets the `total` to the number passed in
   * @param  { Number } x
   * @return { Number }    current total
   */
 



  /**
   * Return the value of `total`
   * @return { Number }
   */


  /**
   * Sums the value passed in with `total`
   * @param { Number } x
   */


  /**
   * Subtracts the value passed in from `total`
   * @param  { Number } x
   */


  /**
   * Multiplies the value by `total`
   * @param  { Number } x
   */


  /**
   * Divides the value passing in by `total`
   * @param  { Number } x
   */


  /**
   * Return the value stored at `memory`
   * @return { Number }
   */


  /**
   * Stores the value of `total` to `memory`
   */


  /**
   * Clear the value stored at `memory`
   */

  /**
   * Validation
   */


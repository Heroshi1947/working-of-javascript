{    let my_let_variable = 10;
      console.log("The value of my_let_variable before it is assigned a value is:", my_let_variable); // undefined
  
    my_let_variable = 20;
      console.log("The value of my_let_variable after it is assigned a value is:", my_let_variable); // 20
  
    var my_var_variable = 30;
      console.log("The value of my_var_variable before it is assigned a value is:", my_var_variable); // undefined
  
    my_var_variable = 40;
      console.log("The value of my_var_variable after it is assigned a value is:", my_var_variable); // 40
  
    const my_const_variable = 50;
      console.log("The value of my_const_variable before it is assigned a value is:", my_const_variable); // 50
  // const variable cant hold two values 
      console.log("The value of my_const_variable after it is declared is:", my_const_variable); // 50
  }
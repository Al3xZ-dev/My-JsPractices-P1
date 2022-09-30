 //⚡⚡EX:__Ask for age and if he is over 18 tell him he can drive!!⚡⚡

 /*
     //Ask for the age by input
          let age = prompt("Tell me your age")
       
          // Check that what you entered is a number
          if (Number(age) == age) {
            
              //if greater return the following
              if (age >= 18) {
                  alert("Hello congratulations you can drive")

               // Otherwise If you have -18 return the following
              } else if (age < 18) {
                  alert("hey you can't drive, you have to be +18")
              }
          }

          /*
          // Otherwise it is valid to return the following
          else {
              //Show the next message
              alert("Enter a valid number")
          } */

 //⚡⚡EX:__Request a grade (number) and show the grade according to the grade_⚡⚡
 /* According to your note return the following:
   🔹0-3: Very poor
   🔹3-5: Insufficient
   🔹5-6: Enough
   🔹6-7: Good
   🔹7-9: Remarkable
   🔹9-10: Outstanding 

 //Loop to allow entering more than 1 consecutively
  do {
      //Request the note by input and save the variable in the note variable
      var note = prompt("Enter your note");
      //IF A NUMBER WAS ENTERED
      if (Number(note) == note) {
          //If the grade is between 0 and 10 check the range and give a message
          if (note > 0 && note <= 10) {
              if (note < 3) {
                  alert("Very poor");
              } else if (note < 5) {
                  alert("Insufficient");
              } else if (note < 6) {
                  alert("Enough");
              } else if (note < 7) {
                  alert("OK");
              } else if (note < 9) {
                  alert("Remarkable");
                  
              } else if (note >= 9) {
                  alert("Outstanding");
              }
          }
          //If the note is not between 0 and 10
          else {
              alert("Wrong note");
          }
      }
      //The loop goes back up as long as cancel has not been pressed
  } while (note != undefined); //Undefined is when Cancel is pressed. */
 // ------------------------------------------------------------------------
/*
  // We declare a variable where we are going to concatenate the strings
  let result = "";
  
  do{
      let string =prompt("Enter a text string below")
      //If the result variable is empty
      if(result == ""){
          // We concatenate without using a script
          result = result + string;
      }

      // Else we concatenate with a hyphen
      else{
          result = result+"-"+string;
      }

      //While accept is pressed on the confirm popup
  }while(confirm("Do you want to continue?"));

  //If cancel was set, we print the result
  document.write(result) 


  //---------------------------------------------------

  //⚡⚡EX__: Make a script that asks for numbers until "cancel" is pressed. If it is not a number, it must be indicated with an “alert” and continue asking. When exiting with “cancel” the total sum of the numbers entered must be indicated.
 /*
        //Declare the sum variable
        let sum = 0
       
        //We make use of the do loop to enter several numbers
        do{
            let number = prompt("tell me a number");
            // We verify that what is entered is a number
            if(Number(number) == number){
                number = Number(number);
                sum = sum + number;
            }
            // Else if what is entered is not a number that returns the following
            else{
                if(number != undefined){
                    alert(number + "Not a number")
                }
            }
        
         //Keep coming back repeating the loop as long as cancel is not pressed
        }while(confirm("Do you want to continue?"));
        // if cancel was set, exit the loop and print the number
        document.write("YOUR SUM IS "+ sum); */
 //-----------------------------------------------

 //⚡⚡ EX__: Make a page with a script that calculates the value of the letter of a DNI number (National Identity Document).

 //The algorithm to calculate the ID letter is as follows:

 //🔹The number must be between 0 and 99999999
 //🔹 We must calculate the remainder of the integer division between the number and the number 23.
 //🔹According to the result, from 0 to 22, one of the following letters will correspond: (T, R, W, A, G, M, Y, F, P, D, X, B, N, J, Z , S, Q, V, H, L, C, K, E)
 //🔹if what is entered is not a number, it must be indicated with an alert and ask again.
 //🔹The process must be repeated until the user presses “cancel”.
 /*
 // We declare the Variables
 let rest = 0;
 let letter = "";

 do {
     let number = prompt("Enter your ID");
     if (Number(number) == number) {
         number = Number(number);

         if (number >= 0 && number <= 99999999) {
             // We calculate the remainder of dividing the number by 23
             remainder = number % 23;
             // Depending on the rest, we assign a value to the letter variable
             switch (rest) {
                 case 0:
                     letter = "T";
                     break;
                 Case 1:
                     letter = "R";
                     break;
                 Case 2:
                     letter = "W";
                     break;
                 Case 3:
                     letter = "A"
                     break;
                 Case 4:
                     letter = "G";
                     break;
                 Case 5:
                     letter = "M";
                     break;
                 Case 6:
                     letter = "Y";
                     break;
                 Case 7:
                     letter = "F";
                     break;
                 Case 8:
                     letter = "P";
                     break;
                 Case 9:
                     letter = "D";
                     break;
                 case 10:
                     letter = "X";
                     break;
                 case 11:
                     letter = "B";
                     break;
                 case 12:
                     letter = "N";
                     break;
                 case 13:
                     letter = "J";
                     break;
                 case 14:
                     letter = "Z";
                     break;
                 case 15:
                     letter = "S";
                     break;
                 case 16:
                     letter = "Q";
                     break;
                 case 17:
                     letter = "V";
                     break;
                 case 18:
                     letter = "H";
                     break;
                 case 19:
                     letter = "L";
                     break;
                 Case 20:
                     letter = "C";
                     break;
                 case 21:
                     letter = "K";
                     break;
                 case 22:
                     letter = "E";
                     break;
                  //If it is not a number between 0 and 22 we show the following
                 default:
                     alert("The input is not a number")
             }
        }
          //We show a message with the DNI and the letter obtained
          alert("Number: " +number+",Letter: "+letter);
      }
      // In case you press accept without putting a number
      else{
          if(number != undefined){
            alert(number + "Not a number")
          }
      }
      //As long as cancel is not pressed...
  } while (confirm("Do you want to continue?")); */
 //---------------------------------------------------------------------------
 /*
  ⚡⚡EX__:Write a program that asks for 3 numbers and writes the largest of the three to the screen.
   let Number1 = prompt('Tell me a number');
   let Number2 = prompt('Tell me a number');
   let Number3 = prompt('Tell me a number');

   if (parseInt(Number1) > parseInt(Number2) && parseInt(Number1) > parseInt(Number3)) {
       document.write('This number is greater: ' + Number1);
   } else if (parseInt(Number2) > parseInt(Number3)) {
       document.write('This number is Greater: ' + Number2);
   } else {
       document.write('This number is Greater: ' + Number3);
   }*/
 //-----------------------------------------------------------------------------------
 /* ⚡⚡ EX__:Write a program that asks for a number and tells if it is divisible by 2
   let Num = prompt('Tell me a number')
   if(num / 2 === 0){
       document.write('Your number is divisible by 2');
   }else{
       document.write('Your number is not divisible by 2')
   } */
 //-----------------------------------------------------------------------------------
 /* ⚡⚡EX__:Write a program that asks for a phrase and writes the vowels that appear
   let text = prompt("Type a sentence");
   let nText = text.length;
  let i;
  for (i = 0; i < nText; i++) {
      if (text.substr(i, 1) === "a" || text.substr(i, 1) === "e" || text.substr(i, 1) === "i" || text.substr(i,
          1) === "o" || text.substr(i, 1) === "u") {
           document.write(text.substr(i, 1));
          }
      } */
 //--------------------------------------------------------------------------------------------------
 /*//⚡⚡ EX__: Write a program that asks for a number and tells us if it is divisible by 2, 3, 5 or 7 and tells us by which of the four it is divisible (you have to say all by which it is divisible)
  let num = prompt('tell me a number and I will tell you if it is divisible by the following numbers: 2-3-5 or 7');
  num = Number(num)
  if(num % 2 === 0 || num % 3 === 0 || num % 5 === 0){
   if(num % 2 === 0){
       alert{'Your number is divisible by 2'}
   }else if{num % 3 === 0{
       alert('Your number is divisible by 3')
   }else if(num % 5 === 0){
       alert("Your number is divisible by 5")
   }else if(num % 7 === 0){
       alert('Your number is divisible by 7')
   }else{
   alert('Your number is not even divisible by 2,3,5 and 7')
  };*/
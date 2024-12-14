//we want to check if an array is sorted


//I want to use while loop
//i want to end the loop if the user adds an empy string
let userInput;
let userValues = [];
while( userInput !== ""){
    userInput = prompt(
        'Add your text below. Input proccess will end when you add an empty string');

        if (userInput !== ""){
        userValues.push(userInput);
    }
        

}

// console.log("This is the final array", userValues);

//in every loop i want to check the element with the next element
        //if item i is smaller than the item i+1 we continue the loop
        // else we show the msg "not shorted" and the loop breaks
        //if all the table is sorted then we show the msg "Sorted"
//solution 1
//         const confirmThatAllLoopsAreDone = true;
// for (let i = 0; i < userValues.length; i++){
//     userValues[i] > userValues[i + 1]; {
//         alert('Not sorted');
//         confirmThatAllLoopsAreDone = false;
//         break;

//     }

// }

// if (confirmThatAllLoopsAreDone === true) {
//     alert("Sorted");
// }



//solution 2
        
for (let i = 0; i < userValues.length; i++){
    userValues[i] > userValues[i + 1]; {
        alert('Not sorted');
        confirmThatAllLoopsAreDone = false;
        break;

    }

}


    alert("Sorted");

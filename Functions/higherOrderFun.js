/* 
1.First-Class Functions : In Js all the functions are treated as first class functions.
->It means functions are just values
->Means there are just type of objects.
*/

/*
Higher Order Functions : A function is considered as a Higher order function if it accepts another funtion as a callback function or it returns a function or both.
->This is because functions being first-class functions.
->Helps in abstraction , deligating some works to other functions thereby hiding  the process of o/p thus higer order functions becoming result oriented.
*/

////// HIGHER ORDER FUNCTIONS /////

const oneWord = (str) => {
  return str.replace(/ /g, "").toLowerCase();
};

const upperFirstWord = (str) => {
  const [first, ...others] = str.split(" ");
  return [first.toUpperCase(), ...others].join(" ");
};

//Higher Order Function

const transformer = (str, fn) => {
  console.log(`Original Str : ${str}`); //Original Str : Practicing Javascript makes me feel good
  console.log(`Transformed Str : ${fn(str)}`);
};
transformer("Practicing Javascript makes me feel good", upperFirstWord); //Transformed Str : PRACTICING Javascript makes me feel good

transformer("Practicing Javascript makes me feel good", oneWord); //Transformed Str : practicingjavascriptmakesmefeelgood

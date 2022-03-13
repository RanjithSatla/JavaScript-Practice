///// BIND METHOD /////

/* Bind method : Bind is also used to manually set this keyword to any function call.
-> But Bind doesn't call the function immediately instead it returns the new function where this keyword is bound.
-> So it set to whatever value we pass to bind.
*/

const bookMyShow = {
  movie: "Radhe Shyam",
  cast: "Prabhas & Pooja Hegde",
  bookings: [],
  //book:function() {}
  book(name, date) {
    console.log(
      `${name} booked ${this.movie} staring ${this.cast} on ${date}
          `
    );
    this.bookings.push({ movie: ` ${this.movie}`, name, date });
  },
};

//Now Suppose RRR is added to BMS:
const RRR = {
  movie: "RRR",
  cast: "NTR,Charan,Alia",
  bookings: [],
};

//Store book method so we can use on all next movies
const book = bookMyShow.book;

const bookRRR = book.bind(RRR);
bookRRR("John", "21st Jan"); //John booked RRR staring NTR,Charan,Alia on 21st Jan

//Partital Application : A part of arguments of the original function are already applied/set i.e.. Preset parameters.

const bookFahad = book.bind(RRR, "Fahad"); // This function would always book ticket for Fahad.

bookFahad("3rd April"); // Fahad booked RRR staring NTR,Charan,Alia on 3rd April

console.log(RRR.bookings);
/* 
[
  { movie: ' RRR', name: 'John', date: '21st Jan' },
  { movie: ' RRR', name: 'Fahad', date: '3rd April' }
]
*/

//Partial Application :

const addTax = (rate, value) => value + value * rate;
console.log(addTax(0.1, 200)); //220;

//Consider there is another tax with a fixed rate :

const addVAT = addTax.bind(null, 0.23);
//null because first parameter is the function to which this keyword is to be set and here is no such.

console.log(addVAT(100)); //123
console.log(addVAT(23)); //28.29

//// FUNCTION RETURNING ANOTHER FUNCTION ////

// Same with function returning another function :
const addTaxRate = (rate) => {
  return (value) => {
    return value + value * rate;
  };
};

const addVAT2 = addTaxRate(0.23);
console.log(addVAT2(100)); //123

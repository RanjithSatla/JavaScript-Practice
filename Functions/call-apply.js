///// CALL METHOD /////

/* Call method : Call method takes a function and calls(invokes) it with another object.
->Thereby we can refer to an external object using the this keyword.
*/
`use strict`;

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

bookMyShow.book("James", "25th March"); //James booked Radhe Shyam staring Prabhas & Pooja Hegde on 25th March

console.log(bookMyShow.bookings); //[ { movie: ' Radhe Shyam', name: 'James', date: '25th March' } ]

//Now Suppose RRR is added to BMS:
const RRR = {
  movie: "RRR",
  cast: "NTR,Charan,Alia",
  bookings: [],
};

//Store book method so we can use on all next movies
const book = bookMyShow.book;

//DOESN'T WORK
// book("Bond", "30th March"); //Movie & Date Undefined
// Because is book is regular function , this points to undefined.

book.call(RRR, "Sajid", "30th March"); // Call method calls book function w.r.t to RRR Object , this points to RRR
console.log(RRR.bookings); //[ { movie: ' RRR', name: 'Sajid', date: '30th March' } ]

///// APPLY METHOD /////

//Apply method : This is same as call method but instead of taking list of arguments it takes array.

const userDetails = ["Moosa Rehman", "1st April"];
book.apply(RRR, userDetails); //Moosa Rehman booked RRR staring NTR,Charan,Alia on 1st April
console.log(RRR.bookings);
/*[
    { movie: ' RRR', name: 'Sajid', date: '30th March' },
    { movie: ' RRR', name: 'Moosa Rehman', date: '1st April' }
  ]*/

//NOTE: We can do same with call method using Spread Operator
book.call(RRR, ...userDetails); //Moosa Rehman booked RRR staring NTR,Charan,Alia on 1st April

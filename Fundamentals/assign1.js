/* 
Steven wants to build a very simple tip calculator for whenever he goes eating in a
restaurant. In his country, it's usual to tip 15% if the bill value is between 50 and
300. If the value is different, the tip is 20%.
Your tasks:
1. Calculate the tip, depending on the bill value. Create a variable called 'tip' for
this. It's not allowed to use an if/else statement � (If it's easier for you, you can
start with an if/else statement, and then try to convert it to a ternary
operator!)
2. Print a string to the console containing the bill value, the tip, and the final value
(bill + tip). Example: “The bill was 275, the tip was 41.25, and the total value
316.25”
Test data:
§ Data 1: Test for bill values 275, 40 and 430

*/

let bill = 40;

const tip =  bill>= 50 && bill<=300 ? (bill/100)*15 : (bill/100)*20 ;
console.log(`The bill was ${bill}, the tip was ${tip}, and the total value
    is ${bill+tip}`);



// ARROW FUNCTIONS :    

    /*
    Back to the two gymnastics teams, the Dolphins and the Koalas! There is a new
gymnastics discipline, which works differently.
Each team competes 3 times, and then the average of the 3 scores is calculated (so
one average score per team).
A team only wins if it has at least double the average score of the other team.
Otherwise, no team wins!
Your tasks:
1. Create an arrow function 'calcAverage' to calculate the average of 3 scores
2. Use the function to calculate the average for both teams
3. Create a function 'checkWinner' that takes the average score of each team
as parameters ('avgDolhins' and 'avgKoalas'), and then logs the winner
to the console, together with the victory points, according to the rule above.
Example: "Koalas win (30 vs. 13)"
4. Use the 'checkWinner' function to determine the winner for both Data 1 and
Data 2
5. Ignore draws this time
Test data:
§ Data 1: Dolphins score 44, 23 and 71. Koalas score 65, 54 and 49
    */


const calcAverage = (s1,s2,s3) => (s1+s2+s3)/3;

const avgDolphins = calcAverage(85,54,41);
const avgKoalas = calcAverage(23,34,27);
console.log(avgDolphins,avgKoalas);

const checkWinner = function(avgDolphins,avgKoalas) {

    if(avgDolphins >= 2*avgKoalas) console.log("Dolphins win");
    else if(avgKoalas >= 2*avgDolphins) console.log("Koalas win");
    else console.log("Nobody Wins");
}

checkWinner(avgDolphins,avgKoalas);
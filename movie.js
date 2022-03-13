class movie{
    constructor(title,studio,rating="PG"){  //parameterized constructor: to call the class
        this.title = title;  //creating variables to store in the constructor
        this.studio = studio;
        this.rating = rating;
        console.log(`The Title of the movie is ${this.title}, the studio that made the movie is ${this.studio} and The rating is ${this.rating}`);
    }
getPG(movies,ratings){ //function ot get movies
    let pg=[]; //empty array to store the movies we got
    for(let i=0;i<movies.length;i++){ //looping all movies
        if(ratings[i]=="PG"){
            pg.push(movies[i]); //pushing into the array
        }
    }
    return pg; //returning to the function
}
}
//a)
let obj = new movie("Ko", "Sun_pictures", "PG-13");
//b)
let objx = new movie("Ko", "Sun_pictures");
//c)
let movies = ["ko", "va", "3", "ab", "4"];
let ratings = ["PG", "PG", "PG13", "PG", "R"];
console.log(obj.getPG(movies, ratings));

//d)
let objy = new movie("Casino Royale", "Eon Productions", "PG­13");

class movie{
    constructor(title,studio,rating="PG"){
        this.title = title;
        this.studio = studio;
        this.studio = rating;
        console.log(`"The Title of the movie is "${this.title}", the studio that made the movie is "${this.studio}" and The rating is "${this.rating}"`);
    }
getPG(movies,ratings){
    let pg=[];
    for(let i=0;i<movies.length;i++){
        if(ratings[i]=="PG"){
            pg.push(movies[i]);
        }
    }
    return pg;
}
}
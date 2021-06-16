import React from "react";

const friends = ["dal", "mark", "lynn", "japan"]
friends.map(current => {
  console.log(current);
  return 0;
})
friends.map(function(friend){
  return friend + "👍";
})
function Movie({ name, picture, rating }){
  return <div>
    <h2>I like {name}</h2>
    <h3>Rating: {rating} / 5.0 </h3>
    <img src={picture} alt={name} />
  </div>;
}


const movieList = [{
  id:1,
  name: 'Avengers',
  image:"image1",
  rating: 5
},
{
  id:2,
  name: "CaptainMarvel",
  image: "image2"
 , rating: 4.5
}]
 
function renderMovie(movie){
  return <Movie key={movie.id} name={movie.name} picture={movie.image} rating={movie.rating} />
}
function App() {
  return (
    <div> 
      {movieList.map(renderMovie)}
    </div>
  );
}

export default App;

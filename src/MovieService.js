// import axios from "axios";

// const url = "http://localhost:3005/movies";

// class MovieService {
//     static getMovies(){

//         // fetch(url)
//         // .then(res => res.json())
//         // .then(data => console.log(data))
//         return new Promise((resolve, reject) => {
//             try{
//                 const res = axios.get(url);
//                 const data = res.data;
//                 console.log(data);
//                 resolve(
//                     data.map(movie => ({
//                         ...movie
//                     }))
//                     );
//                 }
//             catch(err){
//                 reject(err)
//             }
//         })
//     }
// }

// export default MovieService
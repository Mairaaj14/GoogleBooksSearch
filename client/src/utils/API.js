import axios from "axios";
const BASEURL = "https://www.googleapis.com/books/v1/volumes?q=monkey";
const APIKEY = "AIzaSyDDpKLzHuti76b30M9DIR4j1BwsADvERHc";

export default {
 search: function(query) {
   return axios.get(BASEURL + query +"&key" + APIKEY);
 }
};

// import axios from "axios";

// export default {
//   // Search all books
//   search: function(query) {
//     return axios.get("https://www.googleapis.com/books/v1/volumes?q=" + query);
//   },
//   // Gets the book with the given id
//   Book: function(id) {
//     return axios.get("/api/books/" + id);
//   },
//   // Deletes the book with the given id
//   deleteBook: function(id) {
//     return axios.delete("/api/books/" + id);
//   },
//   // Saves a book to the database
//   saveBook: function(bookData) {
//     return axios.post(`/api/books/${bookData}`);
//   }
// };


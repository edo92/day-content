# **Instructions**

* There is already an npm package for the OMDB API, but it no longer works, because an API key is now required to use this service. Let's write our own module that can accept an API key and then make basic searches against the OMDB API.

* In `omdb.js`, write a constructor function that accepts one argument, the API key, and saves it as a property. Then add two methods to this constructor, one for making generic searches and one for finding specific movies. Let's call them "search" and "get." Both methods will need to accept two arguments: the title we're looking for and a callback function.

* Remember, callback functions are necessary when trying to pass asynchronous data from one module to another. In this case, our OMDB module will be using the request package to make http requests, which is asynchronous.

* In `main.js`, call the "search" and "get" methods, passing each one a title to search for and a callback function. If done correctly, we should be able to console.log the returned data in `main.js`, NOT `omdb.js`.

---

### BONUS

  * Think of other methods we could add that would make this module useful.
  * Use inquirer to capture user input and run the searches based off of their selection.
  * Look into "promises" and how we could use them to replace our callbacks.
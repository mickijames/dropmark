// @codekit-prepend "jquery.js";
// @codekit-prepend "semantic.js";

//********* Configure JSON Call ************//
// The API Feed.
var getStuff = 'http://mickijames.dropmark.com/420949.json';

// Send back stuff. Private Collections.
var setStuff = {};

// Do stuff with returned data
var doStuff = function(data) {

  console.log(data.items);
//  console.log(data.items[1].link);
//  console.log(data.items[1].name);
//  console.log(data.items[1].thumbnails.cropped);
  
  // What do you want to do? Show (display on page) data? 
  showStuff(data);
  
};

//********* Get & Set ************//
$.getJSON(getStuff, setStuff, doStuff);

//********* Display It ************//
var showStuff = function(data) {
    
    // Put on Page
    $('h1').text(data.name);
    $('p a').attr('href', data.url);
    
    // Child Objects. May have many children.
    // Loop or cycle through all the data
    // Display data at each loop
    $.each(data.items, function (i) {
        
        // loop
        var stuff = '<p>' + data.items[i].name + '</p>';
        
        // put onto page
        $('#items').append(stuff);
        
    });
    
};

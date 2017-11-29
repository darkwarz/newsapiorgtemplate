/*global $ APIKEY*/
$(document).ready(function() {
    $.ajax({
  //      method: "GET",
        url: "https://newsapi.org/v2/sources",
        data: { category:"business", country:"us", language:"en", apikey: APIKEY},
        success: function(data){
          if (data.status === "ok")  {
              console.log(data)
              for (var i = 0; i < data.sources.length; i++) { //for loop data sources
                    var source = document.createElement("OPTION");
                    source.setAttribute("value",data.sources[i].id)
                    source.innerHTML = data.sources[i].name;
                    document.getElementById('selection').appendChild(source);
               } 
            } 
        }  
    }) 
    $('#source').submit(function(event) { // this grabs Source and create event listing popup
        event.preventDefault(); // 
        alert(document.getElementById("selection").value)
    }
    
    // $.ajax({
    //     url: "https://newsapi.org/v2/headlines",
    //     data: { category:"business", country:"us", language:"en", apikey: APIKEY},
    //     success: function(data){
    //       if (data.status === "ok")  {
    //           console.log(data)
    //           for (var i = 0; i < data.sources.length; i++) { //for loop data sources
    //                 var source = document.createElement("OPTION");
    //                 source.setAttribute("value",data.sources.description[i].id)
    //                 source.innerHTML = data.sources.description[i].name;
    //                 document.getElementById('selection').appendChild(source);
    //     })
    );
});



    // .done(function( data ) {
    //     console.log( data );
    //     console.log( data.status );
    // });

this project is a map build with leaflet.

The map displays Dutch train stations and includes buttons to navigate to specific locations.

the project uses:
- HTML,
- CSS,
- JavaScript,
- external API,
- leaflet.


HTML to structure the page by creating:
- one map container
- 3 buttons 



CSS to style and position the elements, creating a clean and readable layout.



JavaScript adds the logic, split into 5 functions:

initialize()
- the leaflet mapobject is created and displayed by adding L.map and the center coordinate.
- loads the openstreetmap tiles using L.tileLayer.
- a marker, bindpopup and coordonate is used to add to the map. this is a standaard location.
- 2 new coordinates are added with markers and bindpopup, which are later linked to the buttons.

function flyToPuntaCana() and function flyToAmsterdam()
these functions are both triggerd by buttons. 
each functions uses flyTo to move the map to a specefic location.
the movement is animated for a smooth navigation experience.

function getStations()
- uses an external API to fetch station data.
- passes the data to showStation().

 function showStations(data)
 A for loop is used to first:
 - select each station from de data
 - 
and add for each station:
 - A L.cicrle is added using the stations coordinates,
 - add radius,
 - add bindpopup with the station names on it.

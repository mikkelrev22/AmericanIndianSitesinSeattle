# AmericanIndianSitesinSeattle
- Interactive app using Google maps API and historical data

# Architecture
## User stories & Admin stories
- A user should be able to view markers of sites on the map
- A user should be able to click on a marker for more information
- A user should be able to sort for different types of markers (filters)
- An admin should be able to sign-in to update or create new sites
## Backend Architecture: DB/data structure
- We know that our map will need latitude and longitude information for the marker
- I will begin by rendering a centered map and then attempt to place one marker with example data
## Frontend Architecture: React google maps dependency
- I would like to seperate the concerns of the front-end dist folder (html page) from the creation of the markers and the creation of the map
- I will experiment with using the google-maps-react npm dependency and adding markers to the page


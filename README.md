## Fridge Freud

Fridge Freud one of the first apps I ever built, so I keep it here for entertainment.

It creates a Myers-Briggs profile to recommend restaurants in your area.

The custom form-flow has a number of novel interactions such as a drag-and-drop car customizer (a la pimp my ride), and a spiciness ranker that let's users rank images of the spice girls to determine what level of spice they can handle.

All of the user choices are stored in globally with redux and locally with redux persist.

Myers-Briggs personality types are correlated with a custom Yelp query to find the restaurants that match their disposition.

Yelp API fetches are made using a Rails backend that also supports logins and authentication, although these are not active on the live demo.

Frontend is mobile responsive and flex-based.

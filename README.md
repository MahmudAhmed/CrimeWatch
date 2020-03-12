## CrimeWatch
CrimeWatch is a web application that allows Samaritans to report local crimes/incidents in their neighborhood. You can visit it right [Here!](https://crime-watch.herokuapp.com/)

* Technologies Used:
Our Team used the full MERN Package. MongoDB, Express, React with Redux and Node.js to build this project. They each play a big role in this awesome web application!

## How It Works
Anyone who goes in the site can see a list of Incidents and when logged in, can post their own incident based on the type, description and location using Google Maps.

## Specific Features

### Report an Incident from your Location!

Users will be able to create a report, where they can pinpoint a local Incindent they witnessed. We built a quick and easy Modal that asks for the category via dropdown, description of the Incident as well prefilling Latitude and Longitude that would be based on their location to report on the map. This was done by setting Reports Component to have props that would match each of the descriptions:
`` this.state = {
          category: "Misc.",
          description: "",
          lat: "",
          lng: ""
        };``
 It would then appear alongside the rest of the report crimes on the index sidebar.



## Future Plans for CrimeWatch

* Show the most recent crimes within 1 mile radius of user.
* Allow for more details of incidents, photos, etc..
* The Ability to see a profile page where you can see the reports you made, and update reports.
* Search and Watch/follow crimes based on category or selection. 
* More indept UI/UX. 

## WireFrame

![wireframe](https://github.com/MahmudAhmed/CrimeWatch/blob/master/crimewatch.png)

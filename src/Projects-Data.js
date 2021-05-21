

export const Projects = [
  { name: 'Weather Beats app',
    link: 'https://weatherbeats.netlify.app/',
    image: 'WeatherBeats_project.jpg',
    description: `  WeatherBeats is a weather inspired song generator app that utlizes Spotify. Users enter their location and the app returns a background and playlist inspired by their current weather. For those who do not wish to disclose their location, weather and genre can also be selected individually.
    
  A React responsive frontend makes calls to the Spotify auth API requesting permissions. Using Javascript's Geolocation API, the location is returned and then used in a call to the WeatherBit API. Lastly, the weather value is returned, munged, and matched up to a keyword decided on by the team as a whole for that specific weather, and the call is made to the Spotify app returning a playslist.`
  },
  { name: 'beHuman plugin',
    link: 'https://marketplace.visualstudio.com/items?itemName=not-bot.be-human&ssr=false#overview',
    image: 'beHuman_project.jpg',
    description: `  As developers we understand the value of taking breaks and moving our bodies, so we created this VS code extension to remind user of just that. Along with quick tips we include an option to move around that takes the user to an external link which plays a video to walk them through a stretch/exercise.
    
  This is a mostly Javascript frontend using a Yeoman scaffolding that makes calls to a PostgreSQL database in a Node backend. Not visible to the user is a vanilla Javascript admin page kept safe through bcrypt, so we can continue to add more "quick tips" and stretching videos in the future. As the idea owner it is my hope that this continues to remind coders everywhere that we are human and it's important to continue to tend to that part of ourselves.`
  },
  { name:'gitThere API project',
    link: 'https://git-there-api.netlify.app/',
    image: 'gitThereAPI_project.jpg',
    description: `  Here's an app we built to show users the different eco-transportation choices within walking distance of their current location. Using a Node Express back end and a React front end, incoporating multiple RESTful API calls to gather data, we were able to display all the options around the user on a Google-map-react component, and then further using basic Javascript to allow users to sign-up and login to get access to their saved locations.
    
  Specific to the Portland area, though it could easily be scaled up to other large cities, we hope it comes in handy!`
  },
  { name: 'tic-tac-toe',
    link: 'https://sformichella.github.io/t4-xoxo/',
    image: 'tictactoe_project.jpg',
    description: `  Our re-creation of the classic tic-tac-toe using  javascript, html and css. Local storage is used to maintain state, so users can track their wins, losses, and cats as well as check on a variety of game stats and still return to their game in progress. Two different algorithms were created to offer different difficulty modes.
    
  This was a fun one that pushed our limits, forced us to come up with creative ways to manage gameplay, and even surprised us with some unknown "double-win" game results. Give it a try!`
  }    
]
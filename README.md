# Authorization
Ready authorization template based on MERN stack
# Overview  
This design system is designed to quickly integrate into existing systems to increase developer productivity.   
Developed on the MERN stack
# Development
In this mode, I used dependencies such as:  
<li> Concurrently - to configure scripts to run scripts simultaneously  </li>
<li> Nodemon - to restart the server after changes </li>
<br/>
I also used proxy. The proxy are specified in the client directory in the json file.  
In the development mode, the client can send requests to the server using a proxy  

# Production
In production mode were used:
<br/>
<li> Config - to create changes, server settings (jvttoken, link to the database, etc.) </li> 
<li> Cors - to enable the user agent to obtain permissions  to access the selected <br/> resources  
from a server on an origin (domain) other than what the site is currently using </li>  
<li> Express - for robots with a server </li>
<li> Express-validator - to check the validity of registration data </li>
<li> Jsonwebtoken - for robots with tokens (verifying an authorized user, creating a token for a new user, etc.)</li>
<li> Mongoose - for robots with maza danih mongo db </li>
<li> Bcscript - to encrypt user passwords</li>
<li> React-router-dom - for navigation</li>
<br/>
Also, the project uses several custom hooks and contexts. <br/>  
<h1> Deploy </h1>  <br/>
In order to deploy the project: <br/>  <ol> <li> Copy it or download it </li> <li> Install all dependencies with npm.</li>  
<li> Next, set your parameters in the config directory - a link to the database, the secret phrase of the jwttoken and the desired port, if necessary.</li></ol>
<br/>
<h1> Images of form </h1>
<br/>
<br/>
<img src="https://github.com/Sentry11/media/raw/main/auth1.png" height="250"/>
<img src="https://github.com/Sentry11/media/raw/main/auth2.png" height="250"/>

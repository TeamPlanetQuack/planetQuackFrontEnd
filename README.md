# planetQuackFrontEnd

<b>Description: </b>

PlanetQuack is an education single-page application showcasing a profile about each of the planets in our solar system. This repository is the front-end repository for our website. In this readme you can find links to the deployment, instructions for viewing the site locally on your computer, screenshots, teammembers, the tech stack used, and the requirements for the Quackathon challenge it was submitted for with descriptions of how we met and/or exceeded those goals. 

<b>Deployment: </b> https://planetquack.onrender.com/

<b>To start the project locally: </b>

When first opening the project make sure to install the necessesary dependencies with the command "npm i" in the CLI. 
To view the site, in your CLI use the command "npm run start" and in your browser visit http://localhost:3000. 

<b>Screenshots: </b>
Home Page
![image](https://user-images.githubusercontent.com/113493052/229325389-32a56530-c65c-4cb7-8837-61535473b8bc.png)

Planet Information
![image](https://user-images.githubusercontent.com/113493052/229325402-3f29492b-9a44-4628-9071-82bb5ec18284.png)

Quiz
![image](https://user-images.githubusercontent.com/113493052/229325421-e28c08d9-fc2a-4a2b-ad5f-d4df2cab8428.png)


<b>Team Members: </b>
- Alexa Mullin
- Maaya Yamauchi
- Jessy Piesco
- Nelson Luna


<b>Tech Stack: </b>

For the front-end we are using Typescript, React.js, vanilla CSS. 

<b>Quackathon requirments: </b>

-- The website must be a SPA application.
- How we met this goal: We used react to develop a single-page application. All components are loaded on first visit, and show depending on which part of the site you want to see. 

Planets:

-- Each planet of the solar system must have its own profile page.
- How we met this goal: Each planet has its own profile page that can be accessed by clicking on the planets image. 
- How we exceeded this goal: We also included information about the dwarf planets in our solar system. You can find this by selected the word dwarf planet on the home page, and then clicking the link to see more information about the dwarf planets. 

-- Each page must include at a minimum (Name of the planet, size, distance from the Sun, three identifying facts, solid or gas core, and a visual representation of the planet)
- How we met this goal: We included all of the required information from this list. 
- How we exceeded this goal: We also included the planets rotation time and orbit time. 

-- NOTE: No images, assets, emojis, or SVGs are permitted. The visual representation of each planet must be made ENTIRELY out of CSS.
- How we met this goal: Every planet is made entirely out of CSS. If you look at the code in the CSS it does say "background-image" but that is just to house self-made linear gradients to color the planets. No images, assets, emojis, or SVG's were used. 
- How we exceeded this goal: The planets are also animated. 

-- If the planet has a moon, you must display the following information for every moon (Name, history behind name, and size). 
- How we met this goal: We included all of the required information from this list. 
- How we exceeded this goal: We also included information about when the moon was discovered. 

-- Planet pages must include at least two different component styles.
- How we met this goal: The planets page includes the PlanetInfoBox component and the MoonInfo component. 

-- If a planet has more than one moon, the moon information must be displayed in repeating elements.
- How we met this goal: We mapped over the moons creating a MoonInfo component with its information generated from the map. 
- We included information about EVERY moon for each planet. 

-- All planet and moon content MUST be stored in a database.
- How we met this goal: All planet and moon content is stored in the backend database. None of the information is hard coded except the general solar system information on the front-end. 
- How we exceeded this goal: We also stored our quiz questions in the backend database. 

Homepage:

-- The homepage should be an overview of the solar system.
- How we met this goal: The homepage is an overview of the solar system. 
- How we exceeded this goal: The homepage also contains links to extra information about the dwarf planets and a quiz to take. 
    
-- The data included will be up to each team.
- How we met this goal: We decided to include information about what a solar system is, non-planet items in the solar system, the difference between terrestrial and jovian planets, the heliocentric model of our solar system and how we used to think it was geocentric, where in the universe our solar system exists (milky way galaxy), and how there are different solar systems within our galaxy, and how items in our solar system move.
    
-- The homepage must include at least two components that are NOT used on any planet page.
- How we met this goal: The home page includes the HomePage component and the Footer component. Neither of these are used on the planet pages. 
    
-- Homepage content does not need to be stored in a database and can be coded into your components.
- How we met this goal: The information about the solar system was hard coded into the HomePage component. 

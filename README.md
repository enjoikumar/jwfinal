
#JW Player
The project is built on React and used the npm package chokidar for sass compiling. To install, npm install would be fine. 

## Thoughts 
This project was definitely a challenge and really fun for me. I've listed the triumphs and challeneges below. The fun part was getting things working, those 'aha' moments, and soon after everything was just clicking. I really haven't used react and json, and I do want more experience with that. It showed me a new way to use data, which was similar to an API. 
It also made me think outside the box, and use new tools. I'm familar with sketch, but sketch for some reason doesn't analyze a psd. In that case I used Avocode to analyze the psd file to find the colors, width's, heights, fonts, and element placing. The second challenging aspect was, at first I thought this was going to be really easy because of all the 'Lorem ipsums', But I then had to analyze the data given to me and brainstorm which text goes where. That was a challenge but in a fun way, like a puzzle. I actually printed out the JSON data and analyzed it that way so I could visually see which elements go where. 
When it comes to responsiveness, I designed the page on 414px, 375px, and 768px. 
My final thoughts on this challenge was, if this is a typical day at work, I don't think I'd stop. At one point I completely forgot that this was a challenge and lost track of time because I was enjoying it so much. It really did make me think out the box when it came to design aspects, and structuring react components.

One last remark: There are two github repos. One with all my commits, and this finalized one. Last night I made a mistake and it broke my app. I restarted, but I wanted to leave the commits so you can track my progress. 
The original github with the commits: https://github.com/enjoikumar/jw
The final one which is bundled: https://github.com/enjoikumar/jwfinal

## Triumphs:
-Some of my triumphs include getting the components working together and having a sense of the architecture. 
-Looking at the psd, I was ablt to break it down to its components.
-Stylizing the page as well, was a bit of a triumph and defeat. 

## Defeats:
-When I was first just testing out the page, I wanted to render an image, and even with the correct pathing it wasn't rendering properly
-From the PSD file, there was a single font being used, but there were heirachies which I didnt know till half way in
-Even now, I'm not able to properly align the JW player logo aligned to the first nav bar section
-Rendering the JSON data seriously took me a few hours. Primarily because I haven't gotten JSON data in a while, and also the data was so heavily nested. -One wrong note, and the proper object wouldn't be rendered. Looking at the logs, there will be alot of logs because it was basically trial and error for me at time.
-Also using props to get the data repeated, at first I thought I needed to use state, but the more I thought, that wasn't the way to go, an analogy I use is -I need to change the menu items not the restaurant. Using props and then parsing the JSON data was a bit time consuming, but it would've been so much faster than hardcoding each item over and over again.
-Less/Sass/Scss, this was a bit confusing for me, I've used LESS,SASS,SCSS, but not with react, I went on external resources and tutorials to find the best way.
-Webpack: It basically broke my app, I'm not too familiar with webpack and it pretty much broke my app the first time around.
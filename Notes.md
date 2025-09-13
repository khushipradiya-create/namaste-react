#Assigment 1 
#inception


1. what is Emmet ?
ans : 
   Emmet is a built-in tool in VS Code (and other editors) that lets you write shortcuts to quickly generate pieces of code in HTML and CSS.

   Ex : html:5 (it generates a basic skeleton of html code)
   EX : ul>li\*3



2. Difference between library and framework ?
ans : 
   Library : A collection of ready-made functions/code that you can call and use whenever you want. You are in control of how and when to use it.
   Example: React, jQuery

   Framework : A complete structure or skeleton to build applications.
   The framework is in control, and you have to follow its rules.
   Example: Angular, Django.

   Library : You call it
   Framework : It calls you




3. What is CDN ? why do we use it?
ans : 
   CDN(content delievery network) is a geographically distributed group of severs that caches content close to end users. React and ReactDOM libraries are also available via CDN links.

   Ex : If a website is hosted in the US but you are in India, a CDN will give you the files from a nearby India server instead of fetching them all the way from the US.




4. Why is react known as React ?
ans : 
   React is a javascript library developed by Facebook and created by Jordon Walke , primarily used for building useinterface, especially for single Page Application.

   React is called “React” because it is designed to react (update quickly) to changes in data. When the underlying data (state or props) of a component changes, React automatically updates only the necessary parts of the user interface, rather than re-rendering the entire page. This makes applications built with React fast and responsive.

   Ex : Imagine you have a toy robot. Each time you press a button on the robot, it reacts and does something—like moving its arm or lighting up its eyes. In a similar way, React allows web pages to “react” instantly to user actions without having to reload the entire page.



5. What is crossOrigin in Script tag?
ans : 
   The crossOrigin attributes in the <script> tag is used when you load an External javascript / or any resource file from another server or domain.
   you are telling the browser to apply CORS rules so the script can acess resources without any issues.


   Same-origin :
   website : http://mywebsite.com
   jsfile domain : https://mywebsite.com/script.js

   cross-origin :
   website : http://mywebsite.com
   jsfile domain : https://Cdn.com/script.js

   



6. What is a difference between react and reactDOM ?
ans : 
   React → The core library that lets you create components, manage state, and build UI logic.
   ReactDOM → The library that takes React components and actually renders them into the browser’s real DOM.

   React creates virtual dom only for UI. But this virtual dom can be rendered in DOM, mobile native view, or VR environment. For this flexibility, separate modules of react and rendering library have been created.
   Ex:   for web :  reactDOM
         for mobile  : react native


       
7. What is difference between react.development.js and react.production.js via CDN   links ?
ans : 

   react.development.js → Used while coding.
   Bigger file, slower.
   Includes warnings, errors, source maps, sometimes hot reloading.
   Helps developers debug.

   react.production.js → Used on live websites.
   Smaller, faster, optimized.
   No extra warnings or debug code.
   Minified for better performance.
   
   <script src="https://unpkg.com/react@16/umd/react.production.min.js"></script>
   <script src="https://unpkg.com/react-dom@16/umd/react-dom.production.min.js"></script>

8. What is async and defer attributes in script tag?
ans :  
   Async : the script is downloaded parallel to the html parsing and executing as soon as it ready 
   impact : not guaranteed in order if multiple script have async .it can lead issues when scripts depend on each other. 

   use case :  analytics and adds
   ex : <script src="file.js" async><script>


   Defer : the script is downloaded parallel to the html parsing but executed only after html parsing is completed
   impact : script executed in order 

   use case : script that interact with DOM or depened on each other 
   ex  : <script src="file.js" defer><script>



 
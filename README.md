# typescript-project-setup

set up typescript project

typescript create and run 


install some dependency

// install typescript 
npm i -g typescript
tsc --init



// convert typescript 

// convert typescript to javascript file => step -1
use git bash terminal 
$tsc your app name like => tsc app.ts

// convert typescript to javascript file use typescript config file => step -2 

1)make a folder like as main dist 
2)go to tsconfig.json file
3) change the target 00 "target": "es2016",  to "target": "ES5", for output update code || its compile old version to new version
4) Uncomment "rootDir": "./", and set here src folder "rootDir": "./src" 
5) Uncomment "outDir": "./",  and set here your targeted folder whose folder you use to convert a folder as like as main  "outDir": "./dist", 
6) save this file

Now just write tsc in git bash terminal you get a file in dist file

// we are not use again and again tsc   convert file
    just use this commend in terminal => tsc --w or use 
    tsc --watch 
when use this commend its automatic convert file


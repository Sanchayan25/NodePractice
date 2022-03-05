/* 
___________________________ Installing Packages and Dependencies________________________________________

This following code is run after installing underscore module using npm (npm i underscore)
mongoose module is also installed and that is used later for MongoDb. It has nothing to do with the below code.


Installing mongoose also installs its dependencies (all the other modules under node_modules folder are installed for the same).
Older versions of npm used to download all the dependencies of a module under a sub folder "node_module", thereby creating unnecessary duplications across the application and also very complex nested folder names (and windows has a restriction on the path name length)
Note: if there is a Module X which requires a certain specific version of another module Y as its dependency (which does not match the module version under the main node_modules folder for the project ), then it shall install this specific dependency separetely under the "node_modules" folder under itself (X module).
Node takes care of this by updating all the dependancy under the main package.json file for the application. This package.json file in turn helps Node on a different system to go ahead and download all the required dependencies with the matching versions.

** 
Naturally, node_modules becomes very big in size as the application complexity increases. It is not viable to change our source code to source control repository with such a large file size involved. We shall exclude this folder from git.
Steps: introduce a new file ".gitignore". Note this file shall have no name but only extensions.
Type the name of the folder/file to be skipped. For folder, ensure that the name ends with "/". For example: node_modules/
**



One can delete the node_modules folder altogether to check this. Run the command:
npm i  
This shall restore the node_modules.

*/

var _ = require('underscore');
var result= _.contains([1,2,3],2);
console.log(result);
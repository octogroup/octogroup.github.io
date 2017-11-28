# octogroup.github.io
We have created an interactive mockup of a new LMS (Learning Management System). The system is intended to target the Higher Education Schools in order to provide better management and quality assurance of education and to facilitate learning and pedagogy in the teaching.

## Getting Started
These instructions will get you a copy of our web page and how we work. Down further you can find our guidelines in code and visual appearance.

### Tools we've been using
We have written code after Linters to get a consistent and nice code. These are the plugins that you need to install to your editor software to get the same ones as we have used:

``apm install atom-beautify`` <br>
``npm install standard --global`` <br>
``apm install linter-htmlhint`` <br>
``apm install linter-csslint``<br>
``apm install linter-js-standard``<br>

Tips!

To get Visual code to behave as explained above press the cogwheel down to the left and select settings, then paste this in the right side, overriding whatever it said previously: { "workbench.startupEditor": "newUntitledFile", "editor.tabSize": 2, "editor.detectIndentation": false, "css.lint.float": "warning" }

Atom also have a auto format all text like Visual Code have, look at the next tip to see how its installed!

To get Atom to work as explained above, open Atoms preferences then go to install and search for atom-beautify. Press the install button and then when its done press the Settings button on the plugin, scroll down to the css part, open the css part up and change "indent size" to 2.

### Style guidelines in code:
1. We use indentation (tab) of 2 spaces (Atom uses this by default).

2. Both Visuals and Atoms (beautify plugin) uses new line after major tags like for example after /head and before body,
    so we have decided to use this as our default standard.

3. In CSS files there should be no indentation at the selector, but at the actual code part there should be 2 spaces,
    like this:<br>
    ``footer {``<br>
    ``  display: none;``<br>
    ``}``

    This is the default behavior in css when Visual is set to 2 spaces as indentation, in Atom Beautify you need to change
    css "indent size" to 2.

4.  CSS should have new line between rules. This is default in Atoms Beautify, Visual does not have any auto format for css.

5.  When adding 'standard-css' - please have a look at mainstyle.css for classes. Keep it DRY!

6.  The website is mainly optimized for Chrome.<br>

### Style guidelines on visual page:
We want to create a unified platform so we have use two font types.<br>
In head we have used ``font-family: "Open Sans"`` <br>
In main we have used ``font-family: "Roboto"``


When we design our page we follow material design guidelines. See exampel at: https://material.io/guidelines/


### Mockups login and passwords

How to get around:

Username: admin || student || teacher
Password (for all): pw
Attendance code: asdf

### How we work in github:
1.  When creating an issue, please describe the problem as much as possible - what it's about and where the error occurs.
    If it's a visual error please feel free to add a snapshot of it.

2.  When you do a pull-request, please validate your code. If you do any major visual changes or redesigns, feel free to add an image.

3.  When pushing, write informative commit-messages in imperative mood.

4. When you want to merge, do a pull request and wait for team-members to approve before you push your merge.
<hr>

**Happy coding, over and out.**

:octopus:Development-information:
<br> Trello - https://trello.com/b/E5xTiPRc/lsm-v1
<br> Github - https://github.com/octogroup

:octopus:For any questions or inquiries: Email: octogruppen@gmail.com

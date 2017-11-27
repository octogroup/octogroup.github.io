# octogroup.github.io
We have create an interactive mockup of a new LMS (Learning Management System). The system is intended to target the Higher Education Schools in order to provide better management and quality assurance of education and to facilitate learning and pedagogy in the teaching.

## Getting Started
These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

### Prerequisites
What things you need to install the software and how to install them:

``apm install atom-beautify``
``npm install standard --global``

### Guidelines:

1.  We use indentation (tab) of 2 spaces (Atom uses this by default).

2.  Both Visuals and Atoms (beautify plugin) uses new line after major tags like for example after /head and before body,
    so we have decided to use this as our default standard.

3.  In CSS files there should be no indentation at the selector, but at the actual code part there should be 2 spaces,
    like this:<br>
    ``footer {
      display: none;
    }``

    This is the default behavior in css when Visual is set to 2 spaces as indentation, in Atom Beautify you need to change
    css "indent size" to 2.

4.  CSS should have new line between rules. This is default in Atoms Beautify, Visual does not have any auto format for css.

5.  When creating an issue, please describe the problem as much as possible - what it's about and where the error occurs.
    If it's a    visual error please feel free to add a snapshot of it.

6.  When you do a pull-request, please validate your code. if you do any major visual changes or redesigns, feel free to add an image.

7.  When pushing, write informative commit-messages in imperative mood.

8.  When adding 'standard-css' - please have a look at mainstyle.css for classes. Don't be DRY!

9.  The website is mainly optimized for Chrome.<br>
<hr>

Use these Linters:
    htmlhint
    csslint
    js-standard

:octopus:Development-information:
Trello - https://trello.com/b/E5xTiPRc/lsm-v1
Github - https://github.com/octogroup

:octopus:For any questions or inquiries: Email: octogruppen@gmail.com

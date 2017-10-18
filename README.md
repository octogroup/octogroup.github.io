# octogroup.github.io
LMS

Rules:

1.  We use indentation (tab) of 2 spaces (Atom uses this by default, look further down on how to make Visual Code do the same).

2.  Both Visuals and Atoms (beautify plugin) uses new line after major tags like for example after /head and before body,
    so we have decided to use this as our default standard.

3.  In Css files there should be no indentation at the selector, but at the actual code part there should be 2 spaces,
    like this:
    footer {
      display: none;
    }
    This is the default behavior in css when Visual is set to 2 spaces as indentation, in Atom Beautify you need to change
    css "indent size" to 2.

4.  Css should have new line between rules. This is default in Atoms Beautify, Visual does not have any auto format for css.


Tips!

1.  To get Visual code to behave as explained above press the cogwheel down to the left and select settings,
    then paste this in the right side, overriding whatever it said previously:
{
    "workbench.startupEditor": "newUntitledFile",
    "editor.tabSize": 2,
    "editor.detectIndentation": false,
    "css.lint.float": "warning"
      }

2.  Atom also have a auto format all text like Visual Code have, look at the next tip to see how its installed!

3.  To get Atom to work as explained above, open Atoms preferences then go to install and search for atom-beautify.
    Press the install button and then when its done press the Settings button on the plugin, scroll down to the css part,
    open the css part up and change "indent size" to 2.

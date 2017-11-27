# octogroup.github.io
Learning Management System (LMS)

Guidelines:

1.  We use indentation (tab) of 2 spaces (Atom uses this by default).

2.  Both Visuals and Atoms (beautify plugin) uses new line after major tags like for example after /head and before body,
    so we have decided to use this as our default standard.

3.  In CSS files there should be no indentation at the selector, but at the actual code part there should be 2 spaces,
    like this:
    footer {
      display: none;
    }

    This is the default behavior in css when Visual is set to 2 spaces as indentation, in Atom Beautify you need to change
    css "indent size" to 2.

4.  CSS should have new line between rules. This is default in Atoms Beautify, Visual does not have any auto format for css.

5.  When creating an issue, please describe the problem as much as possible - what it's about and where the error occurs.
    If it's a    visual error please feel free to add a snapshot of it.

6.  When you do a pull-request, please validate your code. if you do any major visual changes or redesigns, feel free to add an image.

7.  When pushing, write informative commit-messages in imperative mood.

8.  When adding 'standard-css' - please have a look at mainstyle.css for classes. Don't be DRY!

9.  The website is mainly optimized for Chrome.

Use these Linters:
    htmlhint
    csslint
    js-standard

Development-information:
Trello - https://trello.com/b/E5xTiPRc/lsm-v1
Github - https://github.com/octogroup

For any questions or inquiries: Email: octogruppen@gmail.com

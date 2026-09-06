07 - Relative path and Absolute path:

- When building web pages, we often need to link to different files.
For instance a reference to a css file to add styles, or embed an image to the page, or linking to an external page.

Absolute path - Refers to an external resource on a different web server. Can be a complete URL, with its
scheme, domain name, port number, and path to the file.
- Additionally, you may link to files within the same project, starting with a leading foward slash (/).
- Thus, the path starts from the root of the project, as the browser already has the document's own URL, to fill in missing parts.
- Only works if you use the live server extension to load the page in the browser.

EX: <a href"https://google.com">Google</a>

Relative path - A shortcut that points to a file based on your current folder location.
- Thus, does not use the full address from the main root.
- Thus, the pathing can be universal in any file you use, due to the shortcut pathing.

EX: <a href"about.html">about</a>


- Most use relative path to link to files within the same project.
- Use absolute path to link to other resources.



Use (..) to leave a one level of the directory.


03 - HTML Head Section Intro:

The head of an HTML docuemnt is not displayed in the web browser when the page is loaded.
- Instead, it contains metadata (data of data) info such as the page <title>.
- Thus, the info in the head is used to render the HTML doc correctly.



What is the HTML Head?
<!doctype html>
<html lang="en-US">
  <head>
    <meta charset="utf-8" />
    <title>My test page</title>
  </head>
  <body>
    <p>This is my page</p>
  </body>
</html>


- Found in the <head> element of an HTML document, the head section contains metadata about the document, 
    such as its title, character encoding, and links to stylesheets or scripts. The information in the head is 
    not displayed directly on the webpage but is essential for proper rendering and functionality of the page.


NOTE: In larger pages, the head can become quite large and complex, containing multiple meta tags, links to 
external resources, and scripts. It is important to keep the head organized and only include necessary 
information to ensure optimal performance and maintainability of the webpage.





Adding a Titile:
- The <title> element is metadata that specifies the title of the HTML document. It is displayed in the 
    browser's title bar or tab and is important for SEO (Search Engine Optimization) as it helps search 
    engines understand the content of the page.

test_00.html
- This this html file, the <title> element is used to set the title of the page to "Aegis". 
This title will appear in the browser's title bar or tab when the page is loaded.




Metadata: The <meta> element:
- Data that describes other data is called metadata. The <meta> element is used to provide metadata about the 
HTML document, such as character encoding, author, description, and keywords. It is placed within the <head> \
section of the document and is not displayed on the webpage.


As seen in test_00.html file: <meta charset="utf-8" />
- The <meta charset="utf-8" /> tag specifies the character encoding for the HTML document. UTF-8 is a widely 
used character encoding that supports a large range of characters from different languages, ensuring that the 
text on the webpage is displayed correctly.

- For instance if your character encoding is set up to ISO-8859-1, the character set for the Laatin alphabet,
your page rending may apppear incorrectly. But, depending on your browser, it may still render correctly. 
However, it is best practice to use UTF-8 encoding to avoid any potential issues with character display, 
especially for internationalization and multilingual support.






Adding an Author and Description:
- Many <meta> elements include name and content attributes to provide additional information about the document.
For example, you can specify the author of the page and a brief description of its content.

EX:
<meta name="author" content="Chris Mills" />
<meta
  name="description"
  content="The MDN Web Docs Learning Area aims to provide
complete beginners to the Web with all they need to know to get
started with developing websites and applications." />

- The author meta tag specifies the name of the author of the document, while the description meta tag provides 
a brief summary of the page's content. This information can be used by search engines and other tools to better 
understand and index the page.



Other Types of Metadata:
- Across the web, there are many other types of metadata that can be included in the <head> section of an HTML 
document. For instance, there will be websites with proprietary metadata that is used for specific purposes, 
such as social media sharing, analytics tracking, or custom functionality.

EX:
<meta
  property="og:image"
  content="https://developer.mozilla.org/mdn-social-share.png" />
<meta
  property="og:description"
  content="The Mozilla Developer Network (MDN) provides
information about Open Web technologies including HTML, CSS, and APIs for both websites
and HTML Apps." />
<meta property="og:title" content="Mozilla Developer Network" />

- The above example shows Open Graph (og) metadata, which is used by social media platforms to display rich 
content when a webpage is shared. The og:image tag specifies the image to be displayed, og:description provides
 a brief description of the page, and og:title sets the title for the shared content.




 Adding Custome Icons to your Site:
 - You can add a custom icon to your website by using the <link> element in the <head> section of your HTML document.
The most commonly used icon is the favicon (favorites icon), which is a small icon that appears in the browser tab next to the page title.

EX:
<link rel="icon" href="/favicon.ico" type="image/x-icon" />

- A <link> element with the rel attribute set to "icon" specifies the location of the favicon file. 
The href attribute points to the path of the icon file, and the type attribute specifies the MIME type of the icon file.


Additionally, the size and format of the favicon can vary, but it is typically a square image with dimensions of
16x16 pixels or 32x32 pixels.
EX:
<!-- iPad Pro with high-resolution Retina display: -->
<link
  rel="apple-touch-icon"
  sizes="167x167"
  href="/apple-touch-icon-167x167.png" />
<!-- 3x resolution iPhone: -->
<link
  rel="apple-touch-icon"
  sizes="180x180"
  href="/apple-touch-icon-180x180.png" />
<!-- non-Retina iPad, iPad mini, etc.: -->
<link
  rel="apple-touch-icon"
  sizes="152x152"
  href="/apple-touch-icon-152x152.png" />
<!-- 2x resolution iPhone and other devices: -->
<link rel="apple-touch-icon" href="/apple-touch-icon-120x120.png" />
<!-- basic favicon -->
<link rel="icon" href="/favicon.ico" />
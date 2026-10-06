02.1: The <head> as a metadata container

- The <head> element's content is not displayed on the page, instead contains metadata about the document.
For instance the following incorporates the <meta> element with the charset attribute, alongside the <title> element.
<head>
  <meta charset="utf-8" />
  <title>My test page</title>
</head>


----------------------------------------------------------------------------------------------------------------------------------



02.2: <title> vs. <h1>

- The <title> elment is used in regards to the browser tab.
Is metadata to represent the title of the overall HTML document.

- However the <h1> element is used for the level heading in the body content.
Used once per page for the page's headline.


----------------------------------------------------------------------------------------------------------------------------------



02.3: <meta> Element

- Metadata is data that describes data.
In HTML, the <meta> element is offical representation of this, alongside other types of metadata.

In the following instance:
<meta charset="utf-8" />

- The element specifies the document's character encoding, the set the document is allowed to use.
In this case "utf-8" includes any character from most human languages to be displayed on the web page.

- There are additional attribute values to encode such as "ISO-8859-1" for Latin.



Adding An Author and Description
- The <meta> element can incorporate "name" and "content" attributes.
"name" - specifies the type of information it contains.
"content" - specifies the actual meta content.

The following instance incorporates the attributes to define the author of the page, alongside providing a concise description of the page

<meta name="author" content="Chris Mills" />
<meta
  name="description"
  content="The MDN Web Docs Learning Area aims to provide
complete beginners to the Web with all they need to know to get
started with developing websites and applications." />

NOTE:
- Specification of description with keywords of the relevant content, have more chances to appear in relevant searches from search
engines.

For instance the previous example, if searched with the keyword "MDN Web Docs" would be found with the description
<meta> and <title> element content used in the search result.


Other Types of metadata:
<meta
  property="og:image"
  content="https://developer.mozilla.org/mdn-social-share.png" />
<meta
  property="og:description"
  content="The Mozilla Developer Network (MDN) provides
information about Open Web technologies including HTML, CSS, and APIs for both websites
and HTML Apps." />
<meta property="og:title" content="Mozilla Developer Network" />

----------------------------------------------------------------------------------------------------------------------------------



02.4: Favicons and <link>

- Favicon or favorites icon is the references it used in the favorites or bookmarks lists in browsers.
- Basically the small icon found at the start of the browser tab.

- Can be added to your page by:
1) Saving it in a supported format (.ico, .gif, or .png) inside the website folder structure.
2) Adding a <link> element to the HTML's <head> block to reference the path to the favicon file

<link rel="icon" href="/favicon.ico" type="image/x-icon" />
The instance above incorporates:
1. <link>
- The link element to connect the current HTML doc to an external resource.
2. rel="icon"
- Defines the relationship between the HTML page and the linked source. In this case tells the browser that the files is
the site's visual icon. NOTE: The attribute values are predefined.
3. href="/favicon.ico"
- Provides the hypertext reference or file path of where the icon file is stored.
4. type="image/x-icon"
- An attribute to define the type of content linked to, in this case it would be the MIME type file format.


Additionally, you can include different icons for different formats of screen sizes

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


NOTE: The <link> element should be implemented in the <head> element.

----------------------------------------------------------------------------------------------------------------------------------



02.5: Connecting CSS and JavaScript

- CSS (Cascading Style Sheets) is to employ the appearance.
- JavaScript to provide the interactive functionality, like videoes, maps, games, and etc.

- Commonly applied in the web page with the <link> element and <script> element.
: Both element should be incorporated at the <head> element.

- <link> element only takes two attributes:
<link rel="stylesheet" href="my-css-file.css" />

- <script> element requires the "src" attribute containing the path of the JS script to load, and "defer" a boolean attribute
to instruct the browser to load the JS script after parsing HTML.
<script src="my-js-file.js" defer></script>


----------------------------------------------------------------------------------------------------------------------------------



02.6: lang on <html>

- Recommended to set the language of your page, with the addition of the "lang" attribute in the opening HTML tag.

<html lang="en-US">
  …
</html>

- Useful, as the HTML document can be indexed efficiently by search engines if its language is set.

- Additionally, you can set subsections of you document to be recognized as different languages.
The following instances sets the Japanese language section to be recognized as Japanese:
<p>Japanese example: <span lang="ja">ご飯が熱い。</span>.</p>
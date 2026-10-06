01-basic-html-syntax

01.1: Introduction to HTML
- What HTML is and its purpose.

- Known as HyperText Markup Language, it organizes the structure of the web page.
Consisting of series of "elements" to enclose parts of content to alter.


- Ends with the (.html) file extension. The most common document would be (index.html) to contain a websites's home page content.
With various subfolders having thier own (index.html) file.


----------------------------------------------------------------------------------------------------------------------------------



01.2: HTML Elements and Tags
- Opening tags, closing tags, content, and elements

- Opening tag,          - Content,                  - Closing tag
<p>                     My cat is very grumpy,      </p>

- Element
<p>My cat is very grumpy</p>


: The opening tag consist of the name of the element in this instance it would be (p) for the paragraph element.
With the opening  angle brackets indicating the beginning of the paragraph text.

: The content is found within the element being wrapped around, in this instance its "My cat is very grumpy".

: The closing tag has the forward slash prior to the element name THAT must be INCLUDED, indicating the end of element.


----------------------------------------------------------------------------------------------------------------------------------



01.3: Nesting HTML Elements
- Parent/child structure and correct nesting

- Basically the practice of placing elements within other elements.

: For instance the following, wraps a single word in the <strong> element (emphasis on the content, rather than just bold format),
meanwhile the whole content is wrapped as a paragraph element.

<p>My cat is <strong>very</strong> grumpy.</p>


----------------------------------------------------------------------------------------------------------------------------------



01.4: Void Elements
- Elements that cannot contain HTML content

- Essentially, does not follow the pattern of an opening tag, content, then a closing tag.
Just a single tag, used to insert/embed something into the document.


:For instance the <br> element produces a line break in text.

<p>
  This is a single paragraph, but we are going to <br>break it onto two lines.
</p>


----------------------------------------------------------------------------------------------------------------------------------



01.5: HTML Attributes
- Attribute names, values, and purpose.

<p class="editor-note">My cat is very grumpy</p>
- Denoted with the use of the "class" attribute is an instance of an attribute.


- Basically an indicator/signal about the element, that can be used to target the element with styles (CSS) or
scripting info (Javascript).

Guidlines for Attributes:
: Attributes should be separated by a space between the element name and other attributes.
: Attribute names are followed by the equals sign(=).
: Attribute value should be wrapped with opening and closing quote marks(" ").


----------------------------------------------------------------------------------------------------------------------------------



01.6: Boolean Attributes
- Attributes representing true/false states

- Basically an HTML attribute without values.
: When added its value is set to true.
: However, if not included its set to false.


: For instance the following demonstrates the "disabled" attribute used in the "<input>" element to stop the
user from entering information.

<label for="first-input">This input is disabled</label>
<input id="first-input" type="text" disabled="disabled" />
<br />

: Moreover, the disabled attribute can be set without a value, with the same result as the first.

<label for="second-input">This input is also disabled</label>
<input id="second-input" type="text" disabled />
<br />

: Now for a non-disabled "<input>" element, just omit the attribute, as remember it will be set to false.

<label for="third-input">This input isn't disabled; you can type into it</label>
<input id="third-input" type="text" />


----------------------------------------------------------------------------------------------------------------------------------



01.7: Attribute Quotation Rules
- Quoting values and avoiding malformed markup
- You may omit the quotes from attribute values, however majority of the time it can break you markup. Thus always include quote marks.


: For instance the following uses an "<a>" anchor element (encloses text and converts it into links), the "href" attribute
specifies the URL the link should point to. Thus can work wihtout quotes.

<a href=https://www.mozilla.org/>favorite website</a>

: However, attributes with values with spaces included, makes the browser interpret it as three separate attributes.
- For instance the following should be read as a "title" attribut with the value The, and two boolean attributes Mozilla and homepage.
- As a resuilt errors and random behavior can arise

<a href=https://www.mozilla.org/ title=The Mozilla homepage>favorite website</a>



Single or Double Quotes?
- Your free to choose between single or double, its a matter of preference, however you must be consistent.
The following instance will operate normally either one:

<a href='https://www.example.com'>A link to my example.</a>

<a href="https://www.example.com">A link to my example.</a>

- HOWEVER make sure you don't combine quotes:
<a href="https://www.example.com'>A link to my example.</a>


- Or use quote marks inside inside another quote:
<a href="https://www.example.com" title="An "interesting" reference">A link to my example.</a>

- Instead use the (&quot;) command to insert quotes to your content, without using the actual quotes:
<a href="https://www.example.com" title="An &quot;interesting&quot; reference">A link to my example.</a>


----------------------------------------------------------------------------------------------------------------------------------



01.8: Basic HTML Doucment Structure
- DOCTYPE, html, head, meta, title, and body

- The following instance is a simple webpage structure

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

In sequence the following are used:

1) <!doctype html>
- Must be included at the top of all webpages, acts as links to set of rules the html page must follow.

2) <html></html>
- An element that wraps all the content of the page, known as the ROOT element.
Also the "lang" attribute enables screen reading technology to determine proper language to announce.

3) <head></head>
- An element, that contains information aside from the user can see. Background information such as keywords, descriptions,
and more style declarations to implore.

4) <meta charset="utf-8">
- A void element, that represents metadata (data that describes data)
Additionally the "charset" attribute specifies the character encoded into the document. In this instance "utf-8" includes
characters from most human written languages.

5) <title></title>
- An element, that sets the title of the page shown in the browser tab or page tab that's loaded in.

6) <body></body>
- An element, that contains all the content to be displayed on the page, can be images, videos, text, etc...


----------------------------------------------------------------------------------------------------------------------------------



01.9: HTMML Whitespace and Indentation
- How whitespace is handled and how indentation improves readability 

- An optional implementation that does not affect the structure of the content.
: The following instance is the same

<p id="noWhitespace">Dogs are silly.</p>

<p id="whitespace">Dogs
    are
        silly.</p>


- HOWEVER, the exception would be the <pre></pre> element that preformat text exactly as typed, thus all whitespace structure
would be implemented.


Indentation
- Code formatting style is dependent on yourself, but typically in nested elements, you indent after every element:

<section>
  <div>
    <p>A paragraph of content.</p>
  </div>
</section>


----------------------------------------------------------------------------------------------------------------------------------



0.1.10: HTML Character References
- Representing special characters such as < and &

- <, >, ", ', and & are special characters used in html syntax.

Thus to use these characters as text, use character references to represent them:
: &lt;
- for < (Less Than)

: &gt;
- for > (Greater Than)

: &quot;
- for "

: &apos;
- for '

: &amp;
- for &

And many more special characters with their references: https://developer.mozilla.org/en-US/docs/Glossary/Character_reference

- As a reminder, these character references are just the characters, thus no whitespace is used.
As the following instance attempts to print the <p> element, but fails initially and creates a new paragraph.
BUT, the next <p> element is properly printed using character references to print <p>.
<p>In HTML, you define a paragraph using the <p> element.</p>

<p>In HTML, you define a paragraph using the &lt;p&gt; element.</p>


----------------------------------------------------------------------------------------------------------------------------------



0.1.11: HTML Comments
- Writing comments that are ignored by the browser's rendering

- Invisble to the user, but useful for documentation of your code.

: Written with between the wrapper: <!-- and -->
The following instance demonstrates the implementation:

<p>I'm not inside a comment</p>

<!-- <p>I am!</p> -->


----------------------------------------------------------------------------------------------------------------------------------
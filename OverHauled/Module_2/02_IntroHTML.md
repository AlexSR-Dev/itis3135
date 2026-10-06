02 - IntroHTML

HTML - HyperText Markup Language
- HTML document is a collection of elements.
- Identified with tags.
Syntax: <tag>content</tag>
EX: <h1>Intro</h1>

- Do not skip closing tags.
- Browser ignores misspelled tags with no indication.
- Tags are case insensitive, general convention is lowercase tags.


Empty Elements
- No content.
- Has only an opening tag, but not closing tag.

- <br> defines a line break.
- <hr> defines a horizontal rule.
- <img> defines an image.


Attributes:
- An element may include attributes in the opening tag.
- Each attribute is defined as a name value pair.
- Value is enclosed by a pair of single/double quotes.
Syntax: <tag attribute1="value1" attribute2="value2" ...>content</tag>

EX: <a href="https://www.google.com">Google</a>
- Anchor tag with an href attribute.


HTML Document Structure:
<!DOCTYPE html>             - Document type declaration is requied for HTML5.
    <html>                  - Root element of an HTML page.
        <head>
            Information about the document
        </head>
        <body>
            Content of the document
        </body>
    </html>





Basic HTML Syntax:

Tags:
- <p></p> - Paragraph
- <h1></h1> - Heading 1

Most common HTML file is index.html. That contains a website's home page. It is the default page that is loaded when a user visits a website.
NOTE: HTML is not case-sensitive, but it is a good practice to use lowercase for tags and attributes.



Anatomy of an HTML Element:
<p>My dog is Awesome!</p>
- This is an element.
- Consists of an opening tage <p>, marking the start of the element, and a closing tag </p>, marking the end of the element.
- Failure to include a closing tag will result in an error.




Refer to the following URL for more elements: https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements




Nesting Elements:
- Elements can be nested inside other elements.
<p>My dog is <strong>Awesome!</strong></p>
- The <strong> element is nested inside the <p> element.
- Careful attention must be paid to the order of opening and closing tags when nesting elements. The following is incorrect:
<p>My dog is <strong>Awesome!</p></strong>



Void Elements:
- Void elements are elements that do not have any content and do not require a closing tag.
- Examples of void elements include:
  - <br> (line break)
    - <hr> (horizontal rule)
EX: <p>My dog is Awesome!<br>He is very cute.</p>



Attributes:
- Attributes provide additional information about an element.
- Attributes are always specified in the opening tag.
- The class attribute is used to specify one or more class names for an element.
- The id attribute is used to specify a unique id for an element.

An attribute should have:
- Space between the tag name and the attribute name.
- A equals sign (=) between the attribute name and its value.
- An attribute value enclosed in quotes (single or double).
EX: <p class="dog">My dog is Awesome!</p>



Boolean Attributes:
- Boolean attributes are attributes that can only have one value, which is the name of the attribute itself.
- If a boolean attribute is present, it is considered to be true.
- If a boolean attribute is not present, it is considered to be false.
EX: <label for="dog">My dog is Awesome!</label>
    <input id="dog" type="checkbox" checked>

Meanwhile, the checked attribute is a boolean attribute that indicates whether the checkbox is checked or not. If the checked attribute is present, 
the checkbox will be checked. If it is not present, the checkbox will be unchecked.




Omitting Quotes Around Attribute Values:
- In HTML, it is possible to omit quotes around attribute values if the value does not contain any spaces or special characters.
However, it is generally recommended to always use quotes around attribute values for better readability and to avoid potential issues.

EX: <a href=https://www.google.com>Google</a>  <!-- This is valid, but not recommended -->
- As additional attribute values are added, it is best to use quotes to avoid confusion and errors.



Single or Double Quotes:
- In HTML, both single quotes (') and double quotes (") can be used to enclose attribute values.
- It is important to be consistent in the use of quotes throughout the document.

To use quotes within an attribute value, you can use the opposite type of quote to enclose the value.
EX: <p title="My dog's name is 'Buddy'">My dog is Awesome!</p>
Output: My dog's name is 'Buddy'

Additionally, you can use character references to represent quotes within attribute values.
EX: <p title="My dog's name is &quot;Buddy&quot;">My dog is Awesome!</p>
Output: My dog's name is "Buddy"




Anatomy of an HTML Document:
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

1. <!doctype html> - Document type declaration is required for HTML5.
2. <html></html> - Root element of an HTML page, wrapping all the content of the page.
3. <head></head> - Contains meta-information about the document, such as the title and character encoding.
4. <meta charset="utf-8" /> - Specifies the character encoding for the document. In this case, it is set to UTF-8, which is a widely used character 
encoding that supports a wide range of characters from different languages.
5. <title></title> - Specifies the title of the document, which is displayed in the browser's title bar or tab.
6. <body></body> - Contains the content of the document that is displayed in the browser window. In this case, it contains a single paragraph 
element with the text "This is my page".




Character References: Including Special Characters in HTML:
In HTML, the characters <, >, and & have special meanings and cannot be used directly in the content of an HTML document. 
Instead, they must be represented using character references.
- Special codes for these characters are:
  - < is represented as &lt;
  - > is represented as &gt;
  - & is represented as &amp;
  - " is represented as &quot;
  - ' is represented as &apos;
  EX: <p>My dog is Awesome! &lt;3</p>
  Output: My dog is Awesome! <3




  HTML Comments:
- Comments are used to add notes or explanations within the HTML code that are not displayed in the browser.
- Comments are enclosed within <!-- and -->.
EX: <!-- This is a comment -->

You can also comment out multiple lines of code by wrapping them in <!-- and -->.
EX: <!-- This is a comment -->
<!-- This is another comment -->
 
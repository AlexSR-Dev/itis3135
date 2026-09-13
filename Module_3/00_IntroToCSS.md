00 - IntroToCSS:

CSS - Cascading Style Sheets 
- Controls the HTML elements appearance in the browser.


CSS Syntax Basics:
- You define rules by specifying groups of styles to be applied to a particular element or groups of elements on your web page.
EX:
selector {property : value;}

- The CSS rules opens with a selector. That describes what elements in a document the rule with match, for instance <p>, <div>, etc.
- Include curly braces ({}) to create a declaration block, of which can contain multiple declarations each separated with (;) semicolons.
- Property, is a characteristic (like color) whose assoicated value defines one aspect of how the browser should display the element.


EX:
h1 {
  color: red;
  font-size: 2.5em;
}

p {
  color: aqua;
  padding: 5px;
  background: midnightblue;
}

All h1 element will apply a red color property, alongside a 2.5em font size, within that declaration.
Meanwhile, all the p element will apply a aqua color, with padding, and background color to the p element declaration.







Adding CSS to our Document:
- To tell the HTML document regarding the newly created CSS rules, there are three different ways:
• External Stylesheets
• Internal Stylesheets
• Inline Styles



External Stylesheets:
- Contains CSS in a separate file with a .css extension.
- Most common and useful manner of implementing CSS to a document.
- An apply a single CSS file to multiple web pages.

01_cssTest.html
styles.css


- The html file will require a link to the .css file, specifically the <head> section of the html file.
<link rel="stylesheet" href="styles.css" />

- The <link> element indicates the browser that we have a stylesheet, using the "rel" attribute, and the location of the
stylesheet as the value of the "href" attribute.


Locating Stylesheets in different places:
- The previous <link> example was if the CSS file is in the same folder as the HTML document.
- Thus, for different placement, adjust the path, (explained in HTML images):

<!-- In a subdirectory called styles in the current directory -->
<link rel="stylesheet" href="styles/style.css" />

<!-- In a subdirectory called general, which is in a subdirectory called styles, in the current directory -->
<link rel="stylesheet" href="styles/general/style.css" />

<!-- Go back one directory level, then in a subdirectory called styles -->
<link rel="stylesheet" href="../styles/style.css" />







Internal Stylesheets:
- Contains the <style> elements that goes inside the HTML <head> section.

EX: <style>p {color: purple;}</style>
- Apply it in the <head> section.
01_cssTest.html

- This statement altered every <p> element in the HTML file.
- Useful in a content management system.
- However, for sites wiht more than one page, this becomes inefficient as changes to the CSS style must be applied manually to each
html files <head> section







Inline Styles:
- CSS declaration that affect a single HTML element, contained with a "style" attribute.

EX: <span style="color: purple; font-weight: bold">span element</span>

- Avoid using this style as its bad practice.
- Extremely difficult to read and maintain for changes in a broader scope of projects.
- Utilize for experimental testing of the environment.




Using Common Selectors:

Element Selector: Directly matches an HTML element name
EX: p {color: green;}

- To target multiple selectors at the same time, separate the selectors with a comma:
p, li {color: green;}



Adding a Class: To select a subset of the elements without changing the others.

1. Implement the "class" attribute to the second list item:
<ul>
  <li>Item one</li>
  <li class="special">Item two</li>
  <li>Item <em>three</em></li>
</ul>

2. In your CSS, you can target the class of special by creating a selector that starts with a period:
.special {
  color: orange;
  font-weight: bold;
}

3. Save and refresh to see the results.
- Thus, you can now apply the class of "special" to other elements to have the same style.
Try applying it to the styles.css file.



Styling Things Based on Their Location in a Document:
For instance in 01.cssTest.html there are two <em> elements, thus to select only an <em> that located in the <li> element,
you can use a selector called the "descendant combinator", which is a blank space between two other selectors:
EX:
li em {
  color: rebeccapurple;
}

- This selector will select any <em> element that is a descendant of an <li>.

- You may also use a "next-sibling combinator" (+) between the selectors, that selects an element that directly follows another specific 
element, thus the following applies to any <p> that is follow after a <h1> element.
EX:
h1 + p {
  font-size: 200%;
}
Try applying it to the styles.css file.



Styling Things Based on State:
- An example would be styling links, thus we need to target the <a> anchor element. This has different states on whether it has been
unvisited, visited, being hovered over, focused via the keyboard, of clicking it.
These states can be targted with CSS:
EX:
a:link {
  color: pink;
}

a:visited {
  color: green;
}

- To change the link's appearance by hovering over it:
a:hover {
  text-decoration: none;
}
Try applying it to the styles.css file.




Combining Selectors and Combinators:
- Combine multiple selectors and combinators together:
/* selects any <span> that is inside a <p>, which is inside an <article>  */
article p span {
}

/* selects any <p> that comes directly after a <ul>, which comes directly after an <h1>  */
h1 + ul + p {
}

EX:
h1 + p .special {
  color: yellow;
  background-color: black;
  padding: 5px;
}

- This style any element with a class of "special", which is inside a <p> element, which also comes just after a <h1> element.
Thus targeting:<span class="special">span element</span>, found in 01_cssTest.html





Other CSS Syntax Features:
Functions:
- The calc() function, performs simpel math within CSS:
HTML file:
<div class="outer"><div class="box">The inner box is 90% - 30px.</div></div>

CSS file:
.outer {
  border: 5px solid black;
}

.box {
  padding: 10px;
  width: calc(90% - 30px);
  background-color: rebeccapurple;
  color: white;
}

- Try it in 01_cssTest.html



Transform Functions:
- The various values for the "transform" property, that allows you to rotate, scale, skew, or translate an element.
EX:
HTML:
<div class="box"></div>

CSS:
.box {
  margin: 30px;
  width: 100px;
  height: 100px;
  background-color: rebeccapurple;
  transform: rotate(0.8turn);
}



@rules:
CSS @rules "at-rules" provide instructions for how CSS should behave.
- A common @rule is @medi, which is used to create media queries, conditional logic for applying CSS styling
EX: Defines a pink background for the <body> element. But, the media query follows that sets a blue background on the <body> element
if the browser viewport is wider than 30cm.

body {
  background-color: pink;
}

@media (width >= 30em) {
  body {
    background-color: blue;
  }
}




Shorthand Properties:
- Properties like font, background, padding, border, and margin.
- As they set several values in a single line.
EX:
/* In 4-value shorthands like padding and margin, the values are applied
   in the order top, right, bottom, left (clockwise from the top). There are also other
   shorthand types, for example 2-value shorthands, which set padding/margin
   for top/bottom, then left/right */
padding: 10px 15px 15px 5px;

Similar to:
padding-top: 10px;
padding-right: 15px;
padding-bottom: 15px;
padding-left: 5px;


In a single line:
background: red url("bg-graphic.png") 10px 10px repeat-x fixed;

Similar to these five lines:
background-color: red;
background-image: url("bg-graphic.png");
background-position: 10px 10px;
background-repeat: repeat-x;
background-attachment: fixed;


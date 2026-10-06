04 - The Box Model:

Block and Inline Boxes:
- In CSS there are several types of boxes that fit into the categories of block boxes and inline boxes.
- Each referring to its behavior of page flow and relation to other boxes on the page.

- Boxes have an inner display type and outer display type.


- By using the "display" property:
    - A box with a display value of "block" allows:
        - Box to break onto a new line.
        - Width and Hieght properties are respected.
        - Padding, margin and border will cause other elements to be pushed away from the box.
        - If width isn't specified, the box will extend in the line direction to fill the space available in its container.
    
- In HTML elements, like <h1> or <p1>, uses block as their outer display type by default.

    - A box with a display value of "inline" allows:
        - Box not break onto a new line.
        - Width and Hieght properties and top and bottom margins will have no effect.
        - Top and bottom padding and borders will change the size of the box without affecting the position of surrounding content, causing overlapping.
        - Left and right padding, margins, and borders will affect the position of surrounding inline content.


- HTML element like <a>, <span>, <em>, and <strong> uses inline as their outer display type by default.



Inner and Outer Display Types:
Outer display types - Like "block" and "inline" affect how the box is laid out in relation to other boxes around it.
Inner display types - dicates how elements inside that box are laid out.

- You can change the inner display type by setting an inner display value "display: flex;". The element uses the outer display type block
but this changes the inner display type to flex. Thus any direct children of thix box will become flex items.



Examples of Different Display Types:
- A <p> with a border added in CSS. By default renders as a block box. Starts on a new line and extends horizontally to fill the space.

- A list, using "display: flex", uses a flex layout for the children of the container, which are flex items and laid out in a row by default. The list a blcok box and the paragraph expands to the full container width and breaks onto a new line.

- A block level <p> inside are two <span>. These elements would be inline, but ont of the elements has a class of block and gets set to
"display: block",  thust that single word starts on a new line that spans the full witdh of its parent.

HTML:
<p>I am a paragraph. A short one.</p>
<ul>
  <li>Item One</li>
  <li>Item Two</li>
  <li>Item Three</li>
</ul>
<p>
  I am another paragraph. Some of the <span class="block">words</span> have been
  wrapped in a <span>span element</span>.
</p>

CSS:
body {
  font-family: sans-serif;
}
p,
ul {
  border: 2px solid rebeccapurple;
  padding: 0.2em;
}

.block,
li {
  border: 2px solid blue;
  padding: 0.2em;
}

ul {
  display: flex;
  list-style: none;
}

.block {
  display: block;
}



The following displays the behavior of ineline elements:
- <span> elements in the first <p> are inline by default and do not force line breaks.

- The <ul> elements set to "display: inline-flex" creates an inline box containing some flex items.

- The two <p> are both set to "display: inline".  The inline flex container and paragraphs all run together on one line rather than
breaking onto new lines.

HTML:
<p>
  I am a paragraph. Some of the
  <span>words</span> have been wrapped in a <span>span element</span>.
</p>
<ul>
  <li>Item One</li>
  <li>Item Two</li>
  <li>Item Three</li>
</ul>
<p class="inline">I am a paragraph. A short one.</p>
<p class="inline">I am another paragraph. Also a short one.</p>

CSS:
body {
  font-family: sans-serif;
}
p,
ul {
  border: 2px solid rebeccapurple;
}

span,
li {
  border: 2px solid blue;
}

ul {
  display: inline-flex;
  list-style: none;
  padding: 0;
}

.inline {
  display: inline;
}





CSS Box Model:
- Applies to block boxes and defines how the different parts of a box - margin, padding, and content work together to create a box.
Inline boxes uses some of the behavior defined in the bodx model.


Parts of a Box:
- Content box: The area where your content is displayed; size it using properties like width and height.

 - Padding box: The padding sits around the content as white space; size it using padding and related properties.

- Border box: The border box wraps the content and any padding; size it using border and related properties.

- Margin box: The margin is the outermost layer, wrapping the content, padding, and border as whitespace between this box and other elements; size it using margin and related properties.



Standard CSS Box Model:
- With the width and height property values it define the content box and additional properties like padding accumulate to the total size.
CSS:
.box {
  width: 350px;
  height: 150px;
  margin: 10px;
  padding: 25px;
  border: 5px solid black;
}

The actual space used by the box would be 410px wide (350 + 25 +  25 + 5 + 5) and 210px high (150 + 25 + 25 + 5 + 5)



The Alternative CSS Box Model:
- Any width is the width of the visible box on the page. The content area width is that width minus the width for the padding and border.
Useful to exclude the border and padding to get the real size of the box:

CSS:
.box {
  box-sizing: border-box;
}

CSS:
.box {
  width: 350px;
  height: 150px;
  margin: 10px;
  padding: 25px;
  border: 5px solid black;
}

- Now the actual space used by the box is 350px in the inline direction and 150px in the block direction.
- To use alternative box model for all yor elements, set the box-sizing property on the <html> element and set all other
elements to inherit that value:
CSS:
html {
  box-sizing: border-box;
}

*,
*::before,
*::after {
  box-sizing: inherit;
}




Margins, padding, and borders:
Margin - Invisible space around the box, pushes other elements away from the box. Can be postive or negative values.
Negative set on one side of the box can cause overlap.

Use the "margin" property or equivalent longhand properties:
- margin-top
- margin-right
- margin-bottom
- margin-left

EX:
HTML:
<div class="container">
  <div class="box">Change my margin.</div>
</div>

CSS:
.container {
  border: 5px solid blue;
  margin: 40px;
}

.box {
  border: 5px solid rebeccapurple;
  background-color: lightgray;
  padding: 10px;
  height: 100px;
  /* try changing the margin properties: */
  margin-top: -40px;
  margin-right: 30px;
  margin-bottom: 40px;
  margin-left: 4em;
}



Margin Collapsing:
Depending on whether two elements whose margins touch have positive or negative margins, the results will be different:
- Two positive margins will combine to become one margin. Its size will be equal to the largest individual margin.
- Two negative margins will collapse and the smallest (furthest from zero) value will be used.
- If one margin is negative, its value will be subtracted from the total.

Example below, we have two paragraphs. The top paragraph has a margin-bottom of 50 pixels, the other has a margin-top of 30 pixels. The margins have collapsed together so the actual margin between the boxes is 50 pixels and not the total of the two margins.

You can test this by setting the margin-top of paragraph two to 0. The visible margin between the two paragraphs will not change — it retains the 50 pixels set in the margin-bottom of paragraph one. If you set it to -10px, you'll see that the overall margin becomes 40px — it subtracts from the 50px.

HTML:
<div class="container">
  <p class="one">I am paragraph one.</p>
  <p class="two">I am paragraph two.</p>
</div>

CSS:
.container {
  border: 5px solid blue;
  margin: 40px;
}

p {
  border: 5px solid rebeccapurple;
  background-color: lightgray;
  padding: 10px;
}
.one {
  margin-bottom: 50px;
}

.two {
  margin-top: 30px;
}




Borders:
Drawn between the margin and the padding of a box. If you are using the standard box model, the size of the border is added to the width \
and height of the content box.

For styling borders, there are a large number of properties — there are four borders, and each border has a style, width, and color that we might want to manipulate.
You can set the width, style, or color of all four borders at once using the border property.

To set the properties of each side individually, use:
border-top
border-right
border-bottom
border-left

To set the width, style, or color of all sides, use:
border-width
border-style
border-color

To set the width, style, or color of a single side, use one of the more granular longhand properties:
border-top-width
border-top-style
border-top-color
border-right-width
border-right-style
border-right-color
border-bottom-width
border-bottom-style
border-bottom-color
border-left-width
border-left-style
border-left-color


EX:
HTML:
<div class="container">
  <div class="box">Change my borders.</div>
</div>

CSS:
body {
  font-family: sans-serif;
}
.container {
  margin: 40px;
  padding: 20px;
  border-top: 5px dotted green;
  border-right: 1px solid black;
  border-bottom: 20px double rgb(23 45 145);
}

.box {
  padding: 20px;
  background-color: lightgray;
  border: 1px solid #333333;
  border-top-style: dotted;
  border-right-width: 20px;
  border-bottom-color: hotpink;
}





Padding:
Sits between the border and the content area and is used to push the content away from the border. Unlike margins, you cannot have a 
negative padding. Any background applied to your element will display behind the padding.

The padding property controls the padding on all sides of an element. To control each side individually, use these longhand properties:
padding-top
padding-right
padding-bottom
padding-left


Example below, edit the values for padding on the class .box and see how this changes where the text begins in relation to the box. You 
can also change the padding on the class .container to create space between the container and the box. You can change the padding on any 
element to create space between its border and whatever is inside the element.

HTML:
<div class="container">
  <div class="box">Change my padding.</div>
</div>

CSS:
body {
  font-family: sans-serif;
}
.box {
  border: 5px solid rebeccapurple;
  background-color: lightgray;
  padding-top: 0;
  padding-right: 30px;
  padding-bottom: 40px;
  padding-left: 4em;
}

.container {
  border: 5px solid blue;
  margin: 40px;
  padding: 20px;
}




Box model and Inline boxes:
Example below, we have a <span> inside a paragraph. We have applied a width, height, margin, border, and padding to it. You can see that 
the width, height, and top and bottom margins do not affect the <span>. The top and bottom padding and borders alter the size of the 
inline box but don't affect the position of the surrounding content. Instead, the top and bottom padding and borders overlap other words 
in the paragraph. Only the left and right padding, margins, and borders affect the position of the text surrounding the <span>.

HTML:
<p>
  I am a paragraph and this is a <span>span</span> inside that paragraph. A span
  is an inline element and so does not respect width and height.
</p>

CSS:
body {
  font-family: sans-serif;
}
p {
  border: 2px solid rebeccapurple;
  width: 200px;
}
span {
  margin: 20px 30px;
  padding: 10px 20px;
  width: 80px;
  height: 150px;
  background-color: lightblue;
  border: solid blue;
  border-width: 7px 1px;
}




Using display: inline-block
Is a special value of display, which provides a middle ground between inline and block. Use it if you do not want an item to break onto a new line, but do want it to respect width and height and avoid the overlapping seen above.

An element with display: inline-block does a subset of the block things we already know about:
- The width and height properties are respected.
- padding, margin, and border will cause other elements to be pushed away from the box.

It does not, however, break onto a new line, and will only become larger than its content if you explicitly add width and height properties.


EX: we have added display: inline-block to our <span> element. Try changing this to display: block or removing the line completely to see the difference in display models:

HTML:
<p>
  I am a paragraph and this is a <span>span</span> inside that paragraph. A span
  is an inline element and so does not respect width and height.
</p>

CSS:
body {
  font-family: sans-serif;
}
p {
  border: 2px solid rebeccapurple;
  width: 300px;
}

span {
  margin: 20px;
  padding: 20px;
  width: 80px;
  height: 50px;
  background-color: lightblue;
  border: 2px solid blue;
  display: inline-block;
}


EX: Where this can be useful is when you want to give a link a larger hit area by adding padding. <a> is an inline element like <span>; 
you can use display: inline-block to allow padding to be set on it, making it easier for a user to click the link.

Fairly frequently in navigation bars. The navigation below is displayed in a row using flexbox and we have added padding to the <a> 
element as we want to be able to change the background-color when the <a> is hovered. The padding appears to overlap the border on the 
<ul> element. This is because the <a> is an inline element.

Add display: inline-block; to the rule with the .links-list a selector, and you will see how it fixes this issue by causing the padding 
to be respected by other elements:

HTML:
<nav>
  <ul class="links-list">
    <li><a href="">Link one</a></li>
    <li><a href="">Link two</a></li>
    <li><a href="">Link three</a></li>
  </ul>
</nav>

CSS:
ul {
  font-family: sans-serif;
  display: flex;
  list-style: none;
  border: 1px solid black;
}

li {
  margin: 5px;
}

.links-list a {
  background-color: rgb(179 57 81);
  color: white;
  text-decoration: none;
  padding: 1em 2em;
}

.links-list a:hover {
  background-color: rgb(66 28 40);
  color: white;
}


06 - Inheritance and Cascade:

Conflicting Rules:
CSS stands for Cascading Style Sheets, and that first word cascading is incredibly important to understand — the way that the cascade behaves is key to understanding CSS.

CSS stands for Cascading Style Sheets, and that first word cascading is incredibly important to understand — the way that the cascade behaves is key to understanding CSS.

The Cascade, and the closely-related concept of specificity, are mechanisms that control which rule applies when such a conflict occurs. The declaration that's styling your element may not be the one you expect, so you need to understand how these mechanisms work.

Also significant here is the concept of inheritance, which means that some CSS properties by default inherit values set on the current 
element's parent element and some don't. This can also cause unexpected behavior.




Cascade:
Stylesheets cascade. At a very simple level, this means that the origin and the order of CSS rules matter. When two rules both have equal 
specificity, the one that is defined last in the stylesheet is the one that will be used. There are other concepts that have an effect, 
such as cascade layers, but these are more advanced and we won't cover them in any detail here.

In the below example, we have two rules that could apply to the <h1> element. The <h1> content ends up being colored blue. This is 
because both the rules are from the same source, have an identical element selector, and therefore, carry the same specificity, but 
the last one in the source order wins.

HTML:
<h1>This is my heading.</h1>

CSS:
h1 {
  color: red;
}
h1 {
  color: blue;
}




Specificity:
Specificity is an algorithm that the browser uses to decide which property value is applied to an element. If multiple rules have 
different selectors that set different values for the same property and target the same element, specificity decides the property value 
that gets applied to the element. Specificity is basically a measure of how specific a selector's selection will be:

- A type (element) selector is less specific; it will select all elements of that type that appear on a page, so it has less weight. 
Pseudo-element selectors have the same specificity as regular element selectors.

- A class selector is more specific; it will select only the elements on a page that have a specific class attribute value, so it has 
more weight. Attribute selectors and pseudo-classes have the same weight as a class.

-An ID selector is even more specific — it only selects a single element with a specific id value. It therefore has even more weight.


Below, we again have two rules that could apply to the <h1> element. The <h1> content below ends up being colored red, even though the 
color: blue declaration appears later in the source order, because the class selector main-heading gives its rule a higher specificity 
than the type selector h1. The declaration with the higher specificity, defined using the class selector, is applied.
HTML:
<h1 class="main-heading">This is my heading.</h1>

CSS:
.main-heading {
  color: red;
}

h1 {
  color: blue;
}




Inheritance:
Inheritance also needs to be understood in this context — some CSS property values set on parent elements are inherited by their child 
elements, and some aren't.

For example, if you set a color and font-family on an element, every element inside it will also be styled with that color and font, 
unless you've applied different color and font values directly to them.

HTML:
<p>
  As the body has been set to have a color of blue this is inherited through the
  descendants.
</p>
<p>
  We can change the color by specifically targeting an element with a different
  style, such as this
  <span>span</span>.
</p>

CSS:
body {
  color: blue;
}

span {
  color: black;
}


Some properties do not inherit — for example width If you set a width of 50% on an element, all of its descendants do not get a width of 
50% of their parent's width. If this was the case, CSS would be very frustrating to use!




Understanding how the concepts work together:
These three concepts (cascade, specificity, and inheritance) together control which CSS applies to what element. In the sections below, 
we'll see how they work together. It can sometimes seem a little bit complicated, but you will start to remember them as you get more 
experienced with CSS, and you can always look up the details if you forget! Even experienced developers don't remember all the details.




Understanding Inheritance:
We'll start with inheritance. In the example below, we have a <ul> element with two levels of unordered lists nested inside it. We have 
given the outer <ul> a border, padding, and font color.

The color property is an inherited property. So, the color property value is applied to the direct children and also to the indirect 
children — the immediate child <li>s and those inside the first nested list. We have then added the class special to the second nested 
list and applied a different color to it. This then inherits down through its children.

HTML:
<ul class="main">
  <li>Item One</li>
  <li>
    Item Two
    <ul>
      <li>2.1</li>
      <li>2.2</li>
    </ul>
  </li>
  <li>
    Item Three
    <ul class="special">
      <li>
        3.1
        <ul>
          <li>3.1.1</li>
          <li>3.1.2</li>
        </ul>
      </li>
      <li>3.2</li>
    </ul>
  </li>
</ul>

CSS:
.main {
  color: rebeccapurple;
  border: 2px solid #cccccc;
  padding: 1em;
}

.special {
  color: black;
  font-weight: bold;
}


Properties like width (as mentioned earlier), margin, padding, and border are not inherited properties. If a border were to be inherited 
by the children in this list example, every single list and list item would gain a border — probably not an effect we would ever want!

Though every CSS property page lists whether or not the property is inherited, you can often guess the same intuitively if you know what 
aspect the property value will style.




Controlling Inheritance:
CSS provides five special universal property values for controlling inheritance. Every CSS property accepts these values.

inherit
Sets the property value applied to a selected element to be the same as that of its parent element. Effectively, this "turns on 
inheritance".

initial
Sets the property value applied to a selected element to the initial value of that property.

revert
Resets the property value applied to a selected element to the browser's default styling rather than the defaults applied to that 
property. This value acts like unset in many cases.

revert-layer
Resets the property value applied to a selected element to the value established in a previous cascade layer.

unset
Resets the property to its natural value, which means that if the property is naturally inherited it acts like inherit, otherwise it acts 
like initial.




Resetting all Property Values:
The CSS shorthand property all can be used to apply one of these inheritance values to (almost) all properties at once. Its value can be 
any one of the inheritance values (inherit, initial, revert, revert-layer, or unset). It's a convenient way to undo changes made to 
styles so that you can get back to a known starting point before beginning new changes.

In the below example, we have two blockquotes. The first has styling applied to the blockquote element itself. The second has a class 
applied to the blockquote, which sets the value of all to unset.

HTML:
<blockquote>
  <p>This blockquote is styled</p>
</blockquote>

<blockquote class="fix-this">
  <p>This blockquote is not styled</p>
</blockquote>

CSS:
blockquote {
  background-color: orange;
  border: 2px solid blue;
}

.fix-this {
  all: unset;
}




Understanding the Cascade:
We now understand that inheritance is why a paragraph nested deep in the structure of your HTML is the same color as the CSS applied to 
the body. From the introductory lessons, we have an understanding of how to change the CSS applied to something at any point in the 
document — whether by assigning CSS to an element or by creating a class. We will now look at how cascade defines which CSS rules apply 
when more than one style block apply the same property, but with different values, to the same element.

There are three factors to consider, listed here in increasing order of importance. Later ones overrule earlier ones:

Source order
Specificity
Importance
We will look at these to see how browsers figure out exactly what CSS should be applied.

Source order
We have already seen how source order matters to the cascade. If you have more than one rule, all of which have exactly the same weight, then the one that comes last in the CSS will win. You can think of this as: the rule that is nearer the element itself overwrites the earlier ones until the last one wins and gets to style the element.

Source order only matters when the specificity weight of the rules is the same, so let's look at specificity next.

Specificity
You will often run into a situation where you know that a rule comes later in the stylesheet, but an earlier, conflicting rule is applied. This happens because the earlier rule has a higher specificity — it is more specific, and therefore, is being chosen by the browser as the one that should style the element.

As we saw earlier in this lesson, a class selector has more weight than an element selector, so the properties defined in the class style block will override those defined in the element style block.

Something to note here is that although we are thinking about selectors and the rules that are applied to the text or component they select, it isn't the entire rule that is overwritten, only the properties that are declared in multiple places.

This behavior helps avoid repetition in your CSS. A common practice is to define generic styles for the basic elements, and then create classes for those that are different. For example, in the stylesheet below, we have defined generic styles for level 2 headings, and then created some classes that change only some of the properties and values. The values defined initially are applied to all headings, then the more specific values are applied to the headings with the classes.

HTML:
<h2>Heading with no class</h2>
<h2 class="small">Heading with class of small</h2>
<h2 class="bright">Heading with class of bright</h2>

CSS:
h2 {
  font-size: 2em;
  color: black;
  font-family: "Georgia", serif;
}

.small {
  font-size: 1em;
}

.bright {
  color: rebeccapurple;
}

Let's now have a look at how the browser calculates specificity. We already know that an element selector has low specificity and can be 
overwritten by a class. Essentially a value in points is awarded to different types of selectors, and adding these up gives you the 
weight of that particular selector, which can then be assessed against other potential matches.

The amount of specificity a selector has is measured using three different values (or components), which can be thought of as ID, CLASS, 
and ELEMENT columns worth hundreds, tens, and ones, respectively:

IDs: Score one in this column (100 points) for each ID selector contained inside the overall selector.
Classes: Score one in this column (10 points) for each class selector, attribute selector, or pseudo-class contained inside the overall 
selector.
Elements: Score one in this column (1 point) for each element selector or pseudo-element contained inside the overall selector.




Selector	            Identifiers	    Classes	    Elements	    Total specificity
h1	                    0	            0	        1	            0-0-1
h1 + p::first-letter	0	            0	        3	            0-0-3
li > a[href*="en-US"]   0	            2	        2	            0-2-2
> .inline-warning	
#identifier	            1	            0	        0	            1-0-0




In-depth specificity example
Before we move on, let's look at an example in action. You might want to open this in the MDN Playground in a separate tab so you can 
easily cross-reference it as you read the explanation.
HTML:
<div class="container" id="outer">
  <div class="container" id="inner">
    <ul>
      <li class="nav"><a href="#">One</a></li>
      <li class="nav"><a href="#">Two</a></li>
    </ul>
  </div>
</div>

CSS:
/* 1. specificity: 1-0-1 */
#outer a {
  background-color: red;
}

/* 2. specificity: 2-0-1 */
#outer #inner a {
  background-color: blue;
}

/* 3. specificity: 1-0-4 */
#outer div ul li a {
  color: yellow;
}

/* 4. specificity: 1-1-3 */
#outer div ul .nav a {
  color: white;
}

/* 5. specificity: 0-2-4 */
div div li:nth-child(2) a:hover {
  border: 10px solid black;
}

/* 6. specificity: 0-2-3 */
div li:nth-child(2) a:hover {
  border: 10px dashed black;
}

/* 7. specificity: 0-3-3 */
div div .nav:nth-child(2) a:hover {
  border: 10px double black;
}

a {
  display: inline-block;
  line-height: 40px;
  font-size: 20px;
  text-decoration: none;
  text-align: center;
  width: 200px;
  margin-bottom: 10px;
}

ul {
  padding: 0;
}

li {
  list-style-type: none;
}




IDs versus classes
ID selectors have high specificity. This means styles applied based on matching an ID selector will overrule styles applied based on 
other selectors, including class and type selectors. Because an ID can only occur once on a page and because of the high specificity of 
ID selectors, it is preferable to add a class to an element instead of an ID.

If using the ID is the only way to target the element — perhaps because you do not have access to the markup and cannot edit it — 
consider using the ID within an attribute selector, such as p[id="header"].




Inline styles
Inline styles, that is, the style declaration inside a style attribute, take precedence over all normal styles, no matter the 
specificity. Such declarations don't have selectors, but their specificity can be construed as 1-0-0-0; always more than any other 
specificity weight no matter how many IDs are in the selectors.


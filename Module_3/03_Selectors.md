03 - Selectors:

- First part of a CSS Rule, a pattern of elements and other terms that tell the browser which HTML elements should have the
CSS property values inside the rule applied to them.

- Element/s selected by the selector are referred to as the "sibject of the selector."
EX: h1 {color: blue; background-color: yellow;}
- Every <h1> element will apply the following rules.




Type Selectors:
- A tag name or element selector, selects an HTML tag/element in the document
The following CSS file implements 4 type selectors:
body {
  font-family: sans-serif;
}

span {
  background-color: yellow;
}

strong {
  color: rebeccapurple;
}

em {
  color: rebeccapurple;
}

03_cssTest.html
02_styles.css




Class Selectors:
- Case-sensitive class selector starts with a dot (.) character. Selecting everything in the document
with that class applied to it.
- Must provide a "class" attribute in the HTML document element's to be picked up by the CSS file's rule.

HTML:
<h1 class="highlight">Class selectors</h1>
<p>
  Veggies es bonus vobis, proinde vos postulo essum magis
  <span class="highlight">kohlrabi welsh onion</span> daikon amaranth tatsoi
  tomatillo melon azuki bean garlic.
</p>

<p class="highlight">
  Gumbo beet greens corn soko <strong>endive</strong> gumbo gourd. Parsley
  shallot courgette tatsoi pea sprouts fava bean collard greens dandelion okra
  wakame tomato. Dandelion cucumber earthnut pea peanut soko zucchini.
</p>

- 3 Elements in this HTML file, incorporates the same class reference.

CSS:
body {
  font-family: sans-serif;
}

.highlight {
  background-color: yellow;
}
Try Implementing them in 03_cssTest.html and 02_styles.css




Targeting Classes on Particular Elements:
- You can create a selector that targets specific elements with the class applied.
- The HTML file will remain the same in regards with class references.
- However, we use the type selector for the element we want to target with the class appended using a dot with no blank space.

CSS:
body {
  font-family: sans-serif;
}

span.highlight {
  background-color: yellow;
}

h1.highlight {
  background-color: pink;
}

- The two Class selectors reduces the scope of the rule, to only apply to that particular element and class combination.
- Thus, only <span> elements with the class attribute "highlight" can be applied that rule.
Try Implementing them in 03_cssTest.html and 02_styles.css




Target an Element if it has More than One Class Applied:
- You can apply multiple classes to an element and target them individually, or only select the element when all of the classes in the
selector are present.
- Implement this through chaining (.) no spacing in the CSS file.
- However the HTML file implements more class references for specification.
EX: 
HTML:
<div class="notebox">This is an informational note.</div>

<div class="notebox warning">This note shows a warning.</div>

<div class="notebox danger">This note shows danger!</div>

<div class="danger">
  This won't get styled — it also needs to have the notebox class
</div>

CSS:
body {
  font-family: sans-serif;
}

.notebox {
  border: 4px solid #666666;
  padding: 0.5em;
  margin: 0.5em;
}

.notebox.warning {
  border-color: orange;
  font-weight: bold;
}

.notebox.danger {
  border-color: red;
  font-weight: bold;
}

- As seen, the initial three <div> elements are implemented the .notebox class rule with a border around them.
HOWEVER, the second and third <div> elements implement the initial .notebox class rule alongside a change to their color and font-weight
indicated with the chaining (.).
- Lastly, the last <div> element does not change at all, as its class reference does not start in "notebox" and cannot reference
.notebox.danger as notebox must be reference first to later apply the .danger rule.




ID Selectors:
- Case-sensitive ID selector begins with a (#) and used in the same way as a class selector.
- With the difference being that an ID can be used only once per page, and elemeents can only have a single id value.

- Thus, an ID selector selects an element with a specific ID, additionally implementing a matching element and ID.

HMTL:
<h1 id="heading">ID selector</h1>
<p>
  Veggies es bonus vobis, proinde vos postulo essum magis kohlrabi welsh onion
  daikon amaranth tatsoi tomatillo melon azuki bean garlic.
</p>

<p id="one">
  Gumbo beet greens corn soko <strong>endive</strong> gumbo gourd. Parsley
  shallot courgette tatsoi pea sprouts fava bean collard greens dandelion okra
  wakame tomato. Dandelion cucumber earthnut pea peanut soko zucchini.
</p>


CSS:
body {
  font-family: sans-serif;
}

#one {
  background-color: yellow;
}

h1#heading {
  color: rebeccapurple;
}

- As seen here the HTML file's <h1> element implements an ID attribute called "heading", with a <p> element implementing an ID
attribute called "one".

- Lastly, the CSS file, utilizes the ID selector with the (#) symbol. #one references any element with that specific ID attached to their
ID attribute.
- However (h1#heading) will only apply the rule to an element of <h1> with an ID attribute referencing (heading).

REMINDER: DO NOT use the same ID for multiple elements in the same document, as errors may result to this method utilized.




Selector Lists:
To apply the same CSS to multiple items, you can combine individual selectors into a selector list.
- The rule is applied to all the individual selectors, for instance the following can become two separate rules:
CSS file:
h1 {
  color: blue;
}

.special {
  color: blue;
}

- But, you can combine it into a selector list, by implementing a (,) comma alongside a blank space before/after:
CSS file:
h1, .special {
  color: blue;
}


HTML file:
<h1>Type selectors</h1>
<p>
  Veggies es bonus vobis, proinde vos postulo essum magis
  <span>kohlrabi welsh onion</span> daikon amaranth tatsoi tomatillo melon azuki
  bean garlic.
</p>

<p>
  Gumbo beet greens corn soko <strong>endive</strong> gumbo gourd. Parsley
  shallot courgette tatsoi pea sprouts fava bean collard greens dandelion okra
  wakame tomato. Dandelion cucumber earthnut pea peanut soko zucchini.
</p>

<p>
  Turnip greens yarrow ricebean rutabaga <em>endive cauliflower</em> sea lettuce
  kohlrabi amaranth water spinach avocado daikon napa cabbage asparagus winter
  purslane kale. Celery potato scallion desert raisin horseradish spinach
</p>

CSS file:
body {
  font-family: sans-serif;
}
span {
  background-color: yellow;
}

strong,
 em {
  color: rebeccapurple;
}


Examples of Invalid Selectos in Selecor Lists:
- The following would be ignored, as <h1> would be styled, but special wouldn't as it ins't properly referencing a class:
h1 {
  color: blue;
}

..special {
  color: blue;
}

- Now the following, won't style neither as the entire rule is deemed invalid:
h1, ..special {
  color: blue;
}




The Universal Selector:
- Indicated with the (*) symbol, it selects everything in the document.
- If chained using a descendant combinator, it selects everything inside that ancestor element.
For instance (p *) selects all the nested elements inside <p> element.

- The following uses the universal selector to remove the margins on all elements:
HTML:
<h1>Universal selector</h1>
<p>
  Veggies es bonus vobis, proinde vos postulo essum magis
  <span>kohlrabi welsh onion</span> daikon amaranth tatsoi tomatillo melon azuki
  bean garlic.
</p>

<p>
  Gumbo beet greens corn soko <strong>endive</strong> gumbo gourd. Parsley
  shallot courgette tatsoi pea sprouts fava bean collard greens dandelion okra
  wakame tomato. Dandelion cucumber earthnut pea peanut soko zucchini.
</p>

CSS:
body {
  font-family: sans-serif;
}

* {
  margin: 0;
}


NOTE: As universal selectors makes global changes, use it for specific situations:
- Such as making your selectors easier to read.









Attribute Selectors:
- CSS allow you to use attribute selectors to target elements with certain attributes.

Presence and Value selectors:
- Enables the selection of an element based on the presence of an attribute alone.

Selector            Example                     Description:
[attr]              a[title]                    Matches elements with an "attr" attribute with a value similar to the brackets.

[attr=value]        a[href="https://example.com"]   Matches elements with the attr attribute the same value in the quotes.

[attr~=value]       p[class~="special"]         Matches element with the attr attribute with a the same value in space-separated.

[attr|=value]       div[lang|"zh"]              Matches element with the attr attribute with the same value after the hyphen.


EX:
- Using "li[class]" matches any list item with a class attribute. Thus matches with all list item except the first one in the HTML file.

- Using "li[class="a"]" matches a selector with a class of "a", but not a class of "a" with another space-separated class. Thus matches only the second list item.

- Using "li[class~="a"]" matches a class of "a" but also a value that contains the class of a as part of a whitespace-separated list,
thus matches with the second and third list items.

HTML:
<h1>Attribute presence and value selectors</h1>
<ul>
  <li>Item 1</li>
  <li class="a">Item 2</li>
  <li class="a b">Item 3</li>
  <li class="ab">Item 4</li>
</ul>

CSS:
body {
  font-family: sans-serif;
}
li[class] {
  font-size: 120%;
}

li[class="a"] {
  background-color: yellow;
}

li[class~="a"] {
  color: red;
}



Substring Matching Selectors:
- This selectors allows for more advanced matching of substrings inside the value of your attribute.
For instance classes of "box-warning' and "box-error" and you wanted to match everything that started with the string "box-"
you would use "[class^="box-"]" to select both or "[class|="box"]"

Selector            Example             Description
[attr^=value]       li[clas^="box-"]    Matches element with an attr attribute, with an exact value in "".

[attr$=value]       li[class$="-box"]   Matches element with an attr attribute whose value ends with the the exact value in "".

[attr*=value]       li[class*="box"]    Matches elements with an attr attribute whose value contain "' anywhere in the string.

EX:
- li[class^="a"] matches any attribute value which starts with a, so matches the first two list items.
- li[class$="a"] matches any attribute value that ends with a, so matches the first and third list item.
- li[class*="a"] matches any attribute value where a appears anywhere in the string, so it matches all of our list items.

HTML:
<h1>Attribute substring matching selectors</h1>
<ul>
  <li class="a">Item 1</li>
  <li class="ab">Item 2</li>
  <li class="bca">Item 3</li>
  <li class="bcabc">Item 4</li>
</ul>

CSS:
body {
  font-family: sans-serif;
}
li[class^="a"] {
  font-size: 120%;
}

li[class$="a"] {
  background-color: yellow;
}

li[class*="a"] {
  color: red;
}











Combinators:
- Used to combine other selectors in a way to allow us to select elements based on their location in the DOM relative to other elements.

Descendant Combinator:
- Represented by a single space ( ) character, combines two selectors in tahat elements matched by the second selector are
selected if they have an ancestor element matching the first selector.

EX:
body article p {
}

HTML:
<div class="box"><p>Text in .box</p></div>
<p>Text not in .box</p>

CSS:
.box p {
  color: red;
}
- The following matches only the <p> element which is inside of an element with a class of ".box'



Child Combinator:
- Represented with (>) is placed betweent two CSS selectors. Matching only to elements matched by the second selector that are
direct children of element matched by the first.
EX: The following would only select <p> elements that are direct children of <article> elements:
article > p {
  /* … */
}


HTML:
<ul>
  <li>Unordered item</li>
  <li>
    Unordered item
    <ol>
      <li>Item 1</li>
      <li>Item 2</li>
    </ol>
  </li>
</ul>

CSS:
ul > li {
  border-top: 5px solid red;
}

- This child combinator will only select <li> elements that are direct children of the <ul> element.



Next-Sibling Combinator:
- Represented with (+) is placed between two CSS selectors. Matching elements with the second selector that comes right after the
element matched by the first selector.
EX: Selects all <img> elements that are immediately preceded by a <p> element:
p + img {
  /* … */
}


HTML:
<article>
  <h1>A heading</h1>
  <p>
    Veggies es bonus vobis, proinde vos postulo essum magis kohlrabi welsh onion
    daikon amaranth tatsoi tomatillo melon azuki bean garlic.
  </p>

  <p>
    Gumbo beet greens corn soko endive gumbo gourd. Parsley shallot courgette
    tatsoi pea sprouts fava bean collard greens dandelion okra wakame tomato.
    Dandelion cucumber earthnut pea peanut soko zucchini.
  </p>
</article>

CSS:
body {
  font-family: sans-serif;
}

h1 + p {
  font-weight: bold;
  background-color: #333333;
  color: white;
  padding: 0.5em;
}

- This selects any paragraph that shares a parent element with <h1> that is immediately follows it.



Subsequent-Sibling Combinator:
- To select siblings of an element that aren't directly adjacent, use the (~) symbol.
EX: Selects all <img> elements that comes anywhere after <p> elements:
p ~ img {
  /* … */
}


HTML:
<article>
  <h1>A heading</h1>
  <p>I am a paragraph.</p>
  <div>I am a div</div>
  <p>I am another paragraph.</p>
</article>

CSS:
body {
  font-family: sans-serif;
}

h1 ~ p {
  font-weight: bold;
  background-color: #333333;
  color: white;
  padding: 0.5em;
}

- This selects all <p> elements that comes after the <h1>, thus even the <p> element after <div> is selected as well.



Combining Combinators with Selectors:
- You are able to combine any of the selectors to the combinators in order to select part of your document.
EX: Select list items with a class of "a" whicha re direct children of a <ul>:
ul > li[class="a"] {
}


- Careful on creating big lists of selectors for specific parts of your document, as resuability will become specific than general.
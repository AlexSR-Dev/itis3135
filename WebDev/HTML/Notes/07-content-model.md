Section 07 Content Model

07.1 - Block-Level Elements

- Block layout are referred to as containers that start from the left outer edge.
- This element always starts on a new line and occupies the available horizontal space of its
parent element with equal vertical space to the content's height not its parent.

<div>
  <p>
    This the first paragraph. The background color of these paragraphs have been
    colored to distinguish them from their parent element.
  </p>
  <p>This is the second paragraph.</p>
</div>

- In the instance above, the <p> elements are block-level by default.
THUS: When displayed with background colors, there would be two instances of blocks seen.


----------------------------------------------------------------------------------------------------------------------------------


07.2 - Inline Elements

- Inline layout are referred to text sequences, replaced elements, or content by default.
- This element can be regarded as fragmentation(separate pieces) of content as line blocks and can be aligned vertically or horizontally
alongside surronding text, rather than creating a new line.

<p>
  This span is an <span class="highlight">inline-level element</span>; its
  background has been colored to display both the beginning and end of the
  element's influence. Input elements, like <input type="radio" /> and
  <input type="checkbox" />, are also inline-level content.
</p>

- In the instance above, the <span> and <input> elements are inline-level.
THUS: When displayed the <span> element would highlight a portion or a fragement of the <p> element.
SO: Inline-elements can occupy portions of content, or the entirety.


----------------------------------------------------------------------------------------------------------------------------------


07.3 Block-Level vs. Inline Elements

- By default layout behavior:
- Block-level elements occupies an entire region of horizontal and vertical space, with the caveat that the vertical space
is equal to the content's height.
THUS: A block is formed by the declaration of elements such as <div>, <p>, <h1>, <section> that can occupy an entire region of space.

- Inline-level elements can occupy a fragement of space and most often within block-level elements like <p>.
HOWEVER, inline can occupy the entire region but their element are mostly utilized as pinpoints in the region.
THUS: With inline elements such as <a>, <span>, <strong>, <em> emphasize is placed on a porition of content.


NOTE: For nesting these content models:
- Block level elements can group one after another to create a parent-child relationship (like <div><p></p></div>), that separates the 
block instances.
THUS: With attributes like "class", "id", or "src" it would target the specific block element to be altered.

- Inline level elements esstentially group the fragementation into multiple meanings.
For instance, you can assign a fragement of content the <a> element and also the <strong> element for functionality of hyperlinks and
semantic meaning to the content.

OVERALL: Nesting these elements can provide not only distinction among specification, but also enhance its meaning or usage throughout
the region it can provide/fragement upon. 

----------------------------------------------------------------------------------------------------------------------------------

Practical Knowledge Question:
Scenario:
<div>
    <h1>Welcome</h1>
    <p>
        Learn <strong>HTML</strong> and visit
        <a href="https://developer.mozilla.org/">MDN</a>.
    </p>
    <p>Continue learning!</p>
</div>

Q1) Which elements behave as block-level elements by default, and why?
- There are four elements that are block-level by default being: <div>, <h1>, <p> and <p>.
The reason is due to what they can create, in that each element creates a block or a new line. Thus, even if the <div> element
is the parent element, every other block element is nested within it with their own block as a child.

Q2) Which elements behave as inline-level elements by default, and what happens to their content in relation to the surround paragraph?
- There are two inline element being: <strong> and <a>.
Moreover, the content they surround in is altered to reflect a participation, but fragemented alongside the text without forcing a new 
line.

Q3) Why does <strong> not force the word "HTML" onto a separate line, even though it is nested inside a <p>?
- The reaon is the nature of a inline element to fragment or specify a part of a content, while also maintaining the integrity of its
surroundings. Thus, even if declared within a block element, it will remain alongside the surrounding text.

NOTE: If you CANNOT nest the same block element. For instance nesting <p> elements would end the first element and continue onto the
second <p> element.


----------------------------------------------------------------------------------------------------------------------------------

Implementation Exercise: Content Models
- section07.html

Implementation Checklist:
[ ] 1. Document setup
Create a valid HTML document with <!doctype html>, lang="en-US", UTF-8 charset, title "Section 07 - Content Model", and body.

[ ] 2. Parent container
Create a <div> that contains all the remaining content.

[ ] 3. Block-level structure
Inside the <div>, create one <h1>, two <p> elements, and one <h2>. Each should contain appropriate text.

[ ] 4. Inline elements
Within the first paragraph, use <strong> to emphasize one word and <em> to emphasize another.

[ ] 5. Hyperlink
Within the second paragraph, include an <a> element linking to https://developer.mozilla.org/.

[ ] 6. Combined inline elements
Within the <h2>, include a <strong> element around only a portion of its text.

----------------------------------------------------------------------------------------------------------------------------------
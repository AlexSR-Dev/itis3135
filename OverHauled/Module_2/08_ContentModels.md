08 - Content Model:

Block-Level Content:
- Always starts on a new line.
- Occupies the entire horizontal space of its parent element (container) and vertical space
equal to the height of its contents, thus creating a "block".


EX: The two <p> elements are place in a <div> element:
<div>
  <p>
    This the first paragraph. The background color of these paragraphs have been
    colored to distinguish them from their parent element.
  </p>
  <p>This is the second paragraph.</p>
</div>

- The paragraph elements are block-level by default, thus displayed as:

This the first paragraph. The background color of these paragraphs have been colored to distinguish them from their parent element.

This is the second paragraph.

- Note there should be a highlighted background behind the text and also the div element is just a generic
container. However as you can see these paragraph values are seperated by a blank line each by default.






Line-Level Content:
- Most text sequences, replaced elements, and generated content are inline-level by default.
- Are aligned to each other vertically or horizontally depending on the writing mode.
- Aligned by the baselines of their text.

EX:
<p>
  This span is an <span class="highlight">inline-level element</span>; its
  background has been colored to display both the beginning and end of the
  element's influence. Input elements, like <input type="radio" /> and
  <input type="checkbox" />, are also inline-level content.
</p>

- The <p> element contains some text, however some in contained in the <span>element and two <input> elements,
which are inline-level elments.
- Since the <span> element is spreaded across two lines, two line boxes are generated.
- However, since these elements are inline, the paragraph correctly renders a single paragraph of unbroken text flow:

This span is an inline-level element; its background has been colored to display both the beginning and end of the element's influence. Input elements, like  and , are also inline-level content.

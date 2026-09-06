04 - Text:

Heading and Paragraphs:
- Provides thte text structure that a browser can display an HTML docuement based on the developer's design.

- In HTML, each paragraph has to be wrapped in a <p> element (paragraph):
<p>I am a paragraph, oh yes I am.</p>


- Each heading has to be wrapped in a <h> element (heading):
<h1>I am the title of the story.</h1>

NOTE: There are SIX heading elements: h1, h2, h3, h4, h5, h6. Each represents a different level of content
in the document, h1 - main heading, h2 - subheadings, etc.




Implementing Structural Hierarchy:
- For instance, <h1> element may be utilized as the title of the story, <h2> elements for the title of each chapter,
and <h3> element for subsections of each chapter:
<h1>The Lone Aegis</h1>
<p>By Chris Mills</p>
<h2>Chapter 1: The dark night </h2>
<p>
    Etc..
</p>

- Entirely up to the developer for what elements should be invlved. Best practices:
• Use a single <h1> per page.
• Use the headings in the correct order in hierarchy.
• Of the six headings available, no more than 3 per page, as it becomes difficult to navigate and at that
point create multiple pages.




Why do we need Structure?

test01_html
- Open the live server for this file and you'll notice the text becomes to difficult to read.
Resulting in:
• Lower user engagement.
• Poor peformance in the SEO (Search Engine Optimization) as search engines indexing your page consider the contents
of headings as keywords for influencing the page's search rankings.
• CSS/JavaScript implementation will not be as effictively do the poor structure.




Why do we need Semantics?
- Its used to verify that the correct elements are used to provide the content the correct meaning, function,
or apperance. For instance, <h1> would be a semantic element to provide the text wrapped in it a role or meaning.



Additional Key Elements:
<br> - Break line to the next.
<hr> - Horizontal rule/line, displays a horizontal line in between lines.







Emphasis and Importance:
<em> - (emphasis) element, recognized as italic style, mostly provides a different style of emphasis.

<strong> - (strong importance) element marks up the text its wrapped around into bold. 

<mark> - Mark element highlightes the wrapped text.

<sub> - Sub element diplays the text wrapped a level below.

<sup> - Sup element displays the text wrapped a level above.

<del> - Delete Element displays the text wrapped with a line crossed over.

<ins> - Inserted Element displays the text wrapped with an underline.

<abbr>- Abbreviation element informs the user what it means. A title attribute can be included for users to
hover over the wrapped text for a readable description.







Lists:

Unordered Lists - Just a list of items that is not in a certain order.
<ul> - Unordered list element, renders as a bulleted list.
<li> - List element, represents an item in the list that is part of an order or unordered list or even a menu.

EX:
<ul>
  <li>milk</li>
  <li>eggs</li>
  <li>bread</li>
  <li>hummus</li>
</ul>


Ordered Lists - Lists in which the order of items does matter.
<ol> - Ordered list element, isused to wrap the list items and renders as a numbered list.
Also, <li> element will need to be used to the seperate values.


Challenge: Marking up our recipe page:
1. Mark up the main page title using an <h1> element, and the three subtitles using <h2> elements.
2.There are five lines of text that make sense to be marked up with <p> elements. Do this now.
3. Mark up the list of ingredients as an unordered list.
4. Mark up the list of instructions as an ordered list.

test_02.html



Nesting Lists:
- It is possible to nest one list another one.
Therefore, you can have bullet points underneath a certain orderlist as emphasize for a particular lists:
<ol>
  <li>Remove the skin from the garlic, and chop coarsely.</li>
  <li>Remove all the seeds and stalk from the pepper, and chop coarsely.</li>
  <li>Add all the ingredients into a food processor.</li>
  <li>
    Process all the ingredients into a paste.
    <ul>
      <li>
        If you want a coarse "chunky" hummus, process it for a short time.
      </li>
      <li>If you want a smooth hummus, process it for a longer time.</li>
    </ul>
  </li>
</ol>




Description Lists:
- To mark up a set of items and thier associated descriptions, such as terms and definitions, or questions or answers.
<dl> - Description Lists, represents a description of a list.
<dt> - Description Term, specifices a term in a description or definition list.
<dd> - Description Definition, provides the description, definition, or valie for the preceding term (<dt>) in a description list (<dl>).

EX:
<dl>
  <dt>soliloquy</dt>
  <dd>
    In drama, where a character speaks to themselves, representing their inner
    thoughts or feelings and in the process relaying them to the audience (but
    not to other characters.)
  </dd>
  <dt>monologue</dt>
  <dd>
    In drama, where a character speaks their thoughts out loud to share them
    with the audience and any other characters present.
  </dd>
  <dt>aside</dt>
  <dd>
    In drama, where a character shares a comment only with the audience for
    humorous or dramatic effect. This is usually a feeling, thought, or piece of
    additional background information.
  </dd>
</dl>

- Additional, it is possible for a single term to have multiple descriptions.

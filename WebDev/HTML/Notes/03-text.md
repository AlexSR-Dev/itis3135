Section 03 - HTML Text Elements

03.1: Headings and Paragraphs

- This provides the foundation of structured text in your webpage.
- Therefore a heading is wrapped with the <h1> element:

<h1> I am the title of the story. </h1>

- With paragraphs indicated with the <p> element:

<p>I am a paragraph</p>


----------------------------------------------------------------------------------------------------------------------------------



03.2: Semantic Structure and Heading Hierarchy

- Regarding the <h> element, there are variations of headings to apply, from 1 representiing the top level heading and all other
below it in a hierachy.

: <h1> -> <h2> -> <h3> (Correct)
: <h1> -> <h3> -> <h2> (Incorrect)

- Of the six heading levels, its advisable to avoid skipping levels, and chose levels based on the document's organization.


----------------------------------------------------------------------------------------------------------------------------------



03.3: Emphasis and Importance

- Without elements to provide the content structure, the webpage will ultimately be shown as big paragraph.
- Resulting in difficulty in reading and separating information.

- Note, that user tendency favors quick scans from just the headings to look for their initial findings.
- Without headings, webpages will perform poorly on the SEO (Search Engine Optimization) for visibility.
- Moreover, the webpage wouldn't be styled or function properly without elements to be wrapped around content for
CSS or Javascript implementations.


- Semantics are elements such as <h1> to provide a meaningful purpose within the webpage to be identified, not only from
a user's perspective but also in the code itself.
- As elements such as <span> can replicate the appearance, but won't have semantics as its purpose is modificiation, rather
than providing insight to the webpage.


Emphasis
- To mark an "emphasis" to a word/s you can implement the <em> (emphasis) element to mark up those instances.
- Note, that this is for semantic purposes, as the browser can style the <em> element to italic by default, and there
are other manners to get just the italic styling, for instance the <span> or <i> elements.

<p>I am <em>glad</em> you weren't <em>late</em>.</p>


Strong Importance
- To emphasize the "importance" of words, you can implement the <strong> (strong importance) element to indicate those instances.
- Note that using semantic elements such as <strong> provide screen readers a different tone of voice when read, thus using the
<strong> element for the bold style provided by the browser style is not recommended. As the <span> or <b> element accomodates that style.

<p>This liquid is <strong>highly toxic</strong>.</p>

- Nesting it also allowed if needed for semantics:
<p>This liquid is <strong>highly toxic</strong> — if you drink it, <strong>you may <em>die</em></strong>.</p>


----------------------------------------------------------------------------------------------------------------------------------



03.4: Presentational Text Elements

- Provided when CSS was still poorly supported, these elements are not semantics and are only for visually alterations as it's
not supported to accessibility, SEO, etc.

- However HTML5 redefined these elements into confusing semantic roles
: <i> - To convery a meaning traditionally conveyed by italic: foreign words, taxonomic designation, a thought.
: <b> - To convery a meaning traditionally conveyed by bold: keywords, product names, lead sentence.
: <u> - To convery a meaning traditionally conveyed by underline: proper name, misspelling, links.

For instance:
<!-- scientific names -->
<p>
  The Ruby-throated Hummingbird (<i>Archilochus colubris</i>) is the most common
  hummingbird in Eastern North America.
</p>

<!-- foreign words -->
<p>
  The menu was a sea of exotic words like <i lang="uk-latn">vatrushka</i>,
  <i lang="id">nasi goreng</i> and <i lang="fr">soupe à l'oignon</i>.
</p>

<!-- a known misspelling -->
<p>Someday I'll learn how to <u class="spelling-error">spel</u> better.</p>

<!-- term being defined when used in a definition -->
<dl>
  <dt>Semantic HTML</dt>
  <dd>
    Use the elements based on their <b>semantic</b> meaning, not their
    appearance.
  </dd>
</dl>


----------------------------------------------------------------------------------------------------------------------------------



03.5: HTML Lists
- Three types of lists with different purposes.

Unordered Lists:
- To mark up lists of items in which the order of items doesn't matter.
- Implemented with the <ul> (unordered list) element to wrap the whole list, in addition with the <li> (list item) element.
NOTE: This element is typically rendered as a bulleted list.

<ul>
  <li>milk</li>
  <li>eggs</li>
  <li>bread</li>
  <li>hummus</li>
</ul>


Ordered:
- A list in which the order of the items does matter.
- The only difference is the implementation of the <ol> (ordered list) element, with <li> elements.
NOTE: This is typically rendered as a numbered list starting from 1.

<ol>
  <li>Drive to the end of the road</li>
  <li>Turn right</li>
  <li>Go straight across the first two roundabouts</li>
  <li>Turn left at the third roundabout</li>
  <li>The school is on your right, 300 meters up the road</li>
</ol>



Nesting Lists (NOT A LIST TYPE):
- It's allowed to implement sub-bullets within numbered lists or vice versa.

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
- To mark up a set of items and their associated descriptions (terms, definitions, questions, or answers).
- Implemented with the <dl> (description list) element, each term is wrapped in a <dt> (description term) element, and each
description is wrapped in a <dd> (description definition) element.
NOTE: Browser default styles will display description lists with the descriptions indented from the terms.

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


----------------------------------------------------------------------------------------------------------------------------------



03.6: Quotations and Advanced Text Features

Quotations
- HTML provide features for marking up quotations.

Blockquotes:
- Implemented with the <blockquote> element, it signifies the quotation of block level content (paragraph, list, etc).
- Moveover, the element includes a "cite" attribute to include the URL referencing the quote.
NOTE: Broswer default styling will render this element as an indented paragrpah to indicate a quote.

<p>Here is a blockquote:</p>
<blockquote
  cite="https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/blockquote">
  <p>
    The <strong>HTML <code>&lt;blockquote&gt;</code> Element</strong> (or
    <em>HTML Block Quotation Element</em>) indicates that the enclosed text is
    an extended quotation.
  </p>
</blockquote>



Inline Quotations:
- Works in the same manner, with the exception of using the <q> (inline quotation) element.
NOTE: Broswer default styling will render this as a normal text with quotes to indicate quotation.

<p>
  The quote element — <code>&lt;q&gt;</code> — is
  <q
    cite="https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/q">
    intended for short quotations that don't require paragraph breaks.
  </q>
</p>



Citations:
- The cite attribute by itself isn't utilized by browsers, screen readers, or etc to display the reference of the source, without
the assistance of JavaScript or CSS.
- HOWEVER, you may use the <cite> element that contains the title of the resource being quoted to be linked to the quoted source
NOTE: Citations are styled in italic font by default.

<p>
  According to the
  <a href="/en-US/docs/Web/HTML/Reference/Elements/blockquote">
    <cite>MDN blockquote page</cite></a>:
</p>

<blockquote
  cite="https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/blockquote">
  <p>
    The <strong>HTML <code>&lt;blockquote&gt;</code> Element</strong> (or
    <em>HTML Block Quotation Element</em>) indicates that the enclosed text is
    an extended quotation.
  </p>
</blockquote>

<p>
  The quote element — <code>&lt;q&gt;</code> — is
  <q cite="https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/q">
    intended for short quotations that don't require paragraph breaks.
  </q>
  — <a href="/en-US/docs/Web/HTML/Reference/Elements/q"><cite>MDN q page</cite></a>.
</p>


- Notice that in the first <p> element that an <a> element with the "href" attribute is declared and assigned to reference
the <cite> element's title resouce with the addition of a url hyperlink.



Abbreviations:
- With the <abbr> element its wrapped around an abbreviation or acronym alongside the expansion of the term in plain text.
- This provides a hint or semantic to the user on meaning or change to the content.

- Instead of plain text for expansion of the term, you can assign it as the value of the "title" attribute in the <abbr> element.
Thus, when you hover over the abbreviation it will display the full expansion of the term.

<p>
  We use <abbr>HTML</abbr>, Hypertext Markup Language, to structure our web
  documents.
</p>

<p>
  I think <abbr title="Reverend">Rev.</abbr> Green did it in the kitchen with
  the chainsaw.
</p>

- The first <p> element is the <abbr> element with expansion in plain text.
- The second <p> element with the "title" attribute will have a dotted underline in addition to the term displayed when hovered overed it.
NOTE: There was <acronym> element, but removed fro the <abbr> element and should never be used.



Marking up Contact Details:
- The <address> element is used to wrap around contact details. Should only be used to provide information for the document near
the <article>, <body> elements or even the footer.
NOTE: This element is conveyed for additional semantic information.

<address>Chris Mills, Manchester, The Grim North, UK</address>
- Simple <address> implementation.

<address>
  Page written by <a href="../authors/chris-mills/">Chris Mills</a>.
</address>
- Implement a link reference to specific parts of the address.

<address>
  <p>
    Chris Mills<br />
    Manchester<br />
    The Grim North<br />
    UK
  </p>

  <ul>
    <li>Tel: 01234 567 890</li>
    <li>Email: me@grim-north.co.uk</li>
  </ul>
</address>
- Markup complex content information.



Superscript and Subscript:
- Used to markup items such as dates, chemical formulas, and mathematical equations for enhanced meaning.

- The <sup> (superscript) element to display text as superscript for typographical reasons.
NOTE: Superscripts are usually rendered with a raised baseline using smaller text.

- The <sub> (subscript) element to display as subscript for typographical reasons.
NOTE: Usually rendered with a lowered baseline using smaller text.

<p>My birthday is on the 25<sup>th</sup> of May 2001.</p>
<p>
  Caffeine's chemical formula is
  C<sub>8</sub>H<sub>10</sub>N<sub>4</sub>O<sub>2</sub>.
</p>
<p>If x<sup>2</sup> is 9, x must equal 3 or -3.</p>

- The following instance, 25 will have (th) placed like an exponent. Meanwhile, the chemical formula will have their
like a subscript.



Additional Markups in HTML:
: <code> - Marking up generic pieces of computer code.
: <pre> - Retaining whitespace within the text.
: <var> - Marking up variable names
: <kbd> - Marking up keyboard and other inputs entered into the computer.
: <samp> - Marking up the output of a computer program.

<pre><code>const para = document.querySelector('p');

para.onclick = function() {
  alert('Owww, stop poking me!');
}</code></pre>

<p>
  You shouldn't use presentational elements like <code>&lt;font&gt;</code> and
  <code>&lt;center&gt;</code>.
</p>

<p>
  In the above JavaScript example, <var>para</var> represents a paragraph
  element.
</p>

<p>Select all the text with <kbd>Ctrl</kbd>/<kbd>Cmd</kbd> + <kbd>A</kbd>.</p>

<pre>$ <kbd>ping mozilla.org</kbd>
<samp>PING mozilla.org (63.245.215.20): 56 data bytes
64 bytes from 63.245.215.20: icmp_seq=0 ttl=40 time=158.233 ms</samp></pre>



Marking Up Times and Dates:
- The <time> element is provided for marking up times and dates in machine-readable format.
- Additionally, the "datetime' attribute is included to indicate the time / date of the element with the proper format.

<!-- Standard simple date -->
<time datetime="2016-01-20">20 January 2016</time>
<!-- Just year and month -->
<time datetime="2016-01">January 2016</time>
<!-- Just month and day -->
<time datetime="01-20">20 January</time>
<!-- Just time, hours and minutes -->
<time datetime="19:30">19:30</time>
<!-- You can do seconds and milliseconds too! -->
<time datetime="19:30:01.856">19:30:01.856</time>
<!-- Date and time -->
<time datetime="2016-01-20T19:30">7.30pm, 20 January 2016</time>
<!-- Date and time with timezone offset -->
<time datetime="2016-01-20T19:30+01:00">
  7.30pm, 20 January 2016 is 8.30pm in France
</time>
<!-- Calling out a specific week number -->
<time datetime="2016-W04">The fourth week of 2016</time>


----------------------------------------------------------------------------------------------------------------------------------

Part 1 - Practical Knowledge Question
A developer is creating a webpage about computer programming. They want to:
- Organize the page with a main heading and appropriate subheadings.
- Emphasize a warning that users should pay attention to.
- Display a sequence of steps that must be followed in order.
- Include a short quotation within a paragraph and identify its source.

Question: For each requirement, which HTML element or elements would you choose, and why? Explain the semantic purpose of each choice 
rather than describing only its default visual appearance.

1. Firstly, I would implement the main heading in the <body> section to be displayed on the webpage. Additionaly the main
heading will be represented with <h1> element, with each subheading represented by <h2> downwards. However, only one <h1> element
may exist per page with multiple other headings in sequential order.

2. To place semantic emphasize on a specific part of text, it should be wrapped around with the <strong> element for semantic purposes.
Moreover, it would be rendered as bold format, but should not be visual apperance, but semantics.

3. For lists in which the sequence matters <ol> ordered lists element should be implemented with each item wrapped with <li>
(list item) element. Moreover the list will be numbered starting from 1.

4. 
<p>
    Hello this text is about something being referenced.
    <q>
        Note that is information is quoted. In 
    </q>
    <a href="https://example.com"><cite>
        website
    </cite></a>
</p>


Part 2 - Application Exercise
- section03.html

----------------------------------------------------------------------------------------------------------------------------------
05 - Hyperlinks:

- Links also known as hyperlinks, are what makes the Web a web.
- Hyperlinks are features of an HTML document that, when clicked cauese the browser to navigate
to other documents or resources.
- Hyperlinks point to a URL (Uniform Resource Locator) of each resource on the web.


Anatomy of a Link:
- As basic link is created by wrapping the test inside an <a> element.
<a> - Anchor element, in combination with its "href" attribute creates a hyperlink to web pages, files, email addresses, or
anything else a URL can address.

href - Hypertext reference attribue, that points to a certain direction or address assigned.

EX:
<p>
  I'm creating a link to
  <a href="https://www.mozilla.org/en-US/">the Mozilla homepage</a>.
</p>

- The code above, creates a hyperlink to the text: "the Mozilla homepage" to redirect the browser to the link when clicked.




Block Level Links:
- As any content can be made into a link, even block-level elments.
EX: <p>, <h1>
Meanwhile <a> is an inlin element.
- Thus, if you want to make a heading element a link, wrap it in an anchor element:
<a href="https://developer.mozilla.org/en-US/">
  <h1>MDN Web Docs</h1>
</a>
<p>
  Documenting web technologies, including CSS, HTML, and JavaScript, since 2005.
</p>



Image Links:
-To turn an image into a link, wrap the <img> element with an <a> element.
<a href="https://developer.mozilla.org/en-US/">
  <img src="mdn_logo.svg" alt="MDN Web Docs" />
</a>




Adding Supporting Information with the Title Attribute:
- You can add a "title" attribute to your link for additional information:
<p>
  I'm creating a link to
  <a
    href="https://www.mozilla.org/en-US/"
    title="The best place to find more information about Mozilla's mission and how to contribute">
    the Mozilla homepage</a
  >.
</p>

- The title attribute will be displayed when the user hovers above the hyperlink.



Creating Your Own Example Links:
1. Click "Play" in the code block below to edit the example in the MDN Playground, or make a copy of our getting started template and copy the below code into there.

2. Link the "Red squirrel" and "Eastern gray squirrel" text to Wikipedia pages that describe the relevant species. Give each link a title attribute equal to the species' scientific name.

3. Link the "Wikipedia Squirrel page" text to the main Wikipedia page for squirrels.

test_03.html



A quick Primer on URLs and Paths:

Same Directory:
- If you want to include a hyperlink inside your html file pointing to another html file, you can specify
the path with the filename:
<p>
  Want to contact a specific staff member? Find details on our
  <a href="contacts.html">contacts page</a>.
</p>

- Additionally, you can start a path to a file using (./):
<p>
  Want to contact a specific staff member? Find details on our
  <a href="./contacts.html">contacts page</a>.
</p>


Moving down into Subdirectories:
- To include hyperlinks from files in different directories. You must specify the directory's name, forward slash,
then the name of the file:
<p>Visit my <a href="projects/index.html">project homepage</a>.</p>


Mobving back up into Parent Directories:
- To include hyperlinks point back up in directory levels, use the (..) to go up a directory to access a file:
<p>A link to my <a href="../pdfs/project-brief.pdf">project brief</a>.</p>





Document Fragments:
- Elements with an id attribute in the document can create a document fragment that can be linked to.
id - A global attribute that must be unique within the entire document.

<h2 id="mailing_address">Mailing address</h2>

- To link to that specific id, you include it at the end of the path followed by (#) symbol:
<p>
  Want to write us a letter? Use our
  <a href="contacts.html#mailing_address">mailing address</a>.
</p>

- With the same document fragment reference, you can link it dto another part of the current document.
<p>
  The <a href="#mailing_address">company mailing address</a> can be found at the
  bottom of this page.
</p>
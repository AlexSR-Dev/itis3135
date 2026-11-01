Section 4 - Creating Hyperlinks

04.1: What is a Hyperlink?

- A feature that describes the Web as it causes the browser to navigate to other resources.
- Every resource on the web has an address, a URL (Uniform Resource Locator) that hyperlinks point towards.

NOTE: URLS can point to files, images, bascially anything with an address on the Web.


----------------------------------------------------------------------------------------------------------------------------------



04.2: Anatomy of a Link

- Created by wrapping text in an <a> element with the "href" (hypertext reference) attribute, that contains the web address.

<p>
  I'm creating a link to
  <a href="https://www.mozilla.org/en-US/">the Mozilla homepage</a>.
</p>

- In the following instance, the text "the Modzilla homepage" will all become the hyperlink to the web address provided.


----------------------------------------------------------------------------------------------------------------------------------



04.3: Adding Supporting Information with title

- The "title" attribute contains additional information about the link, such as the type of information or warnings.
- Reminder that a link title text will only be revealed if the mouse is hovered over the hyperlink.

<p>
  I'm creating a link to
  <a
    href="https://www.mozilla.org/en-US/"
    title="The best place to find more information about Mozilla's mission and how to contribute">
    the Mozilla homepage</a
  >.
</p>


----------------------------------------------------------------------------------------------------------------------------------



04.4: Block-level and Image Links

- Almost any content can become a link, such as block-level elements (appears on a new line such as <p>).
- Thus, the only requirement would be to wrap the element with the <a> element.
NOTE: <a> is an inline and can bed wrapped, unless the content doesn't contain descendants or nested links.

<a href="https://developer.mozilla.org/en-US/">
  <h1>MDN Web Docs</h1>
</a>
<p>
  Documenting web technologies, including CSS, HTML, and JavaScript, since 2005.
</p>


Image Links:
- Wrap the <img> element with an <a> element. To turn an image into a link.

<a href="https://developer.mozilla.org/en-US/">
  <img src="mdn_logo.svg" alt="MDN Web Docs" />
</a>


----------------------------------------------------------------------------------------------------------------------------------



04.5: A Quick Primer on URLs and Paths

- A URL is a string of text that defines where something is located on the Web. The web server receives the request and responds.
EX: https://www.mozilla.org/en-US/


Paths:
- The "root" is the beginning or the start of the directory/folder structure.


Same Directory:
- To include a hyperlink to a different file from the same directory in the current file, simply reference it explicitly:

<p>
  Want to contact a specific staff member? Find details on our
  <a href="contacts.html">contacts page</a>.
</p>

- In the instance above, we were at index.html file and accessed the contacts.html file, which is at the same directory.
- For more clarity, you can always start a path to a file in the same directory with (./).

<p>
  Want to contact a specific staff member? Find details on our
  <a href="./contacts.html">contacts page</a>.
</p>



Moving down into Subdirectories:
- To include a hyperlink from the root to a specific location, you indicate the directory/folder name, with a forward slash, then
the name of the file. However if its located in a deeper directory, you continue with directory/ until the file can be precisely located.

<p>Visit my <a href="projects/index.html">project homepage</a>.</p>

- The following instance had a file located from the project's directory.



Moving back up into Parent Directories:
- To include a hyperlink from a previous directory level then into another directory, you use (..)

<p>A link to my <a href="../pdfs/project-brief.pdf">project brief</a>.</p>

- In the following instance, you went back one level, then went into the pdfs directory, to finally the file.

NOTE: Multiple instances of going up a level can be implemented into complex paths: ../../../complex/path/to/my/file.html



Linking Relative To the Root Directory:
- Note that if the linked file moves to another location, the link will break and becomes unusable.
- You can begin with (/) for a specific location that won't break if the linking file is moved.
- Indicates that the path starts in the root directory of the site.

<p>A link to my <a href="/pdfs/project-brief.pdf">project brief</a>.</p>

Absolute Path - Always points to the same location relative to the site root directory using a (/) at the start of the path.
Relative Path - Points to a location relative to the file linking from. Thus does not include (/) at the start, so if the
file moves the path is still relative to the file, but points to a different absolute location. BUT root-relative path starts with (/).



Linking with full URLs:
- You're allowed to specify a full URL as your path, as the location is the same in the web.

<a href="https://www.example.com/projects/">projects</a>
- This link will always be referenced to that location, even if the site moves to a different domain.



Internal and External Links:
Internal Link - A link pointed to a resource on your site.
External Link - A link pointed to a resource on a different site.

- In external links, the full URL as the path must be included.

<a href="https://www.some-other-site.com">projects</a>


- For specification of an internal link, you can use relative/absolute path, or a full URL:
<a href="https://www.example.com/projects/">projects</a>

<a href="projects">projects</a>

- NOTE: Its recommended to use relative path for portability, as a change to the domain for (https://www.example.com/projects/)
will have to be changed to all full URL links. As for paths such as (/projects) it will remain functional as its relative
to the directory structure.


----------------------------------------------------------------------------------------------------------------------------------



04.6: Document Fragments

- Allows a link to specific parts of an HTML document.
- In elements with an "id" attribute in a document, it auto creates a document fragment that can be linked/referenced to.

<h2 id="mailing_address">Mailing address</h2>

- To link to a specific "id", you must include it at the end of the path, preceded with (#):
<p>
  Want to write us a letter? Use our
  <a href="contacts.html#mailing_address">mailing address</a>.
</p>
- In this instance, the hypertext reference will include the fragment.

- Can be used on its own to link to another part of the current document:
<p>
  The <a href="#mailing_address">company mailing address</a> can be found at the
  bottom of this page.
</p>


----------------------------------------------------------------------------------------------------------------------------------



04.7: Best Practices for Link Text

Use Clear Link Wording:
- Links should be accessible to all readers, for instance screen readers should understand the content being told:

<p><a href="https://www.firefox.com/en-US/">Download Firefox</a></p>
- The following defines what is being directed with the hyperlink.

<p>
  <a href="https://www.firefox.com/en-US/">Click here</a> to download Firefox
</p>
- This however is unclear to what hyperlink itself is being referenced without additional information.

TIPS:
- Don't repeat the URL as part of the link text.
- Don't say "link".
- Keep link text short as possible.
- Minimize multiple copies.


----------------------------------------------------------------------------------------------------------------------------------



04.8: Linking to Non-HTML Resources

- In the event you link a resource that isn't accessible immediately, you should state in the text its effect.
For instance pop-ups, downloads, etc.

<p>
  <a href="/large-report.pdf" download>
    Download the sales report (PDF, 10MB)
  </a>
</p>

<p>
  <a href="https://www.example.com/video-stream/" target="_blank">
    Watch the video (stream opens in separate tab, HD quality)
  </a>
</p>


- When linking to a resource that is downloadable rather than opened on another browser. Use the "download" attribute to provide
a default save filename:

<a
  href="https://download.mozilla.org/?product=firefox-latest-ssl&os=win64&lang=en-US"
  download="firefox-latest-64bit-installer.exe">
  Download Latest Firefox for Windows (64-bit) (English, US)
</a>


----------------------------------------------------------------------------------------------------------------------------------



04.9: When to Open Links in a New Tab

- By default, links open in the same tab as the page they are on.
- However, certain links like external may be opened in a new tab. With the "target" attribute set to "_blank" a new tab/window.

Firefox is developed by the
<a href="https://www.mozilla.org/en-US/" target="_blank">Mozilla Foundation</a>.

CONSIDER:
- New tabs are useful for "parallet" naviagtion experience, meanwhile links in the same tab are continuations of the current page.
- New tabs can become diorienting to users.
- Links opened in a new tab are difficult to open in the same tab.
- Screen readers may lose context of their location on the page, when opened in a new tab.

THUS:
- Provide cues to links, like icons or text.
- External links are generally for new tabs.
- Internal links are generally in the same tab.


----------------------------------------------------------------------------------------------------------------------------------



04.10: Email Links

- A link/button when clicked, opens a new outgoing email message rather than a page.
- Implemented through the <a> element alongside "mailto:" URL scheme in the reference, to indicate the email address of the recipient.

<a href="mailto:nowhere@mozilla.org">Send email to nowhere</a>

- Additionally, to open a new outgoing email window by the user's email client, with just "mailto:". Used as "Share" links to
send an email to an address of the user's choice.


Specifying Details:
- Moveover, you can provide information such as mail header fields to be added in the "mailto" url.
- The following instance implements "subject", "cc", "body", and "bcc".

<a
  href="mailto:nowhere@mozilla.org?cc=name2@rapidtables.com&bcc=name3@rapidtables.com&subject=The%20subject%20of%20the%20email&body=The%20body%20of%20the%20email">
  Send mail with cc, bcc, subject and body
</a>

- NOTE: The (?) mark is used to separate the main URL from the field values. And (&) to separate each field in the "mailto:" URL. 


----------------------------------------------------------------------------------------------------------------------------------

Practical Assessment:

1. A website has these files:
website/
├── index.html
├── contacts.html
├── projects/
│   └── index.html
└── pdfs/
    └── project-brief.pdf

- From index.html, explain how you would create:

1) A link to contacts.html
- Since index.html is relative to contact.html file in the same directory, we can use (./) to start a path in the same directory, thus:
<a href="./contacts.html"></a>

2) A link to projects/index.html
- Since we start in index.html within the "website" directory, we would have to go access the "projects" directory which is at
the same directory.
<a href="/projects/index.html"></a>

3) A link to pdfs/project-brief.pdf that suggests downloading the file.
- We can implement a root-relative path starting with (/), or alternatively a relative path. 
- Additionally you should announce to the user the purpose of the link, in this case a download.
- Lastly, the "download" attribute should be mentioned for a default save filename.
<a href="/pdfs/project-brief.pdf" download>Download Project Brief (PDF)</a>

4) A link that jumps to an element with id="mailing_address" inside contacts.html
- For a link to jump to a specific element on the document, we would have to append the "id" value after the pathway with the (#)
symbol.
<a href="contacts.html#mailing_address">Mailing Address</a>



Implementation Exercise: Creating Hyperlinks
- section04.html

----------------------------------------------------------------------------------------------------------------------------------
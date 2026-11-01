Section 05 - Images in HTML

05.1 - How to Embed Images

- You must implement the <img> (image) element.
- This void element requires both the "src" and "alt" attributes.

"src" - Contains the URL pointing to the image to embed.
- Moveover, the URL can be relative or absolute.

"alt" - Defines the text that replaces the image in the page.

<img src="dinosaur.jpg" alt="Dinosaur" />
- The following instance points to a jpg file in the same directory to embed.

- Embedding images with absolute URL:
<img src="https://www.example.com/images/dinosaur.jpg" alt="Dinosaur" />
- Not recommended, as you should try to keep images of your website on the same server as the HTML.



Alternative Text:
- "alt" attribute, is assigned a value to become the textual description of the image, in the event the image cannot be displayed.

<img
  src="images/dinosaur.jpg"
  alt="The head and torso of a dinosaur skeleton;
          it has a large head with long sharp teeth" />

- Thus in the above instance, if the jpg pathway doesn't load properly, then the alternative text is replaced over it.
- Test this by proposely misspelling your filename, to display the alt text.

USEFUL:
- Screen readers to read it.
- Misspelling of the file or path.
- Browser doesn't support the image type.
- Text for search engines to match with search queries.
- Users with reduced data transfers.


----------------------------------------------------------------------------------------------------------------------------------



05.2 - Image Dimensions and Supporting Information

- In addition to the <img> element, the "width" and "height" attributes can be implemented to specify their width and height.

<img
  src="images/dinosaur.jpg"
  alt="The head and torso of a dinosaur skeleton;
          it has a large head with long sharp teeth"
  width="400"
  height="341" />

NOTE: Its useful to indicate the size of the Image, for the browser to allocate space for the image.
Else, the browser would have to move text on the webpage, to re-render the page.

If the one or the other sizing attributes isn't set, then it will defaulted to "auto" a value that maintains the image's aspect ratio.



Resizing Images:
NOTE: If you set the one dimension, it can be calculated to preserve image aspect ratio.
BUT, setting both dimension with different ratios the result becomes fuzzy or distorted.
- THUS, an image editor should be used for the correct size of the image prior to embedding.


Image Titles:
- The "title" attribute may be implemented to images, for additional information.
REMAINDER: The info becomes viewable when hovering over the image with the mouse.
- Not recommended, due to conflicting issues for screen readers and supporting information should be in the main article text.


----------------------------------------------------------------------------------------------------------------------------------



05.3 - Media Assets and Licensing

- Prior to using an image, ensure you either own it or have permission to use it.

License Types:
: All Rights Reserved
- Often released under closed copyright protections, the only manners to obtain it would be:
- Explicit permission from the copyright holder.
- Pay a license fee.
- Limiting usage for "fair use" under your jurisdiction.

NOTE: If safe to assume, images without copyright notices or license terms are protected by all rights reserved.

: Permissive
- Images released under a permissive license, requires various conditions to fulfil, varys by license:
- Provide a link to the original source.
- Sharing any derivative works using the image.
- Not sharing any derivative works.
- Not in any commerical work.
- Copy of license should be included with the image.

: Public Domain/CC0
- Known as "no rights reserved", can be used without permission or conditions.
- Nevertheless, obtain proof the image is in the public domain.


----------------------------------------------------------------------------------------------------------------------------------



05.4 - Annotating Images with Figures and Captions

- Use the <figure> and <figcaption> elements, it provides a semantic container for figures and clearly links the figure to the caption.

<figure>
  <img
    src="images/dinosaur.jpg"
    alt="The head and torso of a dinosaur skeleton;
            it has a large head with long sharp teeth"
    width="400"
    height="341" />

  <figcaption>
    A T-Rex on display in the Manchester University Museum.
  </figcaption>
</figure>

- In the above instance, the <figcaption> element tells browsers, that the caption describes the other content of the <figure> element.
NOTE: A figure can be several images, videos, or etc.
- Also captions benefit people who can see the image, unlike "alt". However both should not be compared as the same functionality.


----------------------------------------------------------------------------------------------------------------------------------



05.5 - CSS Background Images

- CSS can be used to embed images into webpages.
- With the "background-image" property, and other "background-*" properties may be used to control background image placement.

p {
  background-image: url("images/dinosaur.jpg");
}
- The above instance, places a background image on every paragraph on a page.
NOTE: CSS background images are for decoration ONLY.
- Meanwhile, HTML embed have semantic meaning.

----------------------------------------------------------------------------------------------------------------------------------

Practical Knowledge Question:
Scenario: You're building a webpage for a museum. It contains a photograph of a dinosaur skeleton that is important to the article, a 
caption identifying the museum where it is displayed, and a decorative background image behind a paragraph.

Explain which HTML or CSS features you would use for each of these three requirements:

1. The dinosaur photograph must have an appropriate text alternative and reserve space before it finishes loading.
- Regarding alterantive text, the photo would have to be implemented through HTML to provide semantic meaning with the "alt", 
attribute, however the reserve space, must be explicitly set to the photos parameters to achieve reserve space in HTML. With "width" and
"height" attributes to reserve space for the image prior to loading.

2. The photograph needs a visible caption that describes the displayed skeleton.
- Also HTML, as CSS doesn't not convey semantic meaning, therefore to implement a caption, both <figure> and <figcaption> will need to 
added within the HTML file to display the caption of the photo.

3. The paragraph needs a decorative background image that does not replace or convey essential article content.
- For decorative purposes, a CSS file link to the HTML file is recommended as background images regards placement.
Thus, HTML only, wouldn't be needed for just decorative purposes.


Implementation Exercise: Images in HTML
- section05.html

Implementation checklist
0 of 5

[ ] 1. Document setup
Create a valid HTML document with <!doctype html>, <html lang="en-US">, UTF-8 charset, the title "Section 05 - Images", and a body.

[ ] 2. Meaningful image
Embed an image using <img> with a valid src and descriptive alt text. Include width and height attributes to reserve space.

[ ] 3. Figure and caption
Wrap the image in a <figure> and add a visible <figcaption> identifying the image.

[ ] 4. Image title
Add a title attribute to the image with brief supplementary information. Remember this is supplemental, not a substitute for alt text.

[ ] 5. Decorative background
Create a paragraph and use CSS background-image to apply a decorative image. Put the CSS in a separate styles05.css file and link it from the HTML head.

----------------------------------------------------------------------------------------------------------------------------------
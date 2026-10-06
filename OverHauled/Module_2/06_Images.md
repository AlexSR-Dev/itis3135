06 - HTML Images:

How to put an Image on a Webpage?
<img> - Image element, is a void element (cannot have any child content and cannot have an end tag) that requires
two attributes to be useful: src and alt.

src - Attribute contains a URL pointing to the image you want to embed in the page.
Additionally, like the href attribute for <a> elements, src attribute can be a relative or absolute URL, without it an img
element has no image to load.

- Not recommended to link absolute URLS, as domain image can change over time.
- Never point the src attribute at an image hosted on someone else's website without permission. As it is considered
hotlinking due to the unethical cost of someone to pay bandwidth cost for delivering the image when someone visits
your page.

alt - Alternative text attribute, where the value is a textual description of the image, in the event that the image cannot
be seen/displayed or from poor connection.

EX:
<img
  src="images/dinosaur.jpg"
  alt="The head and torso of a dinosaur skeleton;
          it has a large head with long sharp teeth" />



Width and Height:
- The width and height attributes can specify the dimensions of your image.
- Represented through pixels. You can identify your image's width and height in many ways.
EX:
<img
  src="images/dinosaur.jpg"
  alt="The head and torso of a dinosaur skeleton;
          it has a large head with long sharp teeth"
  width="400"
  height="341" />


- In cases in which the page renders after the browser loads the HTML, then the specification of the actual size
of the image in your HTML using the width and height attribtues matters, and will allow the browser to identify how much
space to allow for the image prior to downloading.

- If the width and height attributes are explicitly stated, then it will default to auto maintaining the image's aspect ratio.



Resizing Images:
- As previously stated, its good practice to specify the actual size of your images using HTML attrbites.
- As the image will end up appearing distorted, without maintaining the correct aspect ratio.
- Use CSS instead.



Image Titles:
- You can also include the title attributes to images, for supporting information if needed.
EX:
<img
  src="images/dinosaur.jpg"
  alt="The head and torso of a dinosaur skeleton;
          it has a large head with long sharp teeth"
  width="400"
  height="341"
  title="A T-Rex on display in the Manchester University Museum" />

- But not recommended as users do not necessarily hover over images for information.



Image Embedding Practice:
1. Click "Play" in the code block below to edit the example in the MDN Playground.
2. Edit the existing <img> element so that it embeds the image dinosaur_small.jpg.
3. Add an alt attribute to the image. You can check that the alt text works by temporarily misspelling the image filename.
4. Set the image's correct width and height (hint: it is 200px wide and 171px high), then experiment with other values to see what the effect is.
5. Set a title on the image.

test_04.html

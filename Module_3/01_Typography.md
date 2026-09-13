01 - Typography:


Fundamental Text and Font Styling:
- CSS properties used to style text falls into two categories:
• Front Styles: Properties that affect a text's font, size, bold, italic, etc.
• Test Layout Styles: Properties that affect the spacing and other layout features of the text, thus space between lines, letters,
and space alignment.


Fonts Styles:

Color:
- Color property sets the color of the foreground content of the selected elements, which is text, underline, or overline
EX:
p {color: red;}
- This causes the paragraph element to become red.



Front Families:
- Use the "font-family" property to specify a front (or list of fonts) for the browser to apply to the selected elements.
- The browser will only apply fonts available on the machine the website is being accessed on; if not the browser default font is used.
EX:
p {font-family: "Arial";}



Web Safe Fonts:
- Fonts available across all systems.
Name	Generic type	Notes
Arial	sans-serif	    It's often considered best practice to also add Helvetica as a preferred alternative to Arial as, although their 
                        font faces are almost identical, Helvetica is considered to have a nicer shape, even if Arial is more broadly 
                        available.

Courier New	monospace	Some OSes have an alternative (possibly older) version of the Courier New font called Courier. It's considered 
                        best practice to use both with Courier New as the preferred alternative.
Georgia	serif

Times New Roman	serif	Some OSes have an alternative (possibly older) version of the Times New Roman font called Times. It's considered 
                        best practice to use both with Times New Roman as the preferred alternative.

Trebuchet MS	sans-serif	You should be careful with using this font — it isn't widely available on mobile OSes.

Verdana	sans-serif	


Default Fonts:
- CSS defines five generic names for fonts: "serif", "sans-serif", "monospace", "cursive", "fantasy".



Font Stacks:
- In the event that your initial font isn't supported, you can supply a font stack for the browser to choose multiple fonts of.
- Involves a "font-family" value consisting of multiple font names separated by commas:
EX:
p {font-family: "Trebuchet MS", "Verdana", sans-serif;}
- Starting from the beginning of the list, the browser searches for available fonts on the machine.

EX:
p {
  color: red;
  font-family: "Helvetica", "Arial", sans-serif;
}



Font Size:
- Set with the "font-size" property can take values measured in most of the following units:
• px (pixel): An absolute unit, results in the same final computed value for the font on the page.
• em : Is equal to the font size set on the parent element of the current element we are styling.
- Tricky in nested elements with different font sizes set.
- Can be used to size everything, not just text.
• rem : Works like "em", execpt one rem is equal to the font size set on the root element of the document, not the parent element.


<article> - Element representing a self-contained composition in a document, intended to be independently distributable or reusable.
EX:
<!-- document base font-size is 16px -->
<article>
  <!-- If my font-size is 1.5em -->
  <p>My paragraph</p>
  <!-- How do I compute to 20px font-size? -->
</article>

- In this example of nested element, if the font size were set to em, the math to transition px to em would become complicated.
- Thus, it is best to use "rem". and avoid the "font-size" of container elements where possible.



Font Style, Font Weight, Text Transform, and Text Decoration:
- CSS provides four common properties to alter the visual weight/emphasis of text:

• font-style: Used to turn italic text on/off:
    - normal: Sets the text to normal font.
    - italic: Sets text with italic font if available, else uses oblique.
    - oblique: Set the text to use a simulated version of an italic font.

• font-weight: Sets the boldness of the text, through the many values available:
    - normal, bold: Normal and bold font weight.
    - lighter, bolder: Sets the current element's boldness to be one step lighter/heigher than its parent element's boldness.
    - 100-900: Numeric boldness values to provide more control.

• text-transform: Set you font to be transformed, values:
    - none: Prevents any transformation.
    - uppercase: Transforms all text to captials.
    - lowercase: Transforms all text to lower case.
    - capitalize: Transforms all words to have the first letter capitalized.
    - full-width: Transforms all glyths to be written inside a fixed-width square, similar to a monospace font, allowing aliging of latin characters along with Asian language glyphs.

• text-decoration: Sets/unsets text decoration on fonts (to unset the default underline on links when styling them), values:
    - none: Unset any text decorations already present.
    - underlines: Underlines the text.
    - overline: Gives the text an overline.
    - line-through: Puts a strikethrough over the text.
- Can accept multiple values at once.
- Also has shorthand properties for "text-decoration-line", "text-decoration-style", and "text-decoration-color".

EX:

html {
  font-size: 10px;
}

h1 {
  font-size: 5rem;
  text-transform: capitalize;
}

h1 + p {
  font-weight: bold;
}

p {
  font-size: 1.5rem;
  color: red;
  font-family: "Helvetica", "Arial", sans-serif;
}




Text Drop Shadows:
- Using the "text-shadow" property to add shadows to text:
text-shadow: 4px 4px 5px red;

The four properties:
1. The horizontal offset of the shadow from the original text, can be any of the available CSS length and size units.
Positive values move the shadow right, and negative values left. Must be included.

2. Vertical offset of the shadow from the original text. Similar to horizontal, but moves the shadow up/down. Must be included.

3. Blur radius: Higher value means the shadow is dispersed more widely. No value, defaults to 0, no blur.

4. The base color of the shadow, can be any CSS color unit, if not included, defaults to currentColor.


Multiple Shadows:
- In the same text with the included multiple shadow values are separated by commas:
h1 {
  text-shadow:
    1px 1px 1px red,
    2px 2px 1px red;
}




Text Layout:

Text Alignment:
- "text-align" property control how text is aligned within its containing content box.
Values:
• left: Left-justifies the text.
• right: Right-justifies the text.
• center: Centers the text.
• justify: Text is speaded out, careful to use and should instead use hypthens.
h1 {
    text-align: center;
}


Line Height:
- "line-height" property sets the height of each line of text, can take unit and unitless value, acting as a multipler and
considered the best option.
- With unitless value, font-size gets multipled and results in the line-height.
p {
  line-height: 1.6;
}


Letter and Word Spacing:
- "letter-spacing" and "word-spacing" properties sets the spacing between letters and words in your text.
- Often for specific appearance of dense fonts.
p::first-line {
  letter-spacing: 4px;
  word-spacing: 4px;
}


Many other properties:
https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Text_styling/Fundamentals




Font Shorthand:
- Many font properties can be set through the shorthand property "font".
Such as "font-style", "line-height", and etc.

- Only "font-size" and "font-family" are required when using the font shorthand property.
- Using just a forward slash "/" in between the "font-size" and "line-height" properties.
font:
  italic normal bold normal 3em/1.5 "Helvetica",
  "Arial",
  sans-serif;


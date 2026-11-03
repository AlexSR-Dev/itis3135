Section 8 - Forms

08.1 - Your First Form

08.1.1) What are Web Forms?
- The interaction between a user and a website/application, that allows the transmission of data to be processed, stored, or updated
from a user or a developer standpoint.
- Its composed of one or more "form controls (widgets)" with HTML forms to structure the overall form.

----------------------------------------------------------------------------------------------------------------------------------


08.1.2) Desigining a Form
- The design process defines the data from a user experience (UX) to prevent frustration and losing user engagement.
THUS: Start simple and build up the abstraction needed to avoid complexity that the user wouldn't need to see or handle.
START: By creating a form with three text fields and one button.

----------------------------------------------------------------------------------------------------------------------------------


08.1.3) Implementing form HTML
- The <form> element, represents the document section containing interactive controls for submitting information.
Additionally, it pratical for this container element to include two attributes:

"action" - Defines the URL, where the form's collected data should be sent when submitted.

"method" - Defines the HTTP method to send the data with, assign "get" or "post".
- "post" value sends data as request body.
- "get" value appends data to the "action" URL with a '?' separator.

<form action="/my-handling-form-page" method="post">…</form>
- The instance above creates a form with a "action" and "method" attribute to send the submitted data.


a) The three Text Fields:
- The <label> element, represents a caption (text description) for an item (form widget).
- <input> element, represents the interactive controls for web forms. With its attributes varying in assigned values.
- <textarea> element, represents a multi-line plain text editing control. With similar attributes as <input> for assignment and specs.

<form action="/my-handling-form-page" method="post">
  <p>
    <label for="name">Name:</label>
    <input type="text" id="name" name="user_name" />
  </p>
  <p>
    <label for="mail">Email:</label>
    <input type="email" id="mail" name="user_email" />
  </p>
  <p>
    <label for="msg">Message:</label>
    <textarea id="msg" name="user_message"></textarea>
  </p>
</form>

- In the instance above, the <label> element includes the "for" attribute whose value is used to "id" (identifier) in the <input> element 
to create a connection between the interactive control with its label.
THUS: Association of the label with the form control enables interactivity.

"for" - Attribute is used by another element to establish a link between them. Used mostly for <label> and <output>.
"id" - Attribute is a identifier unqiue to the element to be identified.

- Moreover the <input> element, "type" attribute defines how the element appears and behaves. For instance the "text" value allows
iputs of a basic single-line text field. Meanwhile the "email" value only accepts email address format. Also the "name" attribute
is a string that specifies a name for the input control. (Important for buttons).

"type" - Attribute is a string specifying the many types of control to render. (The values are predefined).

- Lastly the <textarea> operates similary to the <input> element, with the exception that the "type" attribute is excluded and it is 
instead a multi-line text control. Additionally is not a void element.


NOTE: "value" attribute can be used to define the default value of the control value like <input>.
- Additionally for the <textarea> element it would be content between the tags.
<input type="text" value="by default this element is filled with this text" />

<textarea>
by default this element is filled with this text
</textarea>


b) The <button> Element
- Is an interactive element activated by the user to perform an action.

"type" - Attribute for the <button> element accepts one of three values: 'submit', 'reset', or 'button'.
'submit' - Once activated sends the form's data to the wabe page based on the "action" attribute of <form>.
'reset' - Once activated resets all the form widgets to their default value.
'button' - Once activated does NOTHING. But can be customized with JavaScript for functionality.

<p class="button">
  <button type="submit">Send your message</button>
</p>

NOTE: <input> element only allows plain text in its label, whereas the <button> element allows for full HTML content thus creativity.

----------------------------------------------------------------------------------------------------------------------------------


08.1.4) Form submission and sending data
- The <form> defines where and how to send the data based on the "action" and "method" attributes.

"name" - Attribute tells the browser which name to give each piece of data and the server handles each piece of data by name.
THUS: The "name" attribute is used on each form widget to collect a specific piece of data.

<form action="/my-handling-form-page" method="post">
  <p>
    <label for="name">Name:</label>
    <input type="text" id="name" name="user_name" />
  </p>
  <p>
    <label for="mail">Email:</label>
    <input type="email" id="mail" name="user_email" />
  </p>
  <p>
    <label for="msg">Message:</label>
    <textarea id="msg" name="user_message"></textarea>
  </p>

  …
</form>

- In the instance above, 3 pieces of data name: "user_name", "user_email", and "user_message" will be sent to the URL 
"/my-handling-form-page" using the HTTP "post" method.
NOTE: On the server side receiving the script which is the URL, will get data as a list of 3 value items containing HTTP request.
However, the script's language can vary like Java, C#, Python for handling form data.


----------------------------------------------------------------------------------------------------------------------------------

8.1.5) Form structure and accessibility
<fieldset> - Element can create groups of widgets that share the same purpose and can be labeled by the <legend> element.
<legend> - Element rpresents a caption or puropose of the mostly the <fieldset> element.

NOTE: For assistive technologies, the <legend> would be used as it is part of the label of each control within <fieldset>.

<fieldset>
  <legend>Fruit juice size</legend>
  <p>
    <input type="radio" name="size" id="size_1" value="small" />
    <label for="size_1">Small</label>
  </p>
  <p>
    <input type="radio" name="size" id="size_2" value="medium" />
    <label for="size_2">Medium</label>
  </p>
  <p>
    <input type="radio" name="size" id="size_3" value="large" />
    <label for="size_3">Large</label>
  </p>
</fieldset>

- In the instance above, a screen reader would speak "Fruit juice size small" as an additionaly purpose of the <legend>.
- Moreover, this set of radio buttons are nested in a <fieldset> to group the options.


<label> - Elements as used to define a label or description of a HTML form widget. 
NOTE: Almost like the <legend> element, screen readers will speak a form element's label, but with related instructions
- Additionally, <label> are interactive as clickable with corresponding widgets, especiaally radio buttons and checkboxes.

<p>
  <input type="checkbox" id="taste_1" name="taste_cherry" value="cherry" />
  <label for="taste_1">I like cherry</label>
</p>
<p>
  <input type="checkbox" id="taste_2" name="taste_banana" value="banana" />
  <label for="taste_2">I like banana</label>
</p>
- This instance creates two checkbox inputs, with labels for each.


Common HTML Structures Used with Forms:
- To wrap a <label> and its widget with a <li> within a <ul> or <ol>. With <p> and <div> commonly used.

Building a Form Structure:
1) Create the form by <form>
2) Inside the <form> adding heading and paragraph to inform the user of the required fields.
3) Wrap the a field within <section>, with widgets within:
<section>
  <h2>Contact information</h2>
  <fieldset>
    <legend>Title</legend>
    <ul>
      <li>
        <label for="title_1">
          <input type="radio" id="title_1" name="title" value="A" />
          Ace
        </label>
      </li>
      <li>
        <label for="title_2">
          <input type="radio" id="title_2" name="title" value="K" />
          King
        </label>
      </li>
      <li>
        <label for="title_3">
          <input type="radio" id="title_3" name="title" value="Q" />
          Queen
        </label>
      </li>
    </ul>
  </fieldset>
  <p>
    <label for="name">Name *:</label>
    <input type="text" id="name" name="username" required />
  </p>
  <p>
    <label for="mail">Email *:</label>
    <input type="email" id="mail" name="user-mail" required />
  </p>
  <p>
    <label for="pwd">Password *:</label>
    <input type="password" id="pwd" name="password" required />
  </p>
</section>




----------------------------------------------------------------------------------------------------------------------------------





08.2 - Basic Native Form Controls

08.2.1) The <input> element and its "type" attribute
- <input> element is used to create interactive controls for web-based forms.
NOTE: It has a wide variety of 'type' values to input data. If the attribute is not specified, default 'type' is "text".
ADDITIONALLY: Other attributes greatly enhance the interactivity of the <input>. 

'type' Attribute Values: For more in depth: https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/input

Common Basic text control Behaviors:
- Marked as "readonly" or "disabled".
- Have a placeholder (text appears inside the text input box).
- Constrained in "size" of the box and "maxlength" of characters.
- Can benefit from "spellcheck" attribute.

----------------------------------------------------------------------------------------------------------------------------------

08.2.2) Text and password fields
• Single Line Text Field
- Implements an <input>, with 'type' attribute set to "text" or omitting the value.
<input type="text" id="comment" name="comment" value="I'm a text field" />

- The instance above, creates a text box, with characters already inside to manipulate.
CONSTRAINT: Text with line breaks will be removed by the browser prior to sending to the server.

• Password Field
- Implement an <input>, with 'type' attribute set to "password".
<input type="password" id="pwd" name="pwd" />

- The instance above, provides hidden characters as dots when typed into.

• Hidden Content
- Implemented by <input>, creates an invisible form control that's sent to the server.
- May be used to submit a timestamp for orders placed, obscuring from the user's display.
<input type="hidden" id="timestamp" name="timestamp" value="1286705410" />

- The instance above, creates a hidden form with the value sent to the sever.

----------------------------------------------------------------------------------------------------------------------------------

08.2.3) Checkboxes and radio buttons
- Checkable items whose state is changed by click on it or its associated labels.
- Both checkboxes and radio buttons use the 'checked' attribute to indicate checked by default or not.

NOTE: For most form widgets, once submitted all widgets have a 'name' attribute sent even if no value is filled.
HOWEVER: For checkable items, thier values are sent ONLY IF they are checked, else nothing is sent. If checked with no value, the name is 
sent with value of "on".

MAXIMUM usability/accessibilty: Surround each list of items in a <fieldset> with <legend> to provide descriptions of the list.

• Checkbox
- Implemented with the <input> with 'type' attribute set to "checkbox".
<input type="checkbox" id="questionOne" name="subscribe" value="yes" checked />
- This instance above creates a checkbox with a value sent as "yes". Also the 'checked' attributes sets the item as checked already.

EX:
<fieldset>
  <legend>Choose all the vegetables you like to eat</legend>
  <ul>
    <li>
      <label for="carrots">Carrots</label>
      <input
        type="checkbox"
        id="carrots"
        name="vegetable"
        value="carrots"
        checked />
    </li>
    <li>
      <label for="peas">Peas</label>
      <input type="checkbox" id="peas" name="vegetable" value="peas" />
    </li>
    <li>
      <label for="cabbage">Cabbage</label>
      <input type="checkbox" id="cabbage" name="vegetable" value="cabbage" />
    </li>
  </ul>
</fieldset>

- The instance above renders a description followed by three bullet points indicating the characters: Carrots, Peas, and Cabbage.
NOTE: Only the Carrot checkbox is already checked.


• Radio Button
-  Implemented with the <input> element with its 'type' attribute set to "radio".
<input type="radio" id="soup" name="meal" value="soup" checked />
- The instance above, creates a radio button that's already checked to send a value of "soup".

- Several radio buttons can be GROUPED together, IF they SHARE the same value for THEIR 'name' attribute.
NOTE: Only one button in the group can be checked at a time. When the form is sent, only the value of that checked radio is sent.
ALSO: Not possible for the user to uncheck the button without resetting the form.

EX:
<fieldset>
  <legend>What is your favorite meal?</legend>
  <ul>
    <li>
      <label for="soup">Soup</label>
      <input type="radio" id="soup" name="meal" value="soup" checked />
    </li>
    <li>
      <label for="curry">Curry</label>
      <input type="radio" id="curry" name="meal" value="curry" />
    </li>
    <li>
      <label for="pizza">Pizza</label>
      <input type="radio" id="pizza" name="meal" value="pizza" />
    </li>
  </ul>
</fieldset>

- The instance above renders a description followeded by three bullet points to three options.
NOTE: Soup was already checked, and only one of the three choices can be selected.

----------------------------------------------------------------------------------------------------------------------------------

08.2.4) Submit, reset, and button controls
More Type attribute values:
'submit' - Send the form data to the server. NOTE for <button>, omitting the 'type' attribute results in a submit button.
'reset' - Resets all form widgets to their default value.
'button' - No automatic effect, but can be customized using JavaScript.

NOTE: The <button> element mimic the behavior of the three <input> types, BUT the difference is <button> can be styled much easier.
THUS: Inside <button> opening & closing tags, their content is sent, instead of having 'value' attribute as the displayed content.

<p>Using &lt;input></p>
<p>
  <input type="submit" value="Submit this form" />
  <input type="reset" value="Reset this form" />
  <input type="button" value="Do Nothing without JavaScript" />
</p>
<p>Using &lt;button></p>
<p>
  <button type="submit">Submit this form</button>
  <button type="reset">Reset this form</button>
  <button type="button">Do Nothing without JavaScript</button>
</p>

- The instance above creates the behavior in terms of design and functionality.

EX: The following displays the differences of style being utilized:
<div>
  <button type="submit">This is a <strong>submit button</strong></button>

  <input type="submit" value="This is a submit button" />
</div>

- The <button> element implements style into its display. Additionally it can be further enchanced with CSS.


• Image Button
- Renders like an <img>, except when the user clicks on it, it behaves as a submit button.
- Implemented with an <input> with its 'type' attribute set to "image".
<input type="image" alt="Click me!" src="my-img.png" width="80" height="30" />

- The instance above, creates a button image. Note when activated, the control submits the X and Y coordinates of the click on the image.

----------------------------------------------------------------------------------------------------------------------------------

08.2.5) File and hidden inputs
- A widget that allows one or more files to be send.
- Implemented with an <input> with its 'type' attribute set to "file".
'accept' - Attribute allows the type of files accepted.
'multiple' - Attribute allows the user pick more than one file.

<input type="file" name="file" id="file" accept="image/*" multiple />
- The instance above creates a widget that allows multiple img files to be sent.

- For some mobile devices, the file picker can access its gallery by seeting the 'accept' attribute to the right value:
<input type="file" accept="image/*;capture=camera" />
<input type="file" accept="video/*;capture=camcorder" />
<input type="file" accept="audio/*;capture=microphone" />

----------------------------------------------------------------------------------------------------------------------------------

08.2.6) Common form-control attributes



08.3 - HTML5 Input Types

08.3.1) Email Fields

08.3.2) Search Fields

08.3.3) Telephone Fields

08.3.4) URL Fields

08.3.5) Numeric Fields

08.3.6) Slider Controls

08.3.7) Date and Time Pickers

08.3.8) Color Picker Controls



08.4 - Other Form Controls

08.4.1) Multi-line Text Fields (<textarea>)

08.4.2) Drop-down Controls (<select>, <option>, etc)

08.4.3) Other Form Features (<output>, progress indicators, and related controls)
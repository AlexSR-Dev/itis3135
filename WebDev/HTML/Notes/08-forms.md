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

08.2 - Basic Native Form Controls

08.2.1) The <input> element and its "type" attribute


08.2.2) Text and password fields

08.2.3) Checkboxes and radio buttons

08.2.4) Submit, reset, and button controls

08.2.5) File and hidden inputs

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
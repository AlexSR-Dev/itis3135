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
- Elements that defines form controls have specific attributes to implement.
The following displays common attributes:

'autofocus' - Default to "false", is a boolean attribute specifying that the element should have input focus when the page loads.
- Only one form-associated element in a doc can have this attribute specified to "true".

'disabled' - Defaults to "false", is a boolean attribute that indicates the user cannot interact with the element.
- NOTE: if this attribute isn't implemented, the element is enabled.

<form> - An element that widgets associate with. The value of the attribute must be the 'id' attribute of the <form> element in
the same doc. Thus, allowing interaction with a form it is outside of.

'name' - An attribute, indicating the name of the element that's submitted with the form data.

'value' - An attribute indicating the element's initial value.




----------------------------------------------------------------------------------------------------------------------------------
----------------------------------------------------------------------------------------------------------------------------------





08.3 - HTML5 Input Types
- THe functionality of some input types.

08.3.1) Email Fields
- Implemented with the <input> 'type' attribute set to value "email".
- The value entered must be an email addresss to be valid, else an error.
<input type="email" id="email" name="email" />

- The instance above creates an 'email' textbox

'muliple' - Attribute can be implemented to allow several comma-separated email addresses in the same input:
<input type="email" id="email" name="email" multiple />

NOTE: That inputs like 'a@b' is a valid address due to the default contraints.
- To implement different validation behavior, use the 'pattern' attribute.

----------------------------------------------------------------------------------------------------------------------------------

08.3.2) Search Fields
- Implemented with the <input> 'type' attribute set to value "search".
- Creates a textbox intended to search on pages/apps.
<input type="search" id="search" name="search" />

- Note the appearence of the textbox varies based on browser styles.
ALSO: Values of a 'search' field can be automatically saved and re-used for auto-completion across multiple pages of the same webpage.

----------------------------------------------------------------------------------------------------------------------------------

08.3.3) Telephone Fields
- Implemented with the <input> 'type' attribute set to value "tel"
- Creates a textbox, however due to the variety of phone number formats, the default constraints allow letters, nums, etc.
THUS: Use the 'pattern' attribute to enforce contraints.
<input type="tel" id="tel" name="tel" />

----------------------------------------------------------------------------------------------------------------------------------

08.3.4) URL Fields
- Implemented with <input> 'type' attribute set to "url"
- Creates a textbox, with a special validation contraints to the field, in that the browser reports and error if no protocol (http)
is entered.
<input type="url" id="url" name="url" />

----------------------------------------------------------------------------------------------------------------------------------

08.3.5) Numeric Fields
- Implemented with <input> 'type' attribute set to "number"
- Creates a textbox, that allows float numbers (not decimal, but dataType size), also may provide a type of spinner or increment /
decrement control by default.
<input type="number" id="number" name="number" />

'min' & 'max' - Attributes can be implement to contrain the limit values.
'step' - Attribute to set the fixed increment increase & decrease in the control.

EX: Creates a number control with valid value restircted to odd values between 1 & 10. Note you can still input even, but manually.
<input type="number" name="age" id="age" min="1" max="10" step="2" />

NOTE: To allow float numbers, specify the 'step = "any"' or specific values 'step="0.01"'. Otherwise by default whole numbers are valid

----------------------------------------------------------------------------------------------------------------------------------

08.3.6) Slider Controls
- Usage-wise are less accurate than text fields for precision.
- Implemented with <input> 'type' attribute set to "range"
- RECOMMENDED be configured, to set 'min', 'max', and 'step' attributes for the limits and incrementation values.

<label for="price">Choose a maximum house price: </label>
<input
  type="range"
  name="price"
  id="price"
  min="50000"
  max="500000"
  step="1000"
  value="250000" />
<output class="price-output" for="price"></output>

- In the instance above, creates a slider widget that starts at 250000. with a min or 50,000 and a max of 500,000 with increments of 
1000.
NOTE: Sliders don't provide visual indications of the number.
THUS: <output> element is implemented to display the current value. Also the 'for' attribute allows elements to associate.

REFERENCE: To display the current value and update it as it changes JS must be implemented:
const price = document.querySelector("#price");
const output = document.querySelector(".price-output");

output.textContent = price.value;

price.addEventListener("input", () => {
  output.textContent = price.value;
});

----------------------------------------------------------------------------------------------------------------------------------

08.3.7) Date and Time Pickers
- A calender UI. Additionally it can be expressed in the last minute of the previous period:
1999/12/31, 23:59, 12/31/99T11:59PM.

- Implemented with <input> and appropriate value for 'type' attribute depending of the variation of time/dates/both.

"date" - Type attribute value, creates a widget to display (year, moth, and day, no time)
<input type="date" name="date" id="date" />

"datatime-local" - Type attribute value, creates a widget to display and pick a date & time with no time zone.
<input type="datetime-local" name="datetime", id='datetime' />

"month" - Type attribute value, creates a display to choose a month with a year.
<input type="month", name="month", id="month" />

"time" - Type attribute value, creates a widget to pick a time value.
NOTE: The time are within a 12 hour and 59 minute format, with PM & AM. BUT the value returned is in 24-hour format.
<input type="time", name="time", id="time" />

"week" - TYpe attribute value, creates a widget to choose a week number and its year.
NOTE: The beginning of the that week may not include the first day of year, and may include days of the previous year.
<input type="week", name="week", id="week">

CONSTRAINTS:
- All date and time controls can be constainted with 'min' and 'max' attribute for limits.
- 'step' attribute for incrementation

EX:
<label for="myDate">When are you available this summer?</label><br />
<input
  type="date"
  name="myDate"
  min="2025-06-01"
  max="2025-08-31"
  step="7"
  id="myDate" />

- The instance above creates a description along with a "date" widget confined within 2025's 06-08 and can only choose 
incrementations of every 7 days starting from the 'min', in this case is a Sunday, so only those days can be choosen.

----------------------------------------------------------------------------------------------------------------------------------

08.3.8) Color Picker Controls
- Can be expressed in RGB (decimal/hexadecimal), HSL values, keywords, etc.
- Implemented with <input> with its 'type' attribute set to value "color".
<input type="color" name="color" id="color" />

- By activating the color control, the OS displays a default color-picking function to choose.
NOTE: Value returned is always lowercase 6-value hexadecimal color.




----------------------------------------------------------------------------------------------------------------------------------
----------------------------------------------------------------------------------------------------------------------------------





08.4 - Other Form Controls
- Functionality of non <input> form elements.

08.4.1) Multi-line Text Fields (<textarea>)
- Implemented with <textarea>, rather than <input>.
<textarea cols="30" rows="8"></textarea>
- The instance above creates and styles a textbox.

DIFFERENCE:
- Users can include hard line breaks that included in the data submitted.
- Has opening & closing tags to include content in between as deafult text in the box.
NOTE: For <input>, default text are included in the 'value' attribute.

- Attributes to control its rendering across several lines: 'cols', 'rows', 'wrap'.
NOTES: 'wrap' has 3 predefined values.
ALSO: Can be styled with CSS 'resize' property.

----------------------------------------------------------------------------------------------------------------------------------

08.4.2) Drop-down Controls (<select>, <option>, etc)
- Select many option withing using a lot of user interface.
- Types select box and autocomplete box.

SELECT BOX:
- Implemented with <select> with one or more <option> nested within, each specifies a possible value.
- 'selected' attribute sets a preselected option when the page loads.
<select id="simple" name="simple">
  <option>Banana</option>
  <option selected>Cherry</option>
  <option>Lemon</option>
</select>

- The instance above creates a drop box with Cherry already selected & the drop box is the same structure as the code.

- <optgroup> - Creates a grouping of options, by nesting <option> within it. Basically titles/category for every option list.
'label' - Attribute is to indicate and display the name of the group of options. Mandatory.

<select id="groups" name="groups">
  <optgroup label="fruits">
    <option>Banana</option>
    <option selected>Cherry</option>
    <option>Lemon</option>
  </optgroup>
  <optgroup label="vegetables">
    <option>Carrot</option>
    <option>Eggplant</option>
    <option>Potato</option>
  </optgroup>
</select>

- The instance above has a drop box preselected to Cherry, but the structure of the drop box has two unclickable titles:
fruits and vegetables, with three different options for each group.

'value' - Attribute implemented in <option>, would use that value when the form is submitted with the option displayed/selected.
- If omitted, the content of <option> would be used instead.

<select id="simple" name="simple">
  <option value="banana">Big, beautiful yellow banana</option>
  <option value="cherry">Succulent, juicy cherry</option>
  <option value="lemon">Sharp, powerful lemon</option>
</select>

- The instance above displays different drop box options, HOWEVER the values sent would use the 'value' attribute.

'size' - Attribute implemented in <select>, defines the number of options shown to the user. By default its a drop box.
NOTE: Must be a valid non-negative integer greater than zero. Also instead of a box dropping it displays the entire box.

<select id="fruit" name="fruit" size="3">



MULTIPLE CHOICE SELECT BOX:
- Implemented wiht <select> with 'multiple' attribute to allow users to select several values

<select id="multi" name="multi" multiple size="3">
  <optgroup label="fruits">
    <option>Banana</option>
    <option selected>Cherry</option>
    <option>Lemon</option>
  </optgroup>
  <optgroup label="vegetables">
    <option>Carrot</option>
    <option>Eggplant</option>
    <option>Potato</option>
  </optgroup>
</select>

- In the instance above, creates a scroll wheel box with a limited size. Additionally, the options are grouped with cherry
already pre-selected.



AUTOCOMPLETE BOX:
- Implemented with <datalist> with child <option> to specify values to display. 'id' attribute is needed for <datalist>.
- Data list is bound to <input> using its 'list' attribute, whose value is the 'id' attribute in <datalist>.

<label for="myFruit">What's your favorite fruit?</label>
<input type="text" name="myFruit" id="myFruit" list="mySuggestion" />
<datalist id="mySuggestion">
  <option>Apple</option>
  <option>Banana</option>
  <option>Blackberry</option>
  <option>Blueberry</option>
  <option>Lemon</option>
  <option>Lychee</option>
  <option>Peach</option>
  <option>Pear</option>
</datalist>

- In the instance above, creates a plain box, once activated displays a scroll drop box.
HOWEVER: Once a choice is decided you must delete that text to display the drop box again. So a autobox.

NOTE: You can bind a <datalist> with <options> to a <input> with 'type' set to "range" for a slider based on the values of options.

----------------------------------------------------------------------------------------------------------------------------------

08.4.3) Other Form Features (<output>, progress indicators, and related controls)

METERS AND PROGRESS BARS
- Visual representations of numeric values.

METER:
- Represents a fixed value in a range of 'max' and 'min' values.
- Renders as a bar, that is defined by comparison of values to others.

• 'low' and 'high' values divide the range into three parts:
  - Lowwer part of range is between 'min' and 'low' values inclusive.
  - Medium part is between 'low' and 'high' values exclusive.
  - Higher part is between 'high' and 'max' values inclusive.

• 'optimum - attribute indicates optimal numeric value for <meter>.
THUS: defines which part of the range is preferred base on the parts.
  - If optimum value is in the lower part of the range, lower range is preferred part, medium is average, higher is wort part.
  - Optimum value is in medium, medium is preferred, and higher is average.
  - Optimum value is in higher, lower ranger is worst, medium is average, and higher is preferred.

NOTE: All browser implements <meter> with colors based on the values.
  - Current value in the preferred part of the range, is green.
  - Current value in average part, is yellow.
  - Current value in worst part, is red.

<meter min="0" max="100" value="75" low="33" high="66" optimum="0">75</meter>

- The instance above creates a bar whose optimum's value is in the lower part of the range, but the fixed value is set in the
higher part of the range. Thus, the lower part considers the current value as worst part, and is RED.



PROGRESS:
- Represents a value that changes over time up to 'max' attribute.
- Implemented with <progress>, with 'max' &  'value' attributes.
'max' - Attribute indicates the amount of work required.
'value' - Attribute specifies the amount of work completed.
NOTE: Content within <progress> is fallback for browsers that don't support the element and for screen readers.

<progress max="100" value="75">75/100</progress>

- The instance above creates a blue progression bar that's does not display the percentage completed, but covers a grey totol bar.

----------------------------------------------------------------------------------------------------------------------------------
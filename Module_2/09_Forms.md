09 - Forms:

Web Forms - Are one of the main points of interaction between a user and a website or application.
- Allowing users to enter data, generally sent to a web server for processing and storage, or used on the client-side
to immediately update the interface in some way.

- In HTML is made up of one or more form controls (widgets), plus additional elements to help structure the overall
form, referred to as HTML forms.

- Can be single/multi-line text fields, dropdown boxes, buttons, checkboxes, or radio buttons, and are mostly created
using the <input> element, with additional elements later mentioned.



Implementing our form HTML:
HTML elements: <form>, <label>, <input>, <textarea>, <button>.


The <form> element:
EX:
<form action="/my-handling-form-page" method="post">…</form>

- This element defines a form, its a container element like a <section> or <footer> element, but specifically
for containing forms, and also supports some specific attributes to configure the way the form behaves.

- Standard Practice to always set at least the "action" and "method" attributes:
• action - Attribute defines the location (URL) where the form's collected data should be sent when it is submitted.
• method - Attribute defines which HTTP method to send the data with (usually "get" or "post").




The <label>, <input>, and <textarea> elements:
- The contact form is not complex: The data entry portion contains three text fields, each with a corresponding <label>:
• The input field for the name is a "single-line text field".
• The input field for the email is an "input of type email": A single-line text field that accepts only email addresses.
• The input field for the message is a <textarea>; a multiline text field.

EX:
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

- The <p> elements are to structure the code and to style easier.
- For usability and accessibility, include an explicity <label> for each form control.

- Note, we use the "for" attribute on all <label> elements, that takes its value the "id" of the form control
with which it is associated, thus you can associate a form control with its label.

- The benefits to associating the label with the form control, enables mouse, trackpat, and touch device users to click on
the label to activate the corresponding control and to provide an accessible name for screen readers to read out to their user.


- On the <input> element, the most vital attribute is the "type" attribute. As it defines the way the <input> element appears and 
behaves.
- In our example, we use the value "text" for the first input, the default value for this attribute. Representing a basic single
line text field that acceopts any kind of text input.

- For the second input, the value "email", defines a single-line text field that only acceots a well-formed email address.




The syntax of <input> vs. <textarea></textarea>.
- The <input> tag is a void element, thus does not need a closing tag.
- The <textarea> is not a void element, thus should be closed with the proper ending tag.

- To define the default value of an <input> element you have to use the value attribute:
<input type="text" value="by default this element is filled with this text" />

- To define a default value for a <textarea>, place it between the opening and closing tags of the <textarea> element:
<textarea>
by default this element is filled with this text
</textarea>




The <button> element:
- The makeup of the form is nearly complete, just add a button to allow the user to send, or "submit" their data once the form
is filled out. Use the <button> element, including it prior to closing </form> tag:
<p class="button">
  <button type="submit">Send your message</button>
</p>


- The <button> element also accepts a "type" attribute, one of three values: submit, reset, or button.
• A click on a "submit" button (default value) sends the form's data to the web page defined by the "action" attribute of the <form> element.
• A click on a "reset" button resets all the form widgets to their default value immediately. Bad practice and should be avoid if possible.
• A click on a "buttton" button does nothing. Useful for building custom buttons, to define their chosen functionality use JavaScript.




Basic Form Styling:
The <style> element, inside your HTML head should appear as so:
<style>
  /* CSS goes here */
</style>




NOTE:
There is also two more input type values:
- password : To enter an undisclosed value.
- date : A board of dates to choose from.













Basic Native Form Controls:

Text Input Fields:
- Text <input> fields are the most basic form widgets. Allowing the user to enter any kind of data.
• Can be marked as "readonly" or "disabled".
• Can have a "placeholder".
• Can be constrained in "size" and "maxlength".
• Benefit from spell-checking using the "spellcheck" attribute.


Single Line Text Fields:
- Created using an <input> element whose "type" attrubite value is set to "text", or omitting the type attribute as it is the
default value.
EX:
<input type="text" id="comment" name="comment" value="I'm a text field" />


- Single line text fields has only one true constraint: If you type text with line breaks, the browser removes those line
breaks prior to sending the data to the server.




Password Field:
EX:
<input type="password" id="pwd" name="pwd" />

- Similar to a basic single-line text field.
HOWEVER, each input character will be shown as a dot.
- The "password" value does not add any special constraints to the entered text, but obsures the value entered into the field.
- Reminder, this is just a user interface feature, thus you will need to implement security measures such as secure connection
locations to ensure data is encrypted before it is sent.




Hidden Content:
- Used to create a form control that is invisible to the user, but its data is still sent to the server.
- Useful to submit timestamps to the server regarding the state of the user's intent. Stays hidden from the user:
EX:
<input type="hidden" id="timestamp" name="timestamp" value="1286705410" />

- Should not have an assoicated label.




Checkable items: Checkboxes and Radio buttons:
- Controls whose state can change by clicking on them or their associated labels. Either checkboxes or radio buttons, indicated
using the "checked" attribute.

- For maximum usability/accessibility, surround each list of related items in a <fieldset> with a <legend> to provide an
overall description of the list.
- Each individual pair of <label>/<input> elements should be contained in its own list item.
The associated <label> is generally placed immediately before/after the radio button or checkbox, with the instrctions for the group of checkable items generallly being the content of the <legend>.



Checkbox:
- Created with the <input> element with a "type" attribute set to the value "checkbox".
EX:
<input type="checkbox" id="questionOne" name="subscribe" value="yes" checked />

- Related checkbox items should use the same "name" attribute, including the "checked" attribute makes the checkbox
checked automatically when the page loads:
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




Radio Button:
- Created using the <input> element with its "type" attribute set to the value "radio":
EX:
<input type="radio" id="soup" name="meal" value="soup" checked />

- Several radio buttons can be tied together. If they share the same value for their "name" attribute.
- Only one button in a given group can be checked at a time. If none are checked, its considered in an unknown state and no value
is sent with the form:
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



Actual Buttons:
The radio button isn't actually a button.

Three input types that produce buttons:

submit - Sends the form data to the server. For <button> elements, ommiting the "type" attribute results in a submit button.

resest- Resets all form widgets to their default values.

button - No automatic effect, but can be customized using JavaScript code.

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


- Additionally, you can use the <div> element to separate each <input> and <button> pair type onto a new line.



Image Button:
- Renders like an <img> element, with the exception that when the user clicks it, it behaves like a submit button.
- Created using an <input> element with its "type" attribute set to the value "image".
EX:
<input type="image" alt="Click me!" src="my-img.png" width="80" height="30" />

- If the image button is used to submit the form, use the X and Y coordinates of the click on the image are submitted.
Thus, the X value key and Y value key is the value of the "name" attribute followed by thier respective string:
https://example.com?pos.x=123&pos.y=456



File Picker:
- Used to choose one or more files to send.
- Created using the <input> element with its "type" attribute set to file. The types of files to be accepted can be constrained
using the "accept" attribute. Additionally, to allow the user to pick more than one file, use the "multiple" attribute.

EX: A file picker that requests graphuc image files, with multiple files accepted:
<input type="file" name="file" id="file" accept="image/*" multiple />

For mobile devices:
<input type="file" accept="image/*;capture=camera" />
<input type="file" accept="video/*;capture=camcorder" />
<input type="file" accept="audio/*;capture=microphone" />











The HTML5 Input Types:

Email Address Field:
- Using the value "email" for type attribute:
<input type="email" id="email" name="email" />

- When used the value must be an email address to be valid, else an error from the browser.
- Can also use the "multiple" attribute to allow several comma-separated email addresses to be enter in the same input:
<input type="email" id="email" name="email" multiple />


Search Field:
- Intended to be used to create search boxes on pages and apps.
- Using the value "search" for the type attribute:
<input type="search" id="search" name="search" />

- Difference between text and search field is the browser styles its appearance differently.
- Values of a "search" field can be automicaly saved and re-used to offer auto-completion across mulitple pages of
the same website. Usual automatic in modern browsers.


Phone number Field:
- Using "tel' as the value of the type attribute:
<input type="tel" id="tel" name="tel" />

- When accessed via touch device with dynamic keyboard, it will usualy display a numeric keyboard.
- The "pattern" attribute can enforce constraints regarding letters or symbols.


URL Field:
- using the value "url" for the type attribute:
<input type="url" id="url" name="url" />

- Has a special validation constraints to the field. In that browser will report an error if not protocol
(http:) is entered, or the URL is malformed.


Numeric Field:
- Appears like a text field, but allows only floating-point numbers, and usually provides buttons in the form
of a spinner to increase and decrease the value of the control:
<input type="number" id="number" name="number" />

- You can constrain the minimum and maximum values allowed by setting the "min" and "max" attributes.
- "step" attribute to set the increment increase and decrease caused by pressing the spinner buttons.
EX:
<input type="number" name="age" id="age" min="1" max="10" step="2" />

- Create a number control whose valid value is restricted to an odd value between 1 and 10.
The increase and decrease buttons change the value by 2, starting with the "min" value.


Slide Controls:
- Using the <input> with its "type" attribute set the value "range" to allow a slider-thumb.
- Recommended to set tghe "min", "max", and "step" attributes.
EX:
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

- Creates a slider whose value ranges between 50,000 and 500,000, which increments/decrements by 1000 at a time.
Also a default value of 250,000 using the "value" attribute.


Date and Time Pickers:
- Enables the user to select dataes without a native calender application.
- Using the <input> element and an appropriate value for the "type" attribute, can collect dates, times, or both:

date
<input type="date"> creates a widget to display and pick a date (year, month, and day, with no time).
<input type="date" name="date" id="date" />

datetime-local
<input type="datetime-local"> creates a widget to display and pick a date with time with no specific time zone information.
<input type="datetime-local" name="datetime" id="datetime" />

month
<input type="month"> creates a widget to display and pick a month with a year.
<input type="month" name="month" id="month" />

time
<input type="time"> creates a widget to display and pick a time value.
Time is displayed in 12-hour formate, the value is returned in 24-hour format:
<input type="time" name="time" id="time" />

week
<input type="week"> create a widget to display and pick a week number and its year.
<input type="week" name="week" id="week" />

Constraining data/time values
All date and time controls can be constrained using the "min" and "max" attributes, with further constraining possible via the
"step" attribute:
<label for="myDate">When are you available this summer?</label><br />
<input
  type="date"
  name="myDate"
  min="2025-06-01"
  max="2025-08-31"
  step="7"
  id="myDate" />



Color Picker Control:
- Difficult to handle, but multiple manners of expression.
- Using the <input> element with its type attribute set to the value "color":
<input type="color" name="color" id="color" />
- Value returned is always a lowercase 6-value hexadecimal color.










Other Form Controls:

Multi-Line Text Fields:
- Using a <textarea> element, rather than the <input> element:
<textarea cols="30" rows="8"></textarea>

- Difference between a <textarea> and a regular single-line text field is that users are allowed to include hard line breaks
and are included when the data is submitted.


Controlling Multi-Line Rendering:
<textarea> accepts three attributes to control its rendering across several lines:

cols - Specifices the visible width (columns) of the text control.

rows - Specifies the number of visible text rows for the control.

warp - Specifies how the control wrap text. The values are "soft" (default) means the text submitted is not wrapped but
the text rendered by the browser is wrapped. "hard" (cols must be specified) means both the submitted and rendered texts
are wapped, and "off", which stops wrapping.



Drop-down Controls:
- Allows the user to select from many options without taking up much space in the user interface.
Two types of drop-down contorls in HTML:
- Select box
- Autocomplete box


Select Box:
- Created with a <select> element with one or more <option> elements as its children, each of which speficies one of its possible values:
<select id="simple" name="simple">
  <option>Banana</option>
  <option selected>Cherry</option>
  <option>Lemon</option>
</select>

- if requires, the default value for the selecte box can be set using the "selected" attribute on the desired <option> element.




Using optgrop:
- <option> elements can be nested inside <optgroup> elements to create visually associated groups of values:
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

- Displays nested options.


Using the Value Attribute:
- If an <option> element has an explicit value attribute set, that value is sent with the form, else the content of the <option>
element is used as the value.
EX:
<select id="simple" name="simple">
  <option value="banana">Big, beautiful yellow banana</option>
  <option value="cherry">Succulent, juicy cherry</option>
  <option value="lemon">Sharp, powerful lemon</option>
</select>


Multiple Choice Select Box:
- By default, a select box lets a user select only one value. By adding the "multiple" attribute to the <select> element,
you can allow users to select several values:
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




Autocomplete Box:
- Provide suggested, automatically-completed values for form widgets using the <datalist> element with child <option> elements
to specify the values to display. <datalist> requires an id.

- Data list is bounded to an <input> element using the "list" attribute, the value would be the id of the data list bind to.
EX:
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


Other form features:
https://developer.mozilla.org/en-US/docs/Learn_web_development/Extensions/Forms/Other_form_controls

Meters and Progress bars
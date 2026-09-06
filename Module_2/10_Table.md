10 - HTML Table Basics:


- HTML tables should be used for tabular data (info that's easy to work with in rows and columns).

Creating a Table:
- The content of every table is enclosed by <table></table>.
- The smallest container inside a table is a table cell created with <td> element (table data):
EX:
<td>Hi, I'm your first cell.</td>

- For four row cells, just copy the tages three times:
<td>Hi, I'm your first cell.</td>
<td>I'm your second cell.</td>
<td>I'm your third cell.</td>
<td>I'm your fourth cell.</td>


- To stop the row from growing and placing subsequent cells on a second row, use the <tr> element (table row):
<tr>
  <td>Hi, I'm your first cell.</td>
  <td>I'm your second cell.</td>
  <td>I'm your third cell.</td>
  <td>I'm your fourth cell.</td>
</tr>


<table>
  <tr>
    <td>Hi, I'm your first cell.</td>
    <td>I'm your second cell.</td>
    <td>I'm your third cell.</td>
    <td>I'm your fourth cell.</td>
  </tr>

  <tr>
    <td>Second row, first cell.</td>
    <td>Cell 2.</td>
    <td>Cell 3.</td>
    <td>Cell 4.</td>
  </tr>
</table>
- This creates two separate rows. Thus a 2X4.


Adding Headrs with <th> elements:
- Special cells ath the start of a row or column and defines the type of data the row/column contains:
- <th> element (table header), works just like a <td>, but denotes a header, not a normal cell.
EX:
<table>
  <tr>
    <th>Animals</th>
  </tr>
  <tr>
    <th>Hippopotamus</th>
  </tr>
  <tr>
    <th>Horse</th>
    <td>Mare</td>
  </tr>
  <tr>
    <td>Stallion</td>
  </tr>
  <tr>
    <th>Crocodile</th>
  </tr>
  <tr>
    <th>Chicken</th>
    <td>Hen</td>
  </tr>
  <tr>
    <td>Rooster</td>
  </tr>
</table>



Fixing the Layout with "rowspan" and "colspan":
<table>
  <tr>
    <th colspan="2">Animals</th>
  </tr>
  <tr>
    <th colspan="2">Hippopotamus</th>
  </tr>
  <tr>
    <th rowspan="2">Horse</th>
    <td>Mare</td>
  </tr>
  <tr>
    <td>Stallion</td>
  </tr>
  <tr>
    <th colspan="2">Crocodile</th>
  </tr>
  <tr>
    <th rowspan="2">Chicken</th>
    <td>Hen</td>
  </tr>
  <tr>
    <td>Rooster</td>
  </tr>
</table>
- colspan spans the <th> headers across two columns.
- rowspan spans the <th> headers across two rows.





Grouping Columns with <colgroup> and <col>
The <colgroup> element should be included as a child of the table, just after the opening <table> element. Inside the <colgroup> 
element you can include one or more <col> elements, which represent groups of columns.

<col> element can include a span attribute that indicates the number of columns in that group. It can also include global 
attributes such as style .

EX:
<colgroup>
  <col span="2" />
  <col class="column-background" />
  <col class="column-fixed-width" />
  <col class="column-background" />
  <col class="column-background-border" />
  <col span="2" class="column-fixed-width" />
</colgroup>
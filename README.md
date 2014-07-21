##Datatable Pagination Plugin with Bootstrap
This is a plugin that can be used with jquery Datatables.  It customizes the pagination of your table so that you can enter a number in a textbox.  When dealing with large record sets this functionality makes navigating to target pages more feasible.

An example of the plugin can be seen here:
<div><img src="/resources/screenshotA.png" alt="Screenshot" /></div>

<br />
It includes a bootstrap focus highlight with intuitive icons:
<br />
<div><img src="/resources/screenshotB.png" alt="Screenshot" /></div>

<h3>Features:</h3>
<ul>
<li>Uses glyphicons for image buttons (a font built into bootstrap)</li>
<li>Intuitive navigation images</li>
<li>Properly handles  ALL (or -1) as a Length</li>
<li>Option to hide pager if all records are shown</li>
<li>Styles and icons can be overridden</li>
<li>Navigate on ENTER instead of every keystroke to conserve AJAX hits</li>
</ul>

<h3>Standard Usage:</h3>
Add the script to the page.  In your datatable declaration select this plugin:
```javascript
$('#tbl').DataTable({
	pagingType: "bootstrapInput",
	...
});
```
The ```toggleVisibility``` option will hide the pager if all records are currently displayed.  This is ```false``` by default.
```javascript
$('#tbl').DataTable({
	pagingType: "bootstrapInput",
	pagerSettings: {
	   toggleVisibility: true
	},
	...
});
```

It's as easy as that.

<h3>Advanced Usage:</h3>
To override the plugin's default styles you do something like this:
```css
.paginate_prefix{font-size:10px;}
 #tbl_paginate_textbox{width:50px !important;font-size:10px;}
```

To override icons you can use script:
```javascript
$("#tbl_paginate_button_next").removeClass("glyphicon glyphicon-chevron-right").addClass("glyphicon glyphicon-arrow-right");
$("#tbl_paginate_button_next").removeClass("glyphicon glyphicon-chevron-right").addClass("fa fa-arrow-right");  //font-awesome
```

You can also override icons with css:

```css
.paginate_button_next {
	position: relative;
}

.paginate_button_next:before {
	content: " \f0A9";
	font-family: FontAwesome;
	font-style: normal;
	font-weight: normal;
	text-decoration: inherit;
	color:#00FF00;
}
```
See this site <a href="http://astronautweb.co/snippet/font-awesome/">site</a> for a list of font awesome content values


<h3>Classes & IDs:</h3>
<table>
<tr>
<th>Class</th>
<th>ID</th>
</tr>
<tr>
<td>.paginate_prefix</td>
<td>#{tbl_name}_paginate_prefix</td>
</tr>
<tr>
<td>.paginate_suffix</td>
<td>#{tbl_name}_paginate_suffix</td>
</tr>
<tr>
<td>.paginate_textbox</td>
<td>#{tbl_name}_paginate_textbox</td>
</tr>
<tr>
<td>.paginate_button_first</td>
<td>#{tbl_name}_paginate_button_first</td>
</tr>
<tr>
<td>.paginate_button_previous</td>
<td>#{tbl_name}_paginate_button_previous</td>
</tr>
<tr>
<td>.paginate_button_next</td>
<td>#{tbl_name}_paginate_button_next</td>
</tr>
<tr>
<td>.paginate_button_last</td>
<td>#{tbl_name}_paginate_button_last</td>
</tr>
<tr>
<td>.paginate_button_first_disabled</td>
<td>#{tbl_name}_paginate_button_first_disabled</td>
</tr>
<tr>
<td>.paginate_button_previous_disabled</td>
<td>#{tbl_name}_paginate_button_previous_disabled</td>
</tr>
<tr>
<td>.paginate_button_next_disabled</td>
<td>#{tbl_name}_paginate_button_next_disabled</td>
</tr>
<tr>
<td>.paginate_button_last_disabled</td>
<td>#{tbl_name}_paginate_button_last_disabled</td>
</tr>
</table>

Replace ```{table_name}``` with the name of your table (i.e., ```#tbl_paginate_prefix{...}```)
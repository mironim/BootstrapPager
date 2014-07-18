Datatable Pagination Plugin with Bootstrap
=====================

This is a plugin that can be used with jquery Datatables.  It customizes the pagination of your table so that you can enter a number in a textbox.  When dealing with large recordsets this functionality makes navigating to target pages more feasible.  

<img src="/resources/screenshot1.png" alt="Screenshot" />
<br />
<br />
<br />
<img src="/resources/screenshot2.png" alt="Screenshot" />
<br />
<br />
Features:
<ul>
<li>Uses glyphicons for image buttons</li>
<li>Disables image buttons if they are not applicable</li>
<li>Properly handles  ALL (or -1) as a length</li>
<li>Option to hide pager if all records are shown</li>
<li>Styles and icons can be overridden</li>
</ul>

Usage:
Add the script to the page.  In your datatable declaration select this plugin:
```html
<script>
$('#tbl').DataTable({
	pagingType: "bootstrapInput",
	...
});
</script>
```
or

```html
<script>
$('#tbl').DataTable({
	pagingType: "bootstrapInput",
	conditionalPager: true,  //will hide pager if all records are shown
	...
});
</script>			
```

To override the plugin's default styles you do something like this:
```html
<style>
.paginate_prefix{font-size:10px;}
 #tbl_paginate_textbox{width:50px !important;font-size:10px;}
</style>
```

To override icons you can use script or css:
```html
<script>
$("#tbl_paginate_button_next").removeClass("glyphicon glyphicon-chevron-right").addClass("glyphicon glyphicon-arrow-right");
$("#tbl_paginate_button_next").removeClass("glyphicon glyphicon-chevron-right").addClass("fa fa-arrow-right");  //font-awesome
</script>
```
css:
```html
<style>
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
</style>
```
See this site <a href="http://astronautweb.co/snippet/font-awesome/">site</a> for a list of content values


Classes & IDs
<ul>
<li>.paginate_prefix, #{tbl_name}_paginate_prefix</li>
<li>.paginate_suffix, #{tbl_name}_paginate_suffix</li>
<li>.paginate_textbox, #{tbl_name}_paginate_textbox</li>
<li>.paginate_button_first, #{tbl_name}_paginate_button_first</li>
<li>.paginate_button_previous, #{tbl_name}_paginate_button_previous</li>
<li>.paginate_button_next, #{tbl_name}_paginate_button_next</li>
<li>.paginate_button_last, #{tbl_name}_paginate_button_last</li>
<li>.paginate_button_first_disabled, #{tbl_name}_paginate_button_first_disabled</li>
<li>.paginate_button_previous_disabled, #{tbl_name}_paginate_button_previous_disabled</li>
<li>.paginate_button_next_disabled, #{tbl_name}_paginate_button_next_disabled</li>
<li>.paginate_button_last_disabled, #{tbl_name}_paginate_button_last_disabled</li>
</ul>

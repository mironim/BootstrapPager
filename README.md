##Datatable Pagination Plugin with Bootstrap
This is a plugin that can be used with jquery Datatables.  It customizes the pagination of your table so that you can enter a number in a textbox.  When dealing with large record sets this functionality makes navigating to target pages more feasible.

An example of the plugin can be seen here:
<div><img src="/resources/screenshotC.png" alt="Full Datatable Screenshot" /></div>

<br />
It includes a bootstrap focus highlight with intuitive icons:
<br />
<div><img src="/resources/screenshotB.png" alt="Pager Screenshot" /></div>

<h3>Features:</h3>
<ul>
<li>Uses glyphicons for image buttons (a font built into bootstrap)</li>
<li>Intuitive navigation images</li>
<li>Properly handles  ALL (or -1) as a Length</li>
<li>Hides pager if no records found (instead of showing Page 0 of 0)</li>
<li>Styles and icons can be overridden</li>
<li>Navigate on ENTER instead of every keystroke to conserve AJAX hits</li>
<li>Set options easily through the pagerSettings object</li>
</ul>

<h3>Standard Usage:</h3>
Add the script to the page. You can add it directly or use a bundle:
```
<script type="text/javascript" src="~/Scripts/jquery.dataTables.bootstrapPager.1.0.2.min.js"></script>
```
In your dataTable declaration select this plugin:
```javascript
$('#tbl').DataTable({
	pagingType: "bootstrapPager",
	...
});
```
It’s as easy as that! If you want to adjust some settings add the pagerSettings object:
```javascript
$('#tbl').DataTable({
	pagingType: "bootstrapPager",
	pagerSettings: {
		textboxWidth: 70,
        firstIcon: "",
        previousIcon: "glyphicon glyphicon-arrow-left",
        nextIcon: "glyphicon glyphicon-arrow-right",
        lastIcon: ""
	},
	...
});
```
The above settings would enlarge the textbox, change the icons from chevrons to arrows, and remove the first and last buttons.

A list of all the options:
<ul>
<li>textboxWidth</li>
<li>firstIcon</li>
<li>previousIcon</li>
<li>nextIcon</li>
<li>lastIcon</li>
</ul>

If you are a FontAwesome fan simply reference the library and use those classes instead:

```
<link href="//maxcdn.bootstrapcdn.com/font-awesome/4.2.0/css/font-awesome.min.css" rel="stylesheet" />
```

Then add the script:
```javascript
<script>
$('#tbl').DataTable({
    pagingType: "bootstrapPager",
    pagerSettings: {
       firstIcon: "fa fa-angle-double-left fa-2x",
       previousIcon: "fa fa-angle-left fa-2x",
       nextIcon: "fa fa-angle-right fa-2x",
       lastIcon: "fa  fa-angle-double-right fa-2x"
    },
    ...
});
</script>
```

A <a href="https://www.nuget.org/packages/DatatablePaginateBoostrap/">nuget</a> exists for this script. It can be installed within Visual Studio.
Visit the author's site <a href="chadkuehn.com">chadkuehn.com</a>.
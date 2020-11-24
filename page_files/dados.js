const timestamp = new Date().getTime() document.write('\x3Cscript src="https://pay.itez.com/static/main/share/merchant.js?' + timestamp + '">\x3C/script>')

Create a container for a widget on your page, for example:

< div id="widget-container"></div>

Initialize the widget:

< script type="text/javascript">
ItezWidget.run({
target_element: 'widget-container'
})
</ script>


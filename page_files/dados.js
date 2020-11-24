const timestamp = new Date().getTime() document.write('\x3Cscript src="https://pay.itez.com/static/main/share/merchant.js?' + timestamp + '">\x3C/script>')

ItezWidget.run({
target_element: 'widget-container'
})


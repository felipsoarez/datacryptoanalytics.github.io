$(function(){

    // grab data
    $.ajax({
        url: "https://www.quandl.com/api/v3/datasets/BITFINEX/BTCEUR.json?api_key=3mJfWVKNS7jBbz9jD2kZ",
        dataType: "json",
        success: callback,
        error: function(err) {
            alert("Oops there was an error");
        }
    });
    
    // handle data
    function callback(response) {
        var table = $('<table class="tbl"></table>'); 
        
        var columns = response['dataset']['column_names'];
        var data = response['dataset']['data'];
        var head = $('<tr></tr>');

        for(i=0; i < columns.length; i++){ 
            var item = $('<th></th>').text(columns[i]);
            head.append(item); 
        }
        table.append(head);
        
        for(var j=0;j<data.length;j++){
            var row = $('<tr></tr>');
                
            for(var k=0;k<data[j].length;k++){
                var item = $("<td></td>");
                item.text(data[j][k]);
                row.append(item);
            }
            table.append(row);
        }
        $('body').append(table);
        $(".tbl").fadeOut();
        styleIt();
        
        var last_2month = data.slice(0,60);
        drawChart(last_2month);
        $("#show-table").fadeIn();
    }
    
    function styleIt() {
        $("td, th").css({
            "font-size":"12px",
            "text-align":"left",
            "border":"1px solid black",
            "padding":"0 4px"
        });
        $(".tbl").css({
            "border-collapse":"collapse",
        });
        $("th").css("font-size","14px")
    }
    
    function drawChart(data){
        var dates =[];
        var values = [];
        for(var i=0;i<data.length;i++){
            dates.unshift(data[i][0]);
            values.unshift(data[i][1]);
        }
        //console.log(values)
        new Chart($("#line-chart"), { 
            type: 'line', 
            data: { 
                labels: dates, 
                datasets: [
                    {
                        data: values, 
                        label: "Bitcoin (€)", 
                        borderColor: "gold"
                    }
                ]
            }
        
        });
    }
    
    var hid = true;
    
    $("#show-table").click(function(){
        hid = !hid;
        if(hid) {
            $(".tbl").fadeOut();
        }
        else {
            $(".tbl").fadeIn();
        }
    });
});

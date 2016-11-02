function NumRound(num){
	return Math.round(num * 1000) / 1000;
};

function Grid(){
	width = $("#width").val();
	columns = $("#columns").val();
	margins = $("#margins").val();
	
	marginsWidth = margins/width*100;

	widthNoMargin = 100-(marginsWidth*(columns-1));
	
	columnsWidth = widthNoMargin/columns;
	
	kod = "", 
	kod_offset = "";
	
	$(".demo").css("width", width + "px").html("");
	
	if(columnsWidth < 0) {
		$("#demo").append("=("); 
		return false;
	}
	
	for (var i = 0; i < columns; i++) {
		
		$(".demo").append('<div style="width: ' + columnsWidth + '%; margin-left: ' + marginsWidth + '%; float: left;">'+(i+1)+'</div>');

	}
	
	
	$(".demo2").css("width", width + "px").html("");
	var hz = columns;
	for (var i = 0; i < columns; i++) {
		
		$(".demo2").append('<div style="width: ' + ((columnsWidth*(i+1)+marginsWidth*(i+1))-marginsWidth) + '%; margin-left: ' + (100-(columnsWidth*(i+1)+marginsWidth*(i)))/2 + '%;">'+(i+1)+'</div>');
		
		kod = kod + '.col-' + (i+1) + '{width: ' + NumRound((columnsWidth*(i+1)+marginsWidth*(i+1))-marginsWidth) + '%;}\n';
		
		if((columns-(i+1)) > 0){
			kod_offset = '.offset-' + (columns-(i+1)) + '{width: ' + NumRound((100-(columnsWidth*(i+1)+marginsWidth*(i)))) + '%;}\n' + kod_offset;
		}
		
	}
	
	if(columnsWidth < 0) {
		$(".demo3, #demo2").append("=("); 
		return false;
	}
	$(".demo3").val(kod+kod_offset);
	
	//$(".demo").append('<br /><br /><br /><p>'+marginsWidth+'</p>');
}

$(window).on("ready", function() {
	Grid();
	$("#grid input").on("change keyup", function(){
		Grid();
	})


	$(".logo").on("click", function(){
		$(".page-block").attr("id", "level-0");
		return false;
	});
	$(".nav-col").on("click", function(){
		$(".page-block").attr("id", "level-1");
	});
	$(".sub-nav").on("click", function(){
		$(".page-block").attr("id", "level-2");
	});
	
});

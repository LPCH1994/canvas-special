Flowtime.showProgress(true);
Flowtime.addEventListener("flowtimenavigation", onNavigation, false);
function onNavigation (e) {
	if (e.progress == 2) {
		player.pause();
	}
}
Flowtime.start();
$(function(){
	$(".nojavascript").remove();
	setInterval(function() {
		$(".showtip").removeClass("showtip").hide().siblings("span").addClass("showtip").fadeIn();
	},5000);
	$("#write-submit").click(function() {
		var textArr = {};
		for(var i=1;i<79;i++){
			textArr[i] = $("#text-"+i).text();
		}
		$(".write-ok").fadeIn();
		$("#text-href").focus();
		$("#back").click(function() {
			$(".write-ok").fadeOut();
		});
		$("#write-post").click(function() {
			var textHref = $("#text-href").text(),
			textMusic = $("#text-music").text();
			if(textHref.replace(/\s+/g,"") ==""){
				$("#write-url i").text("â†ä¸èƒ½ä¸ºç©º").fadeIn();
				$("#text-href").focus();
				setTimeout(function() {$("#write-url i").fadeOut();},3000);
			}else if(!/^[\w\-]{3,30}$/.test(textHref)){
				$("#write-url i").text("â†æ ¼å¼ä¸æ­£ç¡®").fadeIn();
				$("#text-href").focus();
				setTimeout(function() {$("#write-url i").fadeOut();},3000);
			}else if(textMusic.replace(/\s+/g,"") ==""){
				$("#write-mp3 i").text("â†ä¸èƒ½ä¸ºç©º").fadeIn();
				$("#text-music").focus();
				setTimeout(function() {$("#write-mp3 i").fadeOut();},3000);
			}else if(!/^(http|https):\/\/+([\w-]+\.)+[\w-]+(\/[\w-.\/?%&=]*)?$/.test(textMusic)){
				$("#write-mp3 i").text("â†ä¸å…è®¸ç„é“¾æ¥").fadeIn();
				$("#text-music").focus();
				setTimeout(function() {$("#write-mp3 i").fadeOut();},3000);
			}else{
				$("#back").html('<img src="img/loading.gif" alt="loading">');
				$("#write-post").text("Äang xá»­ lĂ½...").attr("disabled",true).addClass("disabled");
				$.post("love.php?add",{textHref:textHref,textMusic:textMusic,textArr:textArr},
				function(data){
					if(data['status'] == 1){
						$("#back").hide();
						$(".write-ok p").hide()
						$(".write-ok div button").hide();
						$(".write-ok div h2").hide().text("HĂ£y gá»­i Ä‘áº¿n ngÆ°á»i áº¥y â¤").fadeIn();
						$("#write-url").html('Nháº¥n vĂ o Ä‘á»‹a chá»‰ï¼<a href="'+data['url']+'" target="_blank">'+data['url']+'</a>').fadeIn();
						$(".write-share").css("display","inline-block").children("p").show();
					}else if(data['status'] == 0){
						$("#write-url i").text(data['msg']).fadeIn();
						$("#text-href").focus();
						setTimeout(function() {$("#write-url i").fadeOut();},3000);
						$("#back").text("Trá»Ÿ vá»");
						$("#write-post").text("HĂ£y gá»­i Ä‘áº¿n ngÆ°á»i áº¥y â¤").attr("disabled",false).removeClass("disabled");
					}
				},"json");
			}
		});	
	});
	var bgmMusic = document.getElementById("bgmMusic");
	$("#on").click(function(){
		bgmMusic.pause();
		$("#on").hide(200);
		$("#off").css({"display":"inline-block"},300);
	});
	$("#off").click(function(){
		bgmMusic.play();
		$("#off").hide(200);
		$("#on").css({"display":"inline-block"},300);
	});
	var sharetext = $("#text-75").text()+"ç¥â¤ç¦"+$("#text-76").text()+$("#text-77").text();
	sharedesc = $("#text-1").text()+$("#text-2").text()+$("#text-3").text()+$("#text-4").text()+$("#text-5").text()+$("#text-6").text()+$("#text-7").text()+$("#text-8").text()+"......",
	shareurl = $("#write-url u").eq(0).text();
	window._bd_share_config = {
		"common": {
		"bdSnsKey": {},
		"bdText": sharetext,
		"bdDesc": sharedesc,
		"bdUrl": shareurl+$("#text-href").text()+".html",
		"bdMini": "2",
		"bdMiniList": ["mshare", "qzone", "tsina", "bdysc", "weixin", "renren", "tqq", "bdxc", "kaixin001", "tqf", "tieba", "douban", "tsohu", "bdhome", "sqq", "thx", "qq", "ibaidu", "taobao", "hi", "baidu", "sohu", "t163", "qy", "meilishuo", "mogujie", "diandian", "huaban", "leho", "share189", "duitang", "hx", "tfh", "fx", "youdao", "sdo", "qingbiji", "ifeng", "people", "xinhua", "ff", "mail", "kanshou", "isohu", "yaolan", "wealink", "xg", "ty", "iguba", "fbook", "twi", "deli", "s139"],
		"bdPic": "/img/iali59.png",
		"bdStyle": "1",
		"bdSize": "32"
		},
		"share": {}
	};
})
$(function(){
	$('#section1').click(function () {
		if ($("#vote_flg").val() == "") {
			$("#check_flg").val($("#img1_name").text());
			$("#img1").css({opacity: "0.7"});
			$("#img2").css({opacity: "1"});
		}
	});

	$('#section2').click(function () {
		if ($("#vote_flg").val() == "") {
			$("#check_flg").val($("#img2_name").text());
			$("#img2").css({opacity: "0.7"});
			$("#img1").css({opacity: "1"});
		}
	});

	$("#sub").click(function() {
		/* DC：投票済み */
		if ($("#vote_flg").val() != "") {
			alert("既に" + $("#vote_flg").val() + "に投票済みです。");
			return false;
		}
		
		/* DC：投票対象チェック */
		if ($("#check_flg").val() == "") {
			alert("いずれかの投票対象を選択してください。");
			return false;
		}

		/* DC：名前入力 */
		if ($("#name").val() == "") {
			alert("名前を入力してください。");
			return false;
		}

		/* 投票処理 */
		/* 投票者の登録 */
		var urlA = 'http://v133-130-121-59.a04c.g.tyo1.static.cnode.io:3000/api/AddUser';
		var urlB = 'http://v133-130-121-59.a04c.g.tyo1.static.cnode.io:3000/api/Voting';
		var vote = 'org.acme.sample.Vote#' + $("#name").val();
		var candidate = 'org.acme.sample.User#' + $("#check_flg").val();
		var JSONdata = {
			$class: "org.acme.sample.AddUser",
			name: $("#name").val()
		}
		var JSONVote = {
			"$class": "org.acme.sample.Voting",
			"vote": vote,
			"candidate": candidate
		}
		$.ajax({
			type : 'post',
			url : urlA,
			data : JSON.stringify(JSONdata),
			contentType: 'application/JSON',
			dataType : 'JSON',
			scriptCharset: 'utf-8',
			async: false,
			success : function(data) {
			},
			error : function(data) {
				alert(JSON.stringify(data));
			}
		}).done($.ajax({
			type : 'post',
			url : urlB,
			data : JSON.stringify(JSONVote),
			contentType: 'application/JSON',
			dataType : 'JSON',
			scriptCharset: 'utf-8',
			async: false,
			success : function(data) {
			},
			error : function(data) {
				// Error
				alert("error");
				$("#response").html(JSON.stringify(data));
			}
		}));
		
		/* 投票済みフラグを立てる */
		alert($("#check_flg").val() + "に投票しました！");
		$("#vote_flg").val($("#check_flg").val());
	});
  });
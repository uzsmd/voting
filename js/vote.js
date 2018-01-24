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

        /* 投票済みフラグを立てる */
        alert($("#check_flg").val() + "に投票しました！");
        $("#vote_flg").val($("#check_flg").val());
    });
  });
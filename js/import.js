$(function() {
	$('#file').change(function() {
		var fileName = $('#file').val();
		$('input[name=fileName]').val(fileName);
	})
	//点击确定添加
	$('#sureAdd').on('click', function() {
		var checkFlag = $('#readFileName').val(); //若前面的文件没有选择，则什么也不做。
		if(!checkFlag) {
			return;
		}
		companyChargeRelaImport();
	});

	function companyChargeRelaImport() {
		var formData = new FormData();
		formData.append("file", $('#file')[0].files[0]);
		$.ajax({
			url: '',
			type: 'POST',
			data: formData,
			async: true,
			cache: false,
			contentType: false,
			processData: false,
			success: function(returndata) {
				if(returndata.success == true) {
					alert(returndata.msg)
					window.location.reload();
				} else {
					if(returndata.status == 9001) {
						alert(returndata.msg)
					} else {
						alert(returndata.msg)
						window.location.reload();
					}

				}

			}
		});
	}
})
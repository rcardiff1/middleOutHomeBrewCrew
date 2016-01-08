function loginAjaxPost(loginData) {
  $.ajax({
    method: "GET",
    url: '/login/check',
    data: JSON.stringify({ loginData : loginData }),
    contentType : 'application/json; charset=utf-8',
    success: function(data){
      console.log(data, "data in ajax");
    }
  });
}

$('#loginSubmit').click(function(e){
  e.preventDefault();

  var userName = $('#loginuserName3');
  var password = $('#loginPassword3');
  var userData = { 'userName': userName.val(), 'password': password.val() };
  
  userAjaxPost(userData);
  resetVals(userName, password);
});


function clearLogin(userName, password){
  userName.val('');
  password.val('');
}





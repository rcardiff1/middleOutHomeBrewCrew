function userAjaxPost(userData) {
  $.ajax({
    method: "POST",
    url: '/signup/export',
    data: JSON.stringify({ userData : userData }),
    contentType : 'application/json; charset=utf-8',
    success: function(data){
      console.log(data, "data in ajax");
    }
  });
}

$('#userData').click(function(e){
  e.preventDefault();

  var name = $('#userName3');
  var email = $('#inputEmail3');
  var password = $('#inputPassword3');
  var userData = { 'name': name.val(), 'email': email.val(), 'password': password.val() };
  
  userAjaxPost(userData);
  resetVals(name, email, password);
});


function resetVals(name, email, password){
  name.val('');
  email.val('');
  password.val('');
}

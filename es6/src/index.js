myApp.onPageInit("login", function(page) {
  $$("#goLogin").on("click", function() {
    // validate account and password
    var isValid = true;
    var account = Trim($$("#username").val());
    var password = Trim($$("#passw").val());
    if (account == "" || password == "") {
      isValid = false;
      myApp.alert("请填写账号和密码", "");
    } else if (password.length < 6) {
      isValid = false;
      myApp.alert("密码不足6位", "");
    }
    if (isValid) {
      myApp.showPreloader();
      questRandomCode(account).then(data => {
        let salt = data.salt;
        let randomCode = data.randomCode;
        let passwordSignedWithSalt = calculateRFC2104HMAC(password, salt);
        let randomCodeSha1Hash = CryptoJS.SHA1(randomCode);
        let signedPassword = calculateRFC2104HMAC(
          CryptoJS.enc.Hex.stringify(passwordSignedWithSalt),
          randomCodeSha1Hash
        );
        var params = {
          account: account,
          signedPassword: CryptoJS.enc.Hex.stringify(signedPassword),
          apiVersion: "1.1.2",
          clientType: 0
        };
        goLogin(params);
      });
    }
  });
});
myApp.init();
function questRandomCode(account) {
  return new Promise(function(resolve, reject) {
    $$.ajax({
      url: "http://enterprise.magiqmobile.com/authorize",
      type: "GET",
      data: {
        account: account
      },
      dataType: "json",
      success: function(data) {
        if (data.responseCode == 0) {
          resolve(data);
        } else {
          myApp.alert("登录出错，请稍后再试", "");
        }
      },
      error: function(xhr) {
        console.log(xhr);
        myApp.alert("登录失败，请稍后再试", "");
      }
    });
  });
}

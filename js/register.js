function tos(){
    
    swal("Terms and Conditions...", "1) Do not share your Username and Password with anyone. ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎2) Do not Place Orders for fun.",);

    document.getElementById('agree').checked="true";
}

function register(){

    swal({
        title: "Terms and Conditions",
        text: "1) Do not share your Username and Password with anyone. ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎2) Do not Place Orders for fun.",
        icon: "warning",
        buttons: true,
        dangerMode: true,
      })
      .then((willDelete) => {
        if (willDelete) {
          window.location.href="/html/home.html";
        } else {
          swal("Please Contact our support team. Email- blablah@gmail.com");
        }
      });
};
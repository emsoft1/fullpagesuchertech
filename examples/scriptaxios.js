console.log("kpppppp");
(function () {
    var getin = document.getElementById("subbtn");
    var inpemail = document.getElementById("inpemail");
    var inpmas = document.getElementById("inpmas");

    getin.addEventListener("click", function (e) {
        e.preventDefault();
        // console.log(inpemail.value);
        axios
            .post("/email", {
                sender: inpemail.value,
                mas: inpmas.value,
            })
            .then(function (response) {
                console.log(response);
            })
            .catch(function (error) {
                console.log(error);
            });
    });
})();

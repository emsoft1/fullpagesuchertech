(function () {
    document.querySelector("#storyi").addEventListener("click", function () {
        console.log("yes");
        document.querySelector(".over").classList.remove("on");
    });
    document.querySelector("#servicesi").addEventListener("click", function () {
        console.log("yes");
        document.querySelector(".over").classList.remove("on");
    });
    document
        .querySelector("#portfolioi")
        .addEventListener("click", function () {
            console.log("yes");
            document.querySelector(".over").classList.remove("on");
        });
    document.querySelector("#teami").addEventListener("click", function () {
        console.log("yes");
        document.querySelector(".over").classList.remove("on");
    });
    document.querySelector("#pricingi").addEventListener("click", function () {
        console.log("yes");
        document.querySelector(".over").classList.remove("on");
    });
    document.querySelector("#feedbacki").addEventListener("click", function () {
        console.log("yes");
        document.querySelector(".over").classList.remove("on");
    });
    document.querySelector("#Imprinti").addEventListener("click", function () {
        console.log("yes");
        document.querySelector(".over").classList.remove("on");
    });
    document.querySelector("#homeing").addEventListener("click", function () {
        console.log("yes");
        document.querySelector(".over").classList.remove("on");
    });

    window.addEventListener("hashchange", function (event) {
        if (location.hash == "#Story" && slideslid) {
            document.getElementById(
                "storyi"
            ).innerHTML = document.getElementById("storyi").dataset.hover;
        } else {
            document.getElementById(
                "storyi"
            ).innerHTML = document.getElementById("storyi").dataset.not;
        }
        if (location.hash.includes("#Services") && slideslid) {
            console.log(location.hash);
            document.getElementById(
                "servicesi"
            ).innerHTML = document.getElementById("servicesi").dataset.hover;
        } else {
            document.getElementById(
                "servicesi"
            ).innerHTML = document.getElementById("servicesi").dataset.not;
        }
        if (location.hash.includes("#Portfolio") && slideslid) {
            document.getElementById(
                "portfolioi"
            ).innerHTML = document.getElementById("portfolioi").dataset.hover;
        } else {
            document.getElementById(
                "portfolioi"
            ).innerHTML = document.getElementById("portfolioi").dataset.not;
        }
        if (location.hash == "#Team" && slideslid) {
            document.getElementById(
                "teami"
            ).innerHTML = document.getElementById("teami").dataset.hover;
        } else {
            document.getElementById(
                "teami"
            ).innerHTML = document.getElementById("teami").dataset.not;
        }
        if (location.hash == "#Pricing" && slideslid) {
            document.getElementById(
                "pricingi"
            ).innerHTML = document.getElementById("pricingi").dataset.hover;
        } else {
            document.getElementById(
                "pricingi"
            ).innerHTML = document.getElementById("pricingi").dataset.not;
        }
        if (location.hash == "#Feedback" && slideslid) {
            document.getElementById(
                "feedbacki"
            ).innerHTML = document.getElementById("feedbacki").dataset.hover;
        } else {
            document.getElementById(
                "feedbacki"
            ).innerHTML = document.getElementById("feedbacki").dataset.not;
        }
        if (location.hash == "#Imprint" && slideslid) {
            document.getElementById(
                "Imprinti"
            ).innerHTML = document.getElementById("Imprinti").dataset.hover;
        } else {
            document.getElementById(
                "Imprinti"
            ).innerHTML = document.getElementById("Imprinti").dataset.not;
        }
    });
})();

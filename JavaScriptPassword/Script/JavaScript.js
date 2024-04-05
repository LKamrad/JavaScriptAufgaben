window.onload = function () 
{
    let myButtonClicked = document.getElementById("myButton");

    myButtonClicked.onclick = isValidPassword;

    let secondPasswordEntered = document.getElementById("password2");

    secondPasswordEntered.onblur = isValidPassword;

}

function isValidPassword()
{
    let password1 = document.getElementById("password1").value
    let password2 = document.getElementById("password2").value

    if (password1 === password2)
    {
        document.getElementById("password1").style.backgroundColor = "#c9f0b9";
        document.getElementById("password2").style.backgroundColor = "#c9f0b9";
        document.getElementById("passwordValidity").textContent = "Die Passworter sind gleich";
        document.getElementById("passwordValidity").style.color = "green";
        document.getElementById("isCorrect").textContent = "✔";
        document.getElementById("isCorrect").style.color = "green";
    }
    else
    {
        document.getElementById("password1").style.backgroundColor = "#fc9aae";
        document.getElementById("password2").style.backgroundColor = "#fc9aae";
        document.getElementById("passwordValidity").textContent = "Die Passworter sind nicht gleich!";
        document.getElementById("passwordValidity").style.color = "red";
        document.getElementById("isCorrect").textContent = "✖";
        document.getElementById("isCorrect").style.color = "red";
    }
}
window.onload = function () 
{
    let myButtonClicked = document.getElementById("myButton");

    myButtonClicked.onclick = isValidPassword;

    

    let secondPasswordEntered = document.getElementById("password2");

    secondPasswordEntered.onblur = isValidPassword;

    let password1 = document.getElementById("password1");
    password1.oninput = function ()
    {
        validationPass(password1);
    }

    secondPasswordEntered.oninput = function ()
    {
        validationPass2(secondPasswordEntered);
    }

}

function validationPass(pass)
{
    console.log(pass.id);

    if (IsPasswordComplex(pass.value))
    {
        goodPassword1(pass);
    }
    else
    {
        badPassword1(pass);
    }
}
function validationPass2(pass)
{
    if (IsPasswordComplex(pass.value))
    {
        goodPassword2(pass);
    }
    else
    {
        badPassword2(pass);
    }
}

function goodPassword1()
{
    document.getElementById("isCorrect1").textContent = "✔";
    document.getElementById("isCorrect1").style.color = "green";
}
function badPassword1()
{
    document.getElementById("isCorrect1").textContent = "✖";
    document.getElementById("isCorrect1").style.color = "red";
}
function goodPassword2()
{
    document.getElementById("isCorrect2").textContent = "✔";
    document.getElementById("isCorrect2").style.color = "green";
}
function badPassword2()
{
    document.getElementById("isCorrect2").textContent = "✖";
    document.getElementById("isCorrect2").style.color = "red";
}
function isValidPassword()
{
    let password1 = document.getElementById("password1").value
    let password2 = document.getElementById("password2").value

    if (password1 === password2)
    {
        document.getElementById("passwordValidity").textContent = "Die Passworter sind gleich";
        document.getElementById("passwordValidity").style.color = "green";
    }
    else
    {

        document.getElementById("passwordValidity").textContent = "Die Passworter sind nicht gleich!";
        document.getElementById("passwordValidity").style.color = "red";

    }
}

function IsPasswordComplex(password)
{
    
    
    if (password.length < 8)
    {
        console.log("Password length: " + password.length);
        return false;
    }

    var regNumbers = new RegExp('[0-9]');
    let numbers = regNumbers.test(password);

    if (numbers === false)
    {
        console.log("Numbers: " + numbers);

        return false;
    }

    var regSmallLetters = new RegExp('[a-z]');
    let smallLetters = regSmallLetters.test(password);
    if (smallLetters === false)
    {
        console.log("Small letters: " + smallLetters);

        return false;
    }


    var regBigLetters = new RegExp('[A-Z]');
    let bigLetters = regBigLetters.test(password);

    if (bigLetters === false)
    {
        console.log("Big Letters: " + bigLetters);

        return false;
    }



    var regEmptySpace = new RegExp('\\s');
    let emptySpace = regEmptySpace.test(password);

    if (emptySpace === true)
    {
        console.log("Empty Spaces: " + emptySpace);
        
        return false;
    }

    var regSpecial = new RegExp("[^A-Za-z0-9]");
    let special = regSpecial.test(password);

    if (special === false)
    {
        console.log("Special characters: " + special);
        return false;
    }

    return true;
}
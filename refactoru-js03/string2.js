var phoneNumber = prompt("What is your phone number? (please use format xxx-xxx-xxxx)");

alert(phoneNumber[3] === "-" && phoneNumber[7] === "-");

var birthDate = prompt("What is your birthdate? (please use format xx/xx/xx)");

alert(birthDate[2] === "/" && birthDate[5] === "/");

var postalCode = prompt("What is your postal code? (please either user xxxxx or xxxxx-xxxx)");

alert((postalCode.indexOf("-") === 5 && postalCode.length === 10) || postalCode.length === 5);

var state = prompt("What state do you live in? (please enter a two letter abbreviation in caps)");

alert(state === state.toUpperCase() && state.length === 2);

var married = prompt("Are you married? (please answer yes or no)");

alert(married.toLowerCase() === "yes" || married.toLowerCase() === "no");

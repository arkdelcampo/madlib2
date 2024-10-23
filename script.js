function sendOutput(a) {
  document.getElementById("result").innerHTML = a;
  console.log(a);
}

function getWord() {
  // Input
  let pNoun = document.getElementById("pNoun").value;
  let adj = document.getElementById("adjective").value;
  let pTense = document.getElementById("pTense").value;
  let noun = document.getElementById("noun").value;

  // Process
  let output =
    '"There are too many ' +
    pNoun +
    " on this " +
    adj +
    ' airplane!" I screamed. "Somebody has to ' +
    pTense +
    " on this " +
    noun +
    ' to solve this problem!"';

  // Output
  sendOutput(output);
}

function getWordTwo() {
  // Input
  let pNoun = document.getElementById("pNoun").value;
  let adj = document.getElementById("adjective").value;
  let pTense = document.getElementById("pTense").value;
  let noun = document.getElementById("noun").value;

  // Process
  let output =
    '"There are a lot of ' +
    pNoun +
    " attending this " +
    adj +
    ' assembly." I said. "What if someone ' +
    pTense +
    " on the " +
    noun +
    ' ?"';

  // Output
  sendOutput(output);
}

document.getElementById("button1").addEventListener("click", getWord);
document.getElementById("button2").addEventListener("click", getWordTwo);

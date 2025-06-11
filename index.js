const tutorials = [
  "what does the this keyword mean?",
  "What is the Constructor OO pattern?",
  "implementing Blockchain Web API",
  "The Test Driven Development Workflow",
  "What is NaN and how Can we Check for it",
  "What is the difference between stopPropagation and preventDefault?",
  "Immutable State and Pure Functions",
  "what is the difference between == and ===?",
  "what is the difference between event capturing and bubbling?",
  "what is JSONP?",
];

function titleCased() {
  const exceptions = {
    "api": "API",
    "jsonp": "JSONP",
    "nan": "NaN",
    "oo": "OO",
    "stoppropagation": "StopPropagation",
    "preventdefault": "PreventDefault",
    "constructor": "Constructor"
  };

  return tutorials.map(sentence => {
    return sentence
      .split(" ")
      .map(word => {
        // Separate punctuation at the end, e.g. "preventDefault?" => ["preventDefault", "?"]
        const match = word.match(/^([a-zA-Z]+)([^a-zA-Z]*)$/);
        let coreWord = word;
        let punctuation = "";

        if (match) {
          coreWord = match[1];
          punctuation = match[2];
        }

        const lower = coreWord.toLowerCase();

        // Use exception if any
        const newWord = exceptions[lower]
          ? exceptions[lower]
          : coreWord.charAt(0).toUpperCase() + coreWord.slice(1).toLowerCase();

        return newWord + punctuation;
      })
      .join(" ");
  });
}




console.log(titleCased())
function buildContent() {
  var options = ['Reverse', 'Leetspeak', 'Lolspeak', 'Igpay Atinlay'];

  var wrapper = document.createElement('div');
  wrapper.id = 'container';

  wrapper.appendChild(makeHeading('Message Transmogrifier'));
  wrapper.appendChild(makeTextArea('Enter text to transmogrify!', 'text-in'));
  wrapper.appendChild(makeButtonList(options));
  wrapper.appendChild(makeTextArea('Transmogrified text will show up here!', 'text-out'));
  document.body.appendChild(wrapper);
}

function makeHeading(string) {
  var headingElem = document.createElement('h1');
  headingElem.textContent = string;
  return headingElem;
}

function makeTextArea(placeholder, textareaId) {
  var textarea = document.createElement('textarea');
  textarea.placeholder = placeholder;
  textarea.className = 'text-box';
  if (textareaId) {
    textarea.id = textareaId;
  }
  return textarea;
}

function makeButton(buttonText, buttonClass) {
  var button = document.createElement('button');
  button.textContent = buttonText;
  button.id = buttonText.toLowerCase().replace(/\W/, '');
  if (buttonClass) {
    button.className = buttonClass;
  }
  button.addEventListener('click', transmog, false);
  return button;
}

function makeButtonList(array) {
  var buttonWrap = document.createElement('div');
  buttonWrap.className = 'buttonWrap';
  for (var i = 0; i < array.length; i++) {
    buttonWrap.appendChild(makeButton(array[i], 'btn-transmog'));
  }
  return buttonWrap;
}

function transmog(event) {
  var target = document.getElementById(event.target.id);
  var input = document.getElementById('text-in');
  var output = document.getElementById('text-out');
  console.log(target.id);
  switch (target.id) {
    case 'reverse':
      output.value = reverse(input.value);
      break;
    case 'leetspeak':
      output.value = leetspeak(input.value);
      break;
    default:
      break;
  }
}

// String manipulations
function reverse(string) {
  return string.split('').reverse().join('');
}

function leetspeak(string) {
  // Commented out most characters because it gets too undreadable with them all.
  var charReplacements = {
    'A': '4',
    'B': '8',
    //    'C': '<',
    //    'D': '|)',
    'E': '3',
    //    'F': '|=',
    'G': '6',
    //    'H': '|-|',
    'I': '1',
    //    'J': '_|',
    //    'K': '|<',
    //    'L': '|_',
    //    'M': '|\\/|',
    //    'N': '|\\|',
    'O': '0',
    //    'P': '|o',
    //    'Q': 'O_',
    //    'R': '|2',
    'S': '5',
    'T': '7',
    //    'U': '|_|',
    //    'V': '\\/',
    //    'X': '%',
    //    'Y': '`/',
    'Z': '2'
  }
  for (char in charReplacements) {
    string = string.toUpperCase().replace(new RegExp(char, 'g'), charReplacements[char]);
  }
  return string.toUpperCase();
}

function lolspeak(string) {
  var randomWords = ['srsly'];
  var dict = {
    'eye': 'ai',
    'hello': 'oh hai',
    'hey': 'oh hai',
    'dude': 'dood',
    '/([b-df-hj-np-tv-z])\1{2,}}e\s/'
    /*

    Words that end in a silent "e" that have a consonant before often exchange the two last letters. However, it works better for some words than for others, so some discretion is advisable.

        kite -> kiet
        like -> liek
        come -> coem
        came -> caem
        bake -> baek
        plate -> plaet

    A good exception to this rule is "dude" which is rendered into "dood" or "d00d".

    Another note of interest are words that end in "er". Either you'll end up dropping the "e", replacing it with "u", or changing the ending to "ah". Both ways are acceptable.

        over -> ovah, ovur, ovr
        hover -> hovah, hovr
        peeker -> peekah, peekr

    Diphthongs (multiple vowel sounds in one syllable) are often exaggerated or misplaced

        Baby -> baybeh
        Youtube -> Yewtoob, Yewtewb, Yootoob
        loud -> lowd
        couch -> cowch

    Words that end in -y are often instead written to end in -eh.

        kitty -> kitteh or kittah
        funny -> funneh
        baby -> baybeh, behbeh

    "Th" sounds are usually replaced with "f", but can occasionally be replaced with "tt" or "dd". Rarely will the "th" be kept.

        Nothing -> Nofin, nuttin, etc
        Three -> tree, free, fwee, twee
        With -> wif

    An "s" (or an occasional "z") may be affixed to nouns of a certain magnitude of importance (perhaps to express a cat's misunderstanding of an important thing of which only 1 exists). This works excellently with the "th" rule above. (borrowing from popular usage in "internets/interwebs")

        Earth -> Urfs
        Eternity -> eternitys. (although forevur probably works better since guidelines recommend avoiding eschatological jargon)


    Add "d" or "ed" to atypical spellings of past-tense verbs/verbals or their present-tense forms.

        made -> maded
        ate -> eated

    As a corollary, the word generated by the previous rule may be ended with an "ing" to form the occasional lolcat future-tense.

        eating it -> eateding it


    Switch "le" endings with "el" or sometimes "ul".

        little -> littel or littul
        handle -> handel or handul
    */

  }
}

function piglatin(string) {

}

buildContent();

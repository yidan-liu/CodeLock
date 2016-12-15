function init() {
  //// Initialize Firebase.
  //// TODO: replace with your Firebase project configuration.
  var config = {
        apiKey: "AIzaSyDdMbehd1XnIMu8oGTWkoylBjQoZVOQwqE",
        authDomain: "team17-62680.firebaseapp.com",
        databaseURL: "https://team17-62680.firebaseio.com"
  };
  firebase.initializeApp(config);
  // Get Firebase Database reference.
  var firepadRef = getExampleRef();
  //// Create ACE
  var editor = ace.edit("firepad-container");
  editor.setTheme("ace/theme/textmate");
  var session = editor.getSession();
  session.setUseWrapMode(true);
  session.setUseWorker(false);
  session.setMode("ace/mode/javascript");
  //// Create Firepad.
  var firepad = Firepad.fromACE(firepadRef, editor, {
    defaultText: '// JavaScript Editing with Firepad!\nfunction go() {\n  var message = "Hello, world.";\n  console.log(message);\n}'
  });
}

// Helper to get hash from end of URL or generate a random one.
function getExampleRef() {
  var ref = firebase.database().ref();
  var hash = window.location.hash.replace(/#/g, '');
  if (hash) {
    ref = ref.child(hash);
  } else {
    ref = ref.push(); // generate unique location.
    window.location = window.location + '#' + ref.key; // add it as a hash to the URL.
  }
  if (typeof console !== 'undefined') {
    console.log('Firebase data: ', ref.toString());
  }
  return ref;
}
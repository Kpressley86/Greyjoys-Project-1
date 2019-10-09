// Authentication Status Change //
auth.onAuthStateChanged(user => {
  if (user) {
    db.collection('search').get().then(snapshot => {
       setupSearch(snapshot.docs);
       setupUI(user);
     });

  } else {
    setupUI();
    //seatupSearch([]);
  }
});

// Signup //
const signupForm = document.querySelector('#signup-form');
signupForm.addEventListener('submit', (e) => {
  e.preventDefault();

  // get user info //
  const email = signupForm['signup-email'].value;
  const password = signupForm['signup-password'].value;

  // sign up the user //
  auth.createUserWithEmailAndPassword(email, password).then(cred => {
    console.log("user cred:", cred.user);
    const modal = document.querySelector('#modal-signup');
    M.Modal.getInstance(modal).close();
    signupForm.reset();
  });
});

// logout //
const logout = document.querySelector('#logout');
logout.addEventListener('click', (e) => {
  e.preventDefault();
  auth.signOut().then(() => {
    console.log('User Signed Out');
  });
});

// login //
const loginForm = document.querySelector('#login-form');
loginForm.addEventListener('submit', (e) => {
  e.preventDefault();

  // user info //
  const email = loginForm['login-email'].value;
  const password = loginForm['login-password'].value;

  // login the user //
  auth.signInWithEmailAndPassword(email, password).then((cred) => {
    const modal = document.querySelector('#modal-login');
    M.Modal.getInstance(modal).close();
    loginForm.reset();
  });
});
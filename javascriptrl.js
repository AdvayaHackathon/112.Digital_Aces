function handleLogin() {
  const name = document.getElementById('loginName').value.trim();
  const password = document.getElementById('loginPassword').value;

  if (users[name] && users[name].password === password) {
    isLoggedIn = true;
    alert(`Welcome back, ${name}!`);
    goToPage('home');
  } else {
    alert("Invalid username or password!");
  }
}

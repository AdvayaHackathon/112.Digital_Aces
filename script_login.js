function togglePassword() {
    const pass = document.getElementById('loginPassword');
    pass.type = pass.type === 'password' ? 'text' : 'password';
  }
  
  function handleLogin() {
    const name = document.getElementById('loginName').value.trim();
    const pass = document.getElementById('loginPassword').value.trim();
  
    if (!name || !pass) {
      alert("Please fill in all fields!");
      return;
    }
  
    alert("Login Successful for user: " + name);
  
    // Redirect to abc.html after successful login
    window.location.href = "./menu_state.html";
  }
  
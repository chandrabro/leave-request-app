document.addEventListener('DOMContentLoaded', function() {
  const form = document.getElementById('leaveForm');

  form.addEventListener('submit', function(e) {
    e.preventDefault();  // 🚩 Prevent form from reloading the page

    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const leaveType = document.getElementById('leaveType').value;
    const reason = document.getElementById('reason').value.trim();

    if (!name || !email || !reason) {
      alert('Please fill in all required fields.');
      return;
    }

    const data = { name, email, leaveType, reason };

    fetch('https://script.google.com/macros/s/AKfycbwwLhnIKfcAemhsukaiZbRHI-tojNTx-8tVj7hApxExEllNAi72o-XHhnCXEPD_wR4/exec', {  // 🚩 Replace this with your Apps Script Web App URL
      method: 'POST',
      mode: 'no-cors',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
    });

    alert('✅ Leave request submitted!');
    form.reset();
  });
});

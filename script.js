const form = document.getElementById('leaveForm');
const status = document.getElementById('status');

form.addEventListener('submit', function(e) {
  e.preventDefault();

  const data = {
    name: document.getElementById('name').value,
    email: document.getElementById('email').value,
    leaveType: document.getElementById('leaveType').value,
    reason: document.getElementById('reason').value
  };

  fetch('https://script.google.com/macros/s/AKfycbwwLhnIKfcAemhsukaiZbRHI-tojNTx-8tVj7hApxExEllNAi72o-XHhnCXEPD_wR4/exec
', {
    method: 'POST',
    mode: 'no-cors',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data)
  })
  .then(() => {
    status.textContent = 'Leave request submitted!';
    form.reset();
  })
  .catch(() => {
    status.textContent = 'Error submitting request.';
  });
});

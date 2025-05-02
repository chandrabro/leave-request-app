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

  fetch('YOUR_GOOGLE_SCRIPT_WEBAPP_URL_HERE', {
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

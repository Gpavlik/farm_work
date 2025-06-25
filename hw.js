window.addEventListener('DOMContentLoaded', () => {
  const managerSelect = document.getElementById('managerSelect');
  const employeeSelect = document.getElementById('employeeSelect');

  for (const [email, name] of Object.entries(users)) {
    const managerOption = document.createElement('option');
    managerOption.value = email;
    managerOption.textContent = name;
    managerSelect.appendChild(managerOption);

    const employeeOption = document.createElement('option');
    employeeOption.value = email;
    employeeOption.textContent = name;
    employeeSelect.appendChild(employeeOption);
  }
});

document.getElementById('trainingForm').addEventListener('submit', (event) => {
  event.preventDefault();

  const skill = document.getElementById('skill').value;
  const product = document.getElementById('product').value;
  const deadline = document.getElementById('deadline').value;

  const managerEmail = document.getElementById('managerSelect').value;
  const employeeEmail = document.getElementById('employeeSelect').value;

  const managerName = users[managerEmail];
  const employeeName = users[employeeEmail];

  const body = `Шановна(ий) ${employeeName},

Прошу виконати домашнє завдання з навику "${skill}".
🔹 Перейдіть за посиланням: https://mysite.ua/skills/${skill}

Також завдання зі знання продукту "${product}":
🔹 Перейдіть за посиланням: https://mysite.ua/products/${product}

Дедлайн: ${deadline}

З повагою,
${managerName}`;

  const mailtoLink = `mailto:${employeeEmail}?cc=${managerEmail},trainer@pharmasco.com,head@pharmasco.com&subject=Навчальне завдання&body=${encodeURIComponent(body)}`;
  window.location.href = mailtoLink;
});

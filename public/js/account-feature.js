document.addEventListener('DOMContentLoaded', () => {
  // Get the Account-Functionality element
  const accountFunctionality = document.getElementById('account-functionality');

  // Add click event listener
  accountFunctionality.addEventListener('click', () => {
    // Get the form container element
    const formContainer = document.querySelector('.form-main-parent');

    // Toggle the visibility of the form container
    formContainer.classList.toggle('show');
  });
});
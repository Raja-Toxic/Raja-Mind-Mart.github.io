document.addEventListener('DOMContentLoaded', function () {
  const backButton = document.getElementById('back-button');
  const mainMenuButton = document.getElementById('main-menu-button');
  const saveButton = document.getElementById('save-button');
  const recordButton = document.getElementById('record-button');
  const headingButtons = document.querySelectorAll('.heading-button');
  const listContainer = document.getElementById('list-container');

  const data = {
    vegetables: ['Carrot', 'Broccoli', 'Spinach'],
    fruits: ['Apple', 'Banana', 'Orange'],
    drinks: ['Water', 'Tea', 'Coffee'],
    meats: ['Chicken', 'Beef', 'Fish'],
    others: ['Bread', 'Cheese', 'Rice']
  };

  let currentState = 'mainMenu';
  let savedCells = JSON.parse(localStorage.getItem('savedCells')) || [];
  let offlineForms = JSON.parse(localStorage.getItem('offlineForms')) || [];

  function navigateTo(state) {
    currentState = state;
    updateUI();
  }

  function goBack() {
    if (currentState === 'list' || currentState === 'record') {
      navigateTo('mainMenu');
    } else if (currentState === 'mainMenu') {
      alert('Cannot go back further.');
    }
  }

  function goToMainMenu() {
    navigateTo('mainMenu');
  }

  function saveSelectedCells() {
    const checkboxes = document.querySelectorAll('.list-checkbox:checked');
    const selectedCells = Array.from(checkboxes).map(checkbox => checkbox.value);

    if (selectedCells.length > 0) {
      savedCells = [...new Set(savedCells.concat(selectedCells))];
      localStorage.setItem('savedCells', JSON.stringify(savedCells));
      alert('Cells saved successfully!');
    } else {
      alert('Please select at least one cell.');
    }
  }

  function openRecord() {
    navigateTo('record');
  }

  function openList(heading) {
    navigateTo('list');
    listContainer.innerHTML = '';

    data[heading].forEach(item => {
      const listItem = document.createElement('div');
      listItem.className = 'list-item';

      const checkbox = document.createElement('input');
      checkbox.type = 'checkbox';
      checkbox.className = 'list-checkbox';
      checkbox.id = item;
      checkbox.value = item;

      const label = document.createElement('label');
      label.htmlFor = item;
      label.textContent = item;

      listItem.appendChild(checkbox);
      listItem.appendChild(label);

      listContainer.appendChild(listItem);
    });
  }

  function updateUI() {
    if (currentState === 'mainMenu') {
      listContainer.innerHTML = '<p>Main Menu content goes here.</p>';
    } else if (currentState === 'list') {
      const checkboxes = document.querySelectorAll('.list-checkbox');
      checkboxes.forEach(checkbox => {
        checkbox.addEventListener('change', () => {
          console.log(`Checkbox with value ${checkbox.value} is now ${checkbox.checked ? 'checked' : 'unchecked'}`);
        });
      });
    } else if (currentState === 'record') {
      listContainer.innerHTML = '';

      if (savedCells.length > 0) {
        savedCells.forEach(item => {
          const listItem = document.createElement('div');
          listItem.className = 'list-item';

          listItem.textContent = item;

          const deleteButton = document.createElement('button');
          deleteButton.textContent = 'Delete';
          deleteButton.dataset.cell = item;

          deleteButton.onclick = () => openDeleteConfirmation(item);

          listItem.appendChild(deleteButton);

          listContainer.appendChild(listItem);
        });
      } else {
        listContainer.innerHTML = '<p>No saved cells yet.</p>';
      }
    }
  }

  function openDeleteConfirmation(cell) {
    const modal = document.getElementById('confirmModal');
    const confirmDeleteButton = document.getElementById('confirmDelete');
    const cancelDeleteButton = document.getElementById('cancelDelete');

    modal.style.display = 'block';

    confirmDeleteButton.onclick = function () {
      deleteSavedCell(cell);
      modal.style.display = 'none';
    };

    cancelDeleteButton.onclick = function () {
      modal.style.display = 'none';
      console.log('Deletion canceled.');
    };
  }

  function deleteSavedCell(cell) {
    savedCells = savedCells.filter(item => item !== cell);
    localStorage.setItem('savedCells', JSON.stringify(savedCells));
    updateUI();
  }

  // Function to save form data to localStorage
  function saveFormData(formData) {
    offlineForms.push(formData);
    localStorage.setItem('offlineForms', JSON.stringify(offlineForms));
    alert('Form data saved offline.');
  }

  backButton.addEventListener('click', goBack);
  mainMenuButton.addEventListener('click', goToMainMenu);
  saveButton.addEventListener('click', saveSelectedCells);
  recordButton.addEventListener('click', openRecord);

  headingButtons.forEach(button => {
    button.addEventListener('click', () => openList(button.dataset.heading));
  });

  updateUI();
});

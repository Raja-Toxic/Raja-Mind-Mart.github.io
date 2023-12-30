document.addEventListener('DOMContentLoaded', function () {
  const backButton = document.getElementById('back-button');
  const mainMenuButton = document.getElementById('main-menu-button');
  const saveButton = document.getElementById('save-button');
  const recordButton = document.getElementById('record-button');
  const headingButtons = document.querySelectorAll('.heading-button');
  const listContainer = document.getElementById('list-container');

  const data = {
    vegetables: ['01:Corn             مکئی (Makai)',
    '02:Mushroom  کھمبی (Khumbi)',
    '03:Broccoli     بروکلی (Broccoli)',
    '4:Red bell pepper  لال شملہ مرچ (Laal Shimla Mirch)',
    '5:Pineapple     انناس  (Ananas)',
    '6:Tomato         ٹماٹر   (Tamatar)',
    '7:Swede/Rutabaga ایک قسم کا شلجم (Ek Qisam Ka Shaljam)',
    '8:Carrot           گاجر      (Gajar)',
    '9:Brussels sprout  بروسلز کا بُنا ہوا پھول (Brussels Ka Buna Hua Phool)',
    '10:Pumpkin      کدو     (Kaddu)',
    '11:Cabbage بند گوبھی (Band Gobhi)',
    '12:Potato        آلو        (Aalu)',
    '13:Eggplant   بینگن   (Baingan)',
    '14:Sweet potato  شکر قندی آلو  (Shakarqandi Aalu)',
    '15:Turnip        شلجم    (Shaljam)',
    '16:Courgette Zucchini  زُکینی  (Zucchini)',
    '17:Green chilli   ہری مرچ  (Hari Mirch)',
    '18:Onion        پیاز            (Piyaz)',
    '19:Lettuce     سلاد پتہ    (Salad Patta)',
    '20:Radish       مولی       (Mooli)',
    '21:Pea            مٹر         (Matar)',
    '22:Asparagus شاہی انجیر (Shaahi Anjeer)',
    '23:Celery       اجوائن       (Ajwain)',
    '24:Green pepper  ہرا شملہ مرچ  (Sabaz Shimla Mirch)',
    '25:French beans  فرانچ بینز (French Beans)',
    '26:Spinach      سپینچ       (Spinach)',
    '27:Beetroot/Beet  چقندر  (Chukandar)',
    '28:Red chillies/Red chili peppers  لال مرچیں (Laal Mirchein)',
    '29:Bean         پھلی           (Phali)',
    '30:Parsnip     پارسنپ       (Parsnip)',
    '31:Taro root    اربی          (Arbi)',
    '32:Ginger       ادرک         (Adrak)',
    '33:Garlic        لہسن          (Lehsan)',
    '34:Leek          لیک          (Leek)',
    '35:Shallot      شلار         (Shallot)',
    '36:Horseradish  ہارس ریڈش (Horseradish)',
    '37:Jicama      جیکاما       (Jicama)',
    '38:Salsify    سیلسفائی       (Salsify)',
    '39:Parsley root  پارسلی کا جڑ (Parsley Ka Jar)',
    '40:Daikon radish  ڈائیکن مولی (Daikon Mooli)',
    '41:Kohlrabi  گانٹھ گوبھی    (Ganth Gobhi)',
    '42:Sweet turnip  میٹھا شلجم (Meetha Shaljam)',
    '43:Black radish  کالی مولی (Kali Mooli)',
    '44:Red radish   سرخ مولی (Surkh Mooli)',
    '45:White radish   سفید مولی (Safaid Mooli)',
    '46:Green radish   ہرا مولی (Hara Mooli)',
    '47:Radicchio       ریڈیکیو    (Radicchio)',
    '48:Maca root  میکا جڑ        (Maca Jar)',
    '49:Turmeric       ہلدی         (Haldi)',
    '50:Wasabi root  وسابی جڑ (Wasabi Jar)',
    '51:Spinach (Spinacia oleracea) - پالک (Spinach)',
    '52:Lettuce (Lactuca sativa)  سلاد پتہ (Salad Patta)',
    '53:Kale (Brassica oleracea var acephala) - کیل (Kale)',
    '54:Swiss chard (Beta vulgaris subsp. cicla) - پالک کا متبادل (Swiss Chard)',
    '55:Arugula (Eruca vesicaria) - اروگولہ  (Arugula)',
    '56:Mustard greens   سرسوں کے پتے (Sarson Ke Patte)',
    '57:Endive         اینڈائیو          (Endive)',
    '58:Escarole     ایسکیرول      (Escarole)',
    '59:Bok choy    بوک چوئی     (Bok Choy)',
    '60:Chinese cabbage  چائنیز کی گوبھی (Chinese Cabbage)',
    '61:Cabbage     گوبھی           (Cabbage)',
    '62:Broccoli rabe  بروکلی ریب (Broccoli Rabe)',
    '63:Turnip greens  شلجم کے پتے (Shaljam Ke Patte)',
    '64:Beet greens - چقندر کے پتے (Chukandar Ke Patte)',
    '65:Carrot greens  گاجر کے پتے (Gajar Ke Patte)',
    '66:Parsley         پارسلی          (Parsley)',
    '67:Cilantro        دھنیا             (Dhania)',
    '68:Basil            تلسی             (Tulsi)',
    '69:Thyme          تھائم            (Thyme)',
    '70:Sage            سیج             (Sage)',
    '71:Rosemary  روزمیری     (Rosemary)',
    '72:Mint              پودینہ         (Pudina)',
    '73:Sorrel          سوریل        (Sorrel)',
    '74:Dandelion greens  ڈینڈیلائن کے پتے (Dandelion Ke Patte)',
    '75:Chicory      چکوری        (Chicory)',
    '76:Belgian endive  بیلجیئن اینڈائو (Belgian Endive)',
    '77:Frisee        فریزی           (Frisee)',
    '78:Mache          میچ            (Mache)',
    '79:Watercress  واٹرکریس    (Watercress)',
    '80:Nettles    گھاس کٹی ہوئی پتیاں   (Ghaas Kati Hui Patte)',
    '81:Lambsquarters  لیمبس کوارٹرز (Lambsquarters)',
    '82:Amaranth     چولئی        (Cholai)',
    '83:Wild spinach   جنگلی سپینچ (Jangli Spinach)',
    '84:Wild mustard   جنگلی سرسوں  (Jangli Sarson)',
    '85:Wild lamb’s quarters   جنگلی لیمبس کوارٹرز (Jangli Lambsquarters)',
    '86:Purslane         خرفہ       (Kharfa)',
    '87:Plantain leaves  بنانا کے پتے (Banana Ke Patte)',
    '88:Mallow leaves   میلو کے پتے  (Mallow Ke Patte)',
    '89:Stinging nettles   گھاس کٹی ہوئی پتیاں (Ghaas Kati Hui Patte)',
    '90:Curly dock   کرلی ڈاک     (Curly Dock)',
    '91:Sheep sorrel   شیپ سوریل  (Sheep Sorrel)',
    '92:Red-veined sorrel  لال رویاں والی سوریل (Laal Roiyan Wali Sorrel)',
    '93:Cucumber          کھیرا       (Kheera)'],
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

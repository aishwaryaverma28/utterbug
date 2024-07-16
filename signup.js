document.addEventListener('DOMContentLoaded', (event) => {
    // language dropdown
    const dropdown = document.querySelector('.dropdown');
    const dropdownList = document.querySelector('.drpdwonList');
    const dropdownHead = document.querySelector('.dropdownHead');
    const listItems = dropdownList.querySelectorAll('li');
// location
    const dropdown2 = document.querySelector('.dropdown2');
    const dropdownList2 = document.querySelector('.drpdwonList2');
    const dropdownHead2 = document.querySelector('.dropdownHead2');
    const listItems2 = dropdownList2.querySelectorAll('li');
  // language dropdown eventlistners
  dropdown.addEventListener('click', () => {
    const isBlock = dropdownList.style.display === 'block';
    dropdownList.style.display = isBlock ? 'none' : 'block';
    if (isBlock) {
      dropdownList.classList.remove('listCss');
    } else {
      dropdownList.classList.add('listCss');
    }
  });

  listItems.forEach((item) => {
    item.addEventListener('click', (event) => {
      dropdownHead.textContent = item.textContent;
      dropdownList.style.display = 'none';
      dropdownList.classList.remove('listCss');
      event.stopPropagation();
    });
  });
  document.addEventListener('click', (event) => {
    if (!dropdown.contains(event.target)) {
      dropdownList.style.display = 'none';
      dropdownList.classList.remove('listCss');
    }
  });


  // location dropdown eventlistners
  dropdown2.addEventListener('click', () => {
    const isBlock = dropdownList2.style.display === 'block';
    dropdownList2.style.display = isBlock ? 'none' : 'block';
    if (isBlock) {
      dropdownList2.classList.remove('listCss');
    } else {
      dropdownList2.classList.add('listCss');
    }
  });

  listItems2.forEach((item) => {
    item.addEventListener('click', (event) => {
      dropdownHead2.textContent = item.textContent;
      dropdownList2.style.display = 'none';
      dropdownList2.classList.remove('listCss2');
      event.stopPropagation();
    });
  });
  document.addEventListener('click', (event) => {
    if (!dropdown2.contains(event.target)) {
      dropdownList2.style.display = 'none';
      dropdownList2.classList.remove('listCss2');
    }
  });

});

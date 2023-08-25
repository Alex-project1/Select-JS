'use strict';
const city = [
  {
    city: 'Краків',
    id: '000002',
    selected: false,
  },
  {
    city: 'Київ',
    id: '000001',
    selected: true,
  },
  {
    city: 'Варшава',
    id: '000003',
    selected: false,
  },
];

const select = document.createElement('select');

for (let i = 0; i < city.length; i++) {
  const option = document.createElement('option');
  option.value = city[i].id;
  option.textContent = city[i].city;
  if (city[i].selected) {
    option.selected = true;
  }
  select.append(option);
}

document.querySelector('.select-box').append(select);

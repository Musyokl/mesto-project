const profile = document.querySelector('.profile');
const popupProfile = document.querySelector('.popup-profile');
const popupItem = document.querySelector('.popup-item');
const popupPlace = document.querySelector('.popup-image');
const itemContainer = document.querySelector('.places');

profile.querySelector('.profile__change').addEventListener('click', function() {
    popupProfile.classList.add('popup_opened');
});

popupProfile.querySelector('.popup__close').addEventListener('click', function() {
    popupProfile.classList.remove('popup_opened');
});

profile.querySelector('.profile__add').addEventListener('click', function() {
  popupItem.classList.add('popup_opened');
});

popupItem.querySelector('.popup__close').addEventListener('click', function() {
  popupItem.classList.remove('popup_opened');
});

const profileFormElement = popupProfile.querySelector('form');
const nameInput = profileFormElement.querySelector('.popup__item_el_name');
const jobInput = profileFormElement.querySelector('.popup__item_el_status'); 

nameInput.value = profile.querySelector('.profile__name').textContent;
jobInput.value = profile.querySelector('.profile__status').textContent; 

function profileSubmitHandler(evt) {
  evt.preventDefault();

  profile.querySelector('.profile__name').textContent = nameInput.value;
  profile.querySelector('.profile__status').textContent = jobInput.value;

  popupProfile.classList.remove('popup_opened');
}

profileFormElement.addEventListener('submit', profileSubmitHandler);

function addItem(imageValue, nameValue) {
  const itemTemplate = document.querySelector('#item-template').content;
  const itemElement = itemTemplate.cloneNode(true);

  itemElement.querySelector('.item__image').src = imageValue;
  itemElement.querySelector('.item__name').textContent = nameValue;

  itemElement.querySelector('.item__react').addEventListener('click', function(evt) {
    evt.target.classList.toggle('item__react_active');
  })

  const deleteButton = itemElement.querySelector('.item__delete');

  deleteButton.addEventListener('click', function() {
    const deletedItem = deleteButton.closest('.item');
    deletedItem.remove();
  })

  itemElement.querySelector('.item__image').addEventListener('click', function(evt) {
    popupPlace.classList.add('popup_opened');
    popupPlace.querySelector('.popup-image__image').src = evt.target.closest('.item__image').src;
    popupPlace.querySelector('.popup-image__name').textContent = evt.target.closest('.item').querySelector('.item__name').textContent;
  })

  popupPlace.querySelector('.popup__close').addEventListener('click', function() {
    popupPlace.classList.remove('popup_opened');
  }) 

  itemContainer.append(itemElement);
}

const itemSubmit = popupItem.querySelector('.popup__submit');

itemFormElement = popupItem.querySelector('form');
imageInput = itemFormElement.querySelector('.popup__item_el_link');
placeInput = itemFormElement.querySelector('.popup__item_el_place');

function itemSubmitHandler(evt) {
  evt.preventDefault();

  imageValue = imageInput.value;
  nameValue = placeInput.value;

  addItem(imageValue, nameValue);

  popupItem.classList.remove('popup_opened');

  imageInput.value = '';
  placeInput.value = '';
}

itemFormElement.addEventListener('submit', itemSubmitHandler);

const initialCards = [
  {
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  },
  {
    name: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
  },
  {
    name: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
  },
  {
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  },
  {
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  }
]; 

initialCards.forEach(function (el) {
  nameValue = el.name;
  imageValue = el.link;

  addItem(imageValue, nameValue);
})



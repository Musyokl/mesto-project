const profile = document.querySelector('.profile');
const popupProfile = document.querySelector('.popup-profile');
const popupItem = document.querySelector('.popup-item');
const popupPlace = document.querySelector('.popup-image');
const itemContainer = document.querySelector('.places');
const itemTemplate = document.querySelector('#item-template').content.querySelector('.item');

function openPopup (popup) {
  popup.classList.add('popup_opened');
}

function closePopup (popup) {
  popup.classList.remove('popup_opened');
}

profile.querySelector('.profile__change').addEventListener('click', function() {
    openPopup(popupProfile);
});

popupProfile.querySelector('.popup__close').addEventListener('click', function() {
    closePopup(popupProfile);
});

profile.querySelector('.profile__add').addEventListener('click', function() {
  openPopup(popupItem);
});

popupItem.querySelector('.popup__close').addEventListener('click', function() {
  closePopup(popupItem);
});

const profileFormElement = popupProfile.querySelector('form');
const nameInput = profileFormElement.querySelector('.popup__item_el_name');
const jobInput = profileFormElement.querySelector('.popup__item_el_status'); 

nameProfile = profile.querySelector('.profile__name');
statusProfile = profile.querySelector('.profile__status');

function profileSubmitHandler(evt) {
  evt.preventDefault();

  nameProfile.textContent = nameInput.value;
  statusProfile.textContent = jobInput.value;

  closePopup(popupProfile);
}

profileFormElement.addEventListener('submit', profileSubmitHandler);

function createItem(imageValue, nameValue) {
  const itemElement = itemTemplate.cloneNode(true);
  const imageItem = itemElement.querySelector('.item__image');

  imageItem.src = imageValue;
  itemElement.querySelector('.item__name').textContent = nameValue;
  imageItem.alt = nameValue;

  itemElement.querySelector('.item__react').addEventListener('click', function(evt) {
    evt.target.classList.toggle('item__react_active');
  })

  const deleteButton = itemElement.querySelector('.item__delete');

  deleteButton.addEventListener('click', function() {
    const deletedItem = deleteButton.closest('.item');
    deletedItem.remove();
  })

  imageItem.addEventListener('click', function(evt) {
    openPopup(popupPlace);
    popupPlace.querySelector('.popup-image__image').src = imageValue;
    popupPlace.querySelector('.popup-image__name').textContent = nameValue;
    popupPlace.querySelector('.popup-image__image').alt = nameValue;
  })

  popupPlace.querySelector('.popup__close').addEventListener('click', function() {
    closePopup(popupPlace);
  }) 

  return itemElement;
}

function addItem(imageValue, nameValue) {
  
  itemContainer.prepend(createItem(imageValue, nameValue));
}

const itemSubmit = popupItem.querySelector('.popup__submit');

const itemFormElement = popupItem.querySelector('form');
const imageInput = itemFormElement.querySelector('.popup__item_el_link');
const placeInput = itemFormElement.querySelector('.popup__item_el_place');

function itemSubmitHandler(evt) {
  evt.preventDefault();

  const imageValue = imageInput.value;
  const nameValue = placeInput.value;

  addItem(imageValue, nameValue);

  closePopup(popupItem);

  imageInput.reset();
  placeInput.reset();
}

itemFormElement.addEventListener('submit', itemSubmitHandler);

initialCards.forEach(function (el) {
  const nameValue = el.name;
  const imageValue = el.link;

  addItem(imageValue, nameValue);
})



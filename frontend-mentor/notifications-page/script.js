const notifBody = document.querySelector('.notif-body');
const postText = {
  'react': 'reacted to your recent post',
  'pic-comment': 'commented on your picture',
  'follow': 'followed you',
  'message': 'sent you a private message',
  'join': 'has joined your group',
  'leave': 'left the group'
}

function card({avatar, fullname, objectName='', time, category, additionalData='', unread = false}) {
  console.log("hello")
  const cardElm = document.createElement('div');
  cardElm.classList.add('notif-card');

  if (unread) {
    cardElm.classList.add('unread');
  }

  const imgElm = document.createElement('div');
  imgElm.classList.add('notif-img');
  const img = document.createElement('img');
  img.src = avatar;
  img.alt = fullname;
  imgElm.appendChild(img);

  cardElm.appendChild(imgElm);

  const textElm = document.createElement('div');
  textElm.classList.add('notif-text');
  const textFullElm = document.createElement('p');
  textFullElm.classList.add('notif-text__full');
  textFullElm.innerText = ` ${postText[category]}`;

  const nameSpan = document.createElement('a');
  nameSpan.classList.add('user-fullname');
  nameSpan.innerText = fullname;
  textFullElm.prepend(nameSpan);

  const objectSpan = document.createElement('a');
  objectSpan.classList.add('object-name');
  objectSpan.innerText = ` ${objectName}`;
  textFullElm.appendChild(objectSpan);

  textElm.appendChild(textFullElm);
  const textTimeElm = document.createElement('p');
  textTimeElm.classList.add('notif-text__time');
  textTimeElm.innerText = time;
  textElm.appendChild(textTimeElm);

  const notifDetails = document.createElement('div');
  notifDetails.classList.add('notif-details');
  notifDetails.appendChild(textElm);

  if (category === 'message') {
    const textDataElm = document.createElement('p');
    textDataElm.classList.add('notif-text__data');
    textDataElm.innerText = additionalData;
    notifDetails.appendChild(textDataElm);
  } else if (category === 'pic-comment') {
    const imgDataElm = document.createElement('img');
    imgDataElm.classList.add('notif-img__data');
    imgDataElm.alt = "picture";
    imgDataElm.src = additionalData;
    notifDetails.appendChild(imgDataElm);
  } else if (['leave', 'join'].includes(category)) {
    objectSpan.classList.add('group-name');
  }

  cardElm.appendChild(notifDetails);

  notifBody.appendChild(cardElm);
}

const notifList = [
  {
    avatar: './assets/images/avatar-mark-webber.webp',
    fullname: 'Mark Webber',
    objectName: 'My first tournament today!',
    time: '1m ago',
    category: 'react'
  },
  {
    avatar: './assets/images/avatar-angela-gray.webp',
    fullname: 'Angela Gray',
    time: '5m ago',
    category: 'follow'
  },
  {
    avatar: './assets/images/avatar-jacob-thompson.webp',
    fullname: 'Jacob Thompson',
    objectName: 'Chess Club',
    time: '1 day ago',
    category: 'join'
  },
  {
    avatar: './assets/images/avatar-rizky-hasanuddin.webp',
    fullname: 'Rizky Hasanuddin',
    time: '5 days ago',
    category: 'message',
    additionalData: 'Hello, thanks for setting up the Chess Club. I\'ve been a member for a few weeks now and I\'m already having lots of fun and improving my game.'
  },
  {
    avatar: './assets/images/avatar-kimberly-smith.webp',
    fullname: 'Kimberly Smith',
    time: '1 week ago',
    category: 'pic-comment',
    additionalData: './assets/images/image-chess.webp'
  },
  {
    avatar: './assets/images/avatar-nathan-peterson.webp',
    fullname: 'Nathan Peterson',
    objectName: '5 end-game strategies to increase your win rate',
    time: '2 weeks ago',
    category: 'react'
  },
  {
    avatar: './assets/images/avatar-anna-kim.webp',
    fullname: 'Anna Kim',
    objectName: 'Chess Club',
    time: '2 weeks ago',
    category: 'leave'
  }
]

let unread = 3
let counterUnread = 0
notifList.forEach((notif) => {
  if (counterUnread++ < unread) {
    notif.unread = true
  }

  card(notif);
})
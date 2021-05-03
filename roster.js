const rosterItems = [
  {
    'img': '<img src="images/bryce.jpg" class="artist-image" alt="#">',
    'resident': '<p>Resident: Bryce Methven</p>',
    'bio': '<p>' +
           'Lorem ipsum dolor sit amet consectetur adipisicing elit. ' +
           'Culpa ex expedita doloremque, sunt eveniet, laboriosam totam at, debitis earum fugit eligendi quae. ' +
           'Perferendis ratione cum ipsum molestiae perspiciatis tempore aut?' +
           'Lorem ipsum dolor sit amet consectetur adipisicing elit. ' +
           'Culpa ex expedita doloremque, sunt eveniet, laboriosam totam at, debitis earum fugit eligendi quae. ' +
           'Perferendis ratione cum ipsum molestiae perspiciatis tempore aut?' +
           '</p>'
  },
  {
    'img': '<img src="images/haptic.jpg" class="artist-image" alt="#">',
    'resident': '<p>Resident: Haptic</p>',
    'bio': '<p>' +
           'Haptic ipsum dolor sit amet consectetur adipisicing elit. ' +
           'Culpa ex expedita doloremque, sunt eveniet, laboriosam totam at, debitis earum fugit eligendi quae. ' +
           'Perferendis ratione cum ipsum molestiae perspiciatis tempore aut?' +
           '</p>'
  },
  {
    'img': '<img src="images/haptic.jpg" class="artist-image" alt="#">',
    'resident': '<p>Resident: DJ Test</p>',
    'bio': '<p>' +
           'Haptic ipsum dolor sit amet consectetur adipisicing elit. ' +
           'Culpa ex expedita doloremque, sunt eveniet, laboriosam totam at, debitis earum fugit eligendi quae. ' +
           'Perferendis ratione cum ipsum molestiae perspiciatis tempore aut?' +
           '</p>'
  },
]

const rosterArtist = document.querySelector(".artist")
const rosterBio = document.querySelector(".bio")
const rosterPagin = document.querySelector(".pagination")

let currentPage = 1
let rows = 1

function displayRoster(data, page, pageRows) {
  page--;

  let start = pageRows * page; // 1 x 0 = 0
  let end = start + pageRows; // 0 + 1 = 1
  let paginatedItems = data.slice(start, end); // 0, 1 Slice method will select first element in array
  
  // For loop that loops through array once
  // Length method returns value of the array which is 1
  for (let i = 0; i < paginatedItems.length; i++) {
    
    let leftCol = `<div class="item">
                  ${paginatedItems[i].img}
                  ${paginatedItems[i].resident}
                  </div>`
                  
    // Template literals

    let rightCol = paginatedItems[i].bio
    
    rosterArtist.innerHTML = leftCol
    rosterBio.innerHTML = rightCol
                  
  }
}

displayRoster(rosterItems, currentPage, rows);


function pagination(data, pageRows, wrapper) {
  wrapper.innerHTML = "";

  let pageCount = Math.ceil(data.length / pageRows);

  for (let i = 1; i < pageCount + 1; i++) {
    let btn = paginationBtns(i, data);
    wrapper.appendChild(btn);
  }

  let next = document.createElement('button');
  next.id = "next";
  let prev = document.createElement('button');
  prev.id = "prev"
  let s = document.getElementsByTagName('button')[0]
  prev.innerText = 'Previous';
  next.innerText = 'Next';
  wrapper.insertBefore(prev,s);

}

pagination(rosterItems, rows, rosterPagin);


function nextp (page, data, pageRows) {
  let pageCount = Math.ceil(data.length / pageRows);
  document.getElementById("next").addEventListener('click', () => {
    if (parseInt(page.id) === pageCount) {
    } else {
      currentPage = parseInt(page.id) + 1;
       displayRoster(data, currentPage, rows);
     }
   });
}

function prevp (page, data) {
  document.getElementById("prev").addEventListener('click', ()=> {
    if (parseInt(page.id) === 1) {
    } else {
      currentPage = parseInt(page.id) - 1;
      displayRoster(data, currentPage, rows);
     }
   });
}


function paginationBtns(page, data) {

  let button = document.createElement('button');
  button.innerText = page;

  /*let next = document.createElement('button');
  next.innerText = 'Next';

  let prev = document.createElement('button');
  prev.innerText = 'Previous';*/

  if (currentPage == page);
  button.addEventListener('click', function() {
    currentPage = page;
    displayRoster(data, currentPage, rows);
  });

  return button;

}

/*function nextBtn(page, data) {

  let pageCount = Math.ceil(data.length / pageRows);
  next.addEventListener('click', function() {
    if (currentPage += page);
  });

}*/



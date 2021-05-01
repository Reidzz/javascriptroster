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

  let loopStart = page * pageRows;
  let paginatedItems = data.slice(loopStart, loopStart + pageRows);
  for (let i = loopStart; i < loopStart + pageRows; i++) {

    let leftCol = `<div class="item">
                  ${data[i].img}
                  ${data[i].resident}
                  </div>`
                  
    /*console.log(data[i].img);*/
    // Template literals

    /*let rightCol = `<div class="bio">
                  ${data[i].bio}
                  </div>`*/

    let rightCol = data[i].bio
    
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

}

pagination(rosterItems, rows, rosterPagin);


function paginationBtns(page, data) {

  let button = document.createElement('button');
  button.innerText = page;

  let next = document.createElement('button');
  next.innerText = 'Next';

  let prev = document.createElement('button');
  prev.innerText = 'Previous';

  if (currentPage == page);
  button.addEventListener('click', function() {
    currentPage = page;
    displayRoster(data, currentPage, rows);
  });

  /*if (currentPage += page);
  button.addEventListener('click', function() {
    currentPage = page;
    displayRoster(data, currentPage, rows);
  });*/

  return button;

}

function nextBtn() {

}



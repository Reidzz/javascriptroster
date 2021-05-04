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
let pageRows = 1

function displayRoster(data, page, rows) {
  // Sets currentPage variable to 0
  page--;

  let start = rows * page; // 1 x 0 = 0
  let end = start + rows; // 0 + 1 = 1
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

    /*console.log(paginatedItems[i]);*/
                  
  }
}

displayRoster(rosterItems, currentPage, pageRows);
pagination(rosterItems, pageRows, rosterPagin);

function pagination(data, rows, pagination) {
  pagination.innerHTML = "";

  let pageCount = Math.ceil(data.length / rows); // 3 / 1 = 3 Pages

  for (let i = 1; i < pageCount + 1; i++) {
    let btn = paginationBtns(i, data);
    pagination.appendChild(btn);
  }

  let nextBtn = nextPage(data);
  pagination.appendChild(nextBtn);

  /*console.log(pageCount);
  console.log(data.length);
  console.log(pageRows);*/
}

function nextPage(page, data) {

  let nextbtn = document.createElement('button');
  nextbtn.innerText = 'Next';

  if (currentPage < page - 1);
  nextbtn.addEventListener('click', function() {
    currentPage = page++;
    displayRoster(data, currentPage, pageRows);
  });

  return nextbtn;

}

function paginationBtns(page, data) {

  let button = document.createElement('button');
  button.innerText = page;

  if (currentPage == page);
  button.addEventListener('click', function() {
    currentPage = page;
    displayRoster(data, currentPage, pageRows);
  });

  return button;

}

/*rosterItems.forEach(function(item, index) {
  console.log("Current: " + item.resident);
  if (index > 0) {
      console.log("Previous: " + rosterItems[index - 1].resident);
  }
  if (index < index.length - 1) {
      console.log("Next: " + rosterItems[index + 1].resident);
  }
});*/

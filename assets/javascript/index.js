// DOM Elements //
const proGolferSearch = document.querySelector('.searchInfo');
const loggedOutLinks = document.querySelectorAll('.logged-out');
const loggedInLinks = document.querySelectorAll('.logged-in');
const setupUI = (user) => {

  if (user) {
    // Toggle User UI //
    loggedInLinks.forEach(item => item.style.display = 'block');
    loggedOutLinks.forEach(item => item.style.display = 'none');
  } else {

    // User Elements //
    loggedInLinks.forEach(item => item.style.display = 'none');
    loggedOutLinks.forEach(item => item.style.display = 'block');
  }
};

// Create Search on Login //
const setupSearch = (data) => {
  if (data.length) {
    let html = '';
    data.foreach(doc => {
      const search = doc.data();
      const form = `
    <form>
    <div class="collapsible-header" >${search.name}</div>
    <div class="collapsible-body" >${search.year}</div>
    </form>
    `;
      html += form
    });

    proGolferSearch.innerHTML = html;
  } else {
    proGolferSearch.innerHTML = ''
  }
};

// Materialize Components //
document.addEventListener('DOMContentLoaded', function () {

  var modals = document.querySelectorAll('.modal');
  M.Modal.init(modals);

  var items = document.querySelectorAll('.collapsible');
  M.Collapsible.init(items);

});
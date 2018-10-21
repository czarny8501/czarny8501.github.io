const pages = document.getElementsByClassName('menu');

const changePage = (ev) => {
  ev.preventDefault();
  if (!ev.target.classList.contains('active')) {
    Array.from(pages).forEach(el => el.classList.contains('active') && el.classList.remove('active'));
    ev.target.className += ' active';
  }
  const page = ev.target.textContent.toLowerCase();
  const xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = () => xhttp.readyState == 4 && xhttp.status == 200 ? document.getElementById('content').innerHTML = xhttp.responseText : null;
    
  xhttp.open('GET', `https://czarny8501.github.io/pages/${page}.html`, true);
  xhttp.send();
}

Array.from(pages).forEach(el => el.addEventListener('click', changePage));
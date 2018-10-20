const changePage = (ev) => {
  ev.preventDefault();
  const page = ev.target.textContent.toLowerCase();
  const xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = () => {
    console.log(this.responseText);
    this.readyState == 4 && this.status == 200 ? document.getElementById('content').innerHTML = this.responseText : null;
  };
  xhttp.open('GET', `pages/${page}.html`, true);
  xhttp.send();
}

const pages = document.getElementsByClassName('menu');
Array.from(pages).forEach( el => el.addEventListener('click', changePage));
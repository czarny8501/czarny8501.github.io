const changePage = (ev) => {
  ev.preventDefault();
  const page = ev.target.textContent.toLowerCase();
  const xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = () => {
    if(this.readyState == 4 && this.status == 200) {
      console.log('elo');
      
    }
  };
  xhttp.open('GET', `pages/${page}.html`, true);
  xhttp.send();
  document.getElementById('content').innerHTML = this.responseText;
  console.log(this.responseText);
}

const pages = document.getElementsByClassName('menu');
Array.from(pages).forEach( el => el.addEventListener('click', changePage));
const changePage = (ev) => {
  ev.preventDefault();
  const page = ev.target.textContent.toLowerCase();
  const xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = () => {
    if(xhttp.readyState == 4 && xhttp.status == 200) {
      console.log('elo');
      document.getElementById('content').innerHTML = xhttp.responseText;
      console.log(`https://czarny8501.github.io/pages/${page}.html`);
      console.log(xhttp.responseText);
    }
  };
  xhttp.open('GET', `https://czarny8501.github.io/pages/${page}.html`, true);
  xhttp.send();
  document.getElementById('content').innerHTML = xhttp.responseText;
  console.log(`https://czarny8501.github.io/pages/${page}.html`);
  console.log(xhttp.responseText);
}

const pages = document.getElementsByClassName('menu');
Array.from(pages).forEach( el => el.addEventListener('click', changePage));
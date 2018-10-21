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

const targetNode = document.getElementById('content');
const callback = (mutationsList, observer) => {
  for(var mutation of mutationsList) {
    if (mutation.type == 'childList') {
      const modal = document.getElementById('myModal');
      const photos = document.getElementsByClassName('photo');
      const modalImg = document.getElementById('img01');
      const captionText = document.getElementById('caption');

      const showPhoto = (ev) => {
        modal.style.display = 'block';
        modalImg.src = ev.target.src;
        captionText.innerHTML = ev.target.alt;
      }

      const span = document.getElementById('close');
      span.onclick = () => modal.style.display = 'none';

      Array.from(photos).forEach(el => el.firstElementChild.addEventListener('click', showPhoto));
    }
    
  }
}
const observer = new MutationObserver(callback);
observer.observe(targetNode, {childList: true});
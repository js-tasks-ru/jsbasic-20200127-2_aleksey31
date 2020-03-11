'use strict';

class Menu {
  template = `
  <ul class="list-group sidebar">
    <li class="list-group-item dropdown">
      <a class="nav-link dropdown-toggle" id="cameraphotos">Camera &amp; Photo</a>
      <ul class="dropdown-menu">   
        
       <li data-id="cameraphotos_accessories" class="dropdown-item"><a>Accessories</a></li>
    
      </ul>
    </li>
  
    <li class="list-group-item dropdown">
      <a class="nav-link dropdown-toggle" id="cinema">Home Cinema, TV &amp; Video</a>
      <ul class="dropdown-menu">   
        
       <li data-id="cinema_audio" class="dropdown-item"><a>Audio</a></li>
    
       <li data-id="cinema_video" class="dropdown-item"><a>Video</a></li>
    
      </ul>
    </li>
  </ul>
  `;


  constructor(element) {
    this.el = element;
    this.el.innerHTML = this.template;
    const background = document.querySelector(".backdrop");
    this.el.querySelector(".list-group").addEventListener('pointerenter', (e) => {

      if (e.target.classList.contains("list-group-item")) {
        e.target.lastElementChild.classList.add("show");
        background.classList.add("show");
      }
    }, true);
    this.el.querySelector(".list-group").addEventListener('pointerleave', (e) => {

      if (e.target.classList.contains("list-group-item")) {
        e.target.lastElementChild.classList.remove("show");
        background.classList.remove("show");
      }
    }, true);

    this.el.querySelector(".list-group").addEventListener('click', (e) => {
      if (e.target.closest("li") && e.target.closest("li").dataset.id) {
        console.log(e.target.closest("li").dataset.id);
        return e.target.closest("li").dataset.id;
      }
    });

  }



}

// Делает класс доступным глобально, сделано для упрощения, чтобы можно было его вызывать из другого скрипта
window.Menu = Menu;
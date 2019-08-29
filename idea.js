class Idea {
  constructor(title, body, starred = false, quality = 0) {
    this.id = Date.now();
    this.title = title;
    this.body = body;
    this.starred = starred;
    this.quality = quality;
    this.qualities = ['Swill', 'Plausible', 'Genius']
  }


  updateLocalStorage = (ideas) => {
    localStorage.setItem('ideas', JSON.stringify(ideas))
  }

  deleteIdea = (index) => {
    ideas.splice(1, index);
    updateLocalStorage()
  }

  returnHTML = () => {
    return (
      `<article>
        <div class="card-buttons">
          <button>x</button>
          <button>*</button>
        </div>
        <div class="idea-content">
          <h5>${this.title}</h5>
          <p>${this.body}</p>
        </div>
        <div class="card-quality">
          <button>up</button>
          <span>${this.qualities[this.quality]}</span>
          <button>down</button>
        </div>
      </article>`
    )
  }

  
}
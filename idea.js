class Idea {
  constructor(title, body, starred = false, quality = 0) {
    this.id = parseInt(Date.now()*Math.random());
    this.title = title;
    this.body = body;
    this.starred = starred;
    this.quality = quality;
    this.qualities = ['Swill', 'Plausible', 'Genius']
  }

  returnHTML = () => {
    return (
      `<article data-id=${this.id}>
        <div class="card-buttons">
          <button class="delete">x</button>
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
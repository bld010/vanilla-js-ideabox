class Idea {
  constructor(title, body, starred = false, quality = 0) {
    this.id = Date.now();
    this.title = title;
    this.body = body;
    this.starred = starred;
    this.quality = quality;
  }


  returnHTML = () => {
    `<p>${this.name}</p>`
  }

  
}
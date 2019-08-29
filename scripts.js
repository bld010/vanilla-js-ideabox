var ideas = []

// querySelectors

var titleInput = document.querySelector('input[name="title"]');
var bodyInput = document.querySelector('input[name="body"]');
var qualityInput = document.querySelector('input[name="quality"]');

var showStarredButton = document.querySelector('.starred-filter button')
var plausibleButton = document.querySelector('.quality-filter button:nth-of-type(2)')
var geniusButton = document.querySelector('.quality-filter button:nth-of-type(3)')
var addQualityButton = document.querySelector('.quality-form button');
var saveNewIdeaButton = document.querySelector('.idea-form button:nth-of-type(1)');
var searchIdeasButton = document.querySelector('.idea-form div button')

var cardContainer = document.querySelector('.card-container')

const handleCardContainerClicks = (e) => {

  if (e.target.className === 'delete') {
    deleteIdea(e)
  }
}

updateLocalStorage = () => {
  localStorage.setItem('ideas', JSON.stringify(ideas))
}

const deleteIdea = (e) => {
  let id = e.target.closest('article').getAttribute('data-id')
  ideas = ideas.filter(idea => idea.id !== parseInt(id))
  updateLocalStorage();
} 

cardContainer.addEventListener('click', handleCardContainerClicks)


const clearFormInputs = () => {
  const inputs = [titleInput, bodyInput, qualityInput]
  inputs.forEach(input => input.value = '')
}

const saveFunction = (e) => {
  e.preventDefault();
  const newIdea = new Idea(titleInput.value, bodyInput.value)
  ideas.push(newIdea);
  updateLocalStorage(ideas)
  clearFormInputs();
  cardContainer.insertAdjacentHTML('afterbegin', newIdea.returnHTML())
}

const pageLoadHandler = () => {
  instantiateIdeas();
  populateIdeas();
}

window.addEventListener('load', pageLoadHandler);

const instantiateIdeas = () => {
  if (localStorage.getItem('ideas') === null || localStorage.getItem('ideas') === undefined){
    return;
  } else {
    let storedIdeas = JSON.parse(localStorage.getItem('ideas'))
    ideas = storedIdeas.map(idea => new Idea(idea.title, idea.body, idea.starred, idea.quality))
  }
  }


const populateIdeas = () => {
  let ideasElements = ideas.reverse().reduce((acc, idea) => {
    acc += idea.returnHTML();
    return acc
  }, ``)
  cardContainer.insertAdjacentHTML('afterbegin', ideasElements)
}

saveNewIdeaButton.addEventListener('click', saveFunction)



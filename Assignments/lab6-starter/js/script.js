"use strict";

const MAX_LENGTH = 200;

const authors = ['Tyrone', 'Ava', 'Elijah', 'Lucas', 'Ebony', 'Keisha', 'Jemila', 'Daniel'];

const articles = [
  {
    title: 'CSS Selectors',
    author: 'Tyrone',
    date: new Date(2023, 1, 20),
    content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Id, dolore? Eveniet numquam quam qui quae laboriosam maxime deleniti aperiam quasi culpa veniam, voluptatibus molestias soluta error ratione assumenda sunt. Sapiente doloribus, nulla a tempora assumenda nostrum est enim corporis fugit quasi ipsam eveniet distinctio impedit dolorum eum dolor. Distinctio, reiciendis!'
  },

  {
    title: 'Cascading',
    author: 'Jemila',
    date: new Date(2023, 2, 1),
    content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis, voluptatum iste? Nisi exercitationem, consectetur unde ab placeat nemo deserunt consequuntur.'
  },

  {
    title: 'CSS Grid',
    author: 'Keisha',
    date: new Date(2023, 2, 12),
    content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur laboriosam aliquam debitis dolores dolorem corporis ipsum itaque culpa, et eaque? Aliquam, est eveniet voluptatem nemo doloremque esse odit dolorum dicta consectetur ipsam corrupti perspiciatis voluptas cupiditate et sapiente. Eligendi modi fugiat pariatur facere, molestiae nihil accusamus animi a impedit laboriosam tempora, eum in iure tenetur fugit praesentium consectetur mollitia ut obcaecati delectus ipsa dolores commodi? Rerum, temporibus velit eum iste praesentium modi amet molestiae illum enim quos pariatur quasi vero quidem, minus placeat assumenda recusandae fugit sunt voluptatem est neque qui! Ut optio quis accusamus placeat ipsa laboriosam laborum debitis.'
  }
];

articles.forEach(article=>{
  addEntry(article);
});


/**
 * This function creates a DOM elment with information from the article object, and adds the element into the DOM.
 * @param {object} article - an article
 */
// Part 1
function addEntry(article) {
  // Create the article container.
    const articleElement = document.createElement('article');
    articleElement.classList.add('article-container');

    // Add the article to the wrapper.
    const articlesWrapper = document.querySelector('.articles-wrapper');
    articlesWrapper.appendChild(articleElement);

    // Create the delete button.
    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'X';
    deleteButton.classList.add('delete-btn');
    articleElement.appendChild(deleteButton);

    // Create the article header.
    const header = document.createElement('div');
    header.classList.add('article-header');

    // Find the author's avatar.
    const authorIndex = authors.indexOf(article.author);
    const avatar = document.createElement('img');

    avatar.classList.add('avatar');
    avatar.src = authorIndex === -1
        ? 'images/default.jpeg'
        : `images/avatar${authorIndex}.png`;
    avatar.alt = 'avatar picture';

    // Create the author and date text.
    const authorDate = document.createElement('div');
    authorDate.textContent =
        `${article.author} · ${article.date.toDateString()}`;

    header.appendChild(avatar);
    header.appendChild(authorDate);
    articleElement.appendChild(header);

    // Create the article body.
    const body = document.createElement('div');
    body.classList.add('article-body');

    const title = document.createElement('h3');
    title.textContent = article.title;

    const paragraph = document.createElement('p');

    // Display short content without truncation.
    if (article.content.length <= MAX_LENGTH) {
        paragraph.textContent = article.content;
        body.appendChild(title);
        body.appendChild(paragraph);
    } else {
        // Display only the first part of long content.
        const firstPart = article.content.substring(0, MAX_LENGTH);
        const remainingPart = article.content.substring(MAX_LENGTH);

        paragraph.textContent = firstPart;

        const ellipsis = document.createElement('span');
        ellipsis.textContent = '...';

        const hiddenText = document.createElement('span');
        hiddenText.classList.add('hidden');
        hiddenText.textContent = remainingPart;

        paragraph.appendChild(ellipsis);
        paragraph.appendChild(hiddenText);

        const readMoreButton = document.createElement('button');
        readMoreButton.classList.add('btn');
        readMoreButton.textContent = 'Read More';

        body.appendChild(title);
        body.appendChild(paragraph);
        body.appendChild(readMoreButton);
    }

    // Append the article body.
    articleElement.appendChild(body);
}


// Part 2
const form = document.querySelector('form');

form.addEventListener('submit', function (event) {
    // Prevent the browser from submitting the form to a server.
    event.preventDefault();

    // Validate the form.
    if (!form.reportValidity()) {
        return;
    }

    // Get the form values.
    const titleInput = document.querySelector('#title');
    const authorInput = document.querySelector('#author');
    const contentInput = document.querySelector('#content');

    const title = titleInput.value;
    const author = authorInput.value;
    const content = contentInput.value;

    // Create the new article.
    const date = new Date();
    const article = { title, author, content, date };

    // Store the article and add it to the page.
    articles.push(article);
    addEntry(article);

    // Clear the form.
    form.reset();
});

// Part 3
const articlesWrapper = document.querySelector('.articles-wrapper');

articlesWrapper.addEventListener('click', function (event) {
    // Respond only when a delete button is clicked.
    if (event.target.classList.contains('delete-btn')) {
        // Get the article containing the clicked button.
        const articleElement = event.target.parentElement;

        // Get the article title.
        const title = articleElement.querySelector('h3').textContent;

        // Remove the article from the page.
        articleElement.remove();

        // Find and remove the article from the array.
        const articleIndex = articles.findIndex(
            article => article.title === title
        );

        if (articleIndex !== -1) {
            articles.splice(articleIndex, 1);
        }
    }
});


// Part 4
articlesWrapper.addEventListener('click', function (event) {
    // Respond only when a Read More / Read Less button is clicked.
    if (event.target.classList.contains('btn')) {
        // Find the paragraph immediately before the button.
        const paragraph = event.target.previousElementSibling;

        // Get the spans containing the ellipsis and hidden text.
        const spans = paragraph.querySelectorAll('span');

        // Toggle the hidden class on both spans.
        spans.forEach(span => {
            span.classList.toggle('hidden');
        });

        // Update the button label.
        if (event.target.textContent === 'Read More') {
            event.target.textContent = 'Read Less';
        } else {
            event.target.textContent = 'Read More';
        }
    }
});
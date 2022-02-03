import axios from 'axios';
import commentCounter from './commentCounter.js';

const getComment = async (url) => {
  let result = '';
  const btn = document.querySelector('.comment_btn').parentNode;
  const commentSection = document.querySelector('.comments-sect');
  let response ;
 
     response = await axios.get(`${url}`);
    
    result = response.data;
    displayComments(result, commentSection);
    
  

  
  const header = document.querySelector('.comment-header');
  header.textContent = `Comments (${commentCounter(btn.id, result)})`;

  return result;
};

const displayComments = (arr, container) => {
  for (let comment = 0; comment < arr.length; comment += 1) {
    container.innerHTML += `
      <li class='comment-list'>
      <span>${arr[comment].creation_date}</span> 
      <span>${arr[comment].username}: </span>
      <span>${arr[comment].comment}</span>
      </li> 
      `;
  }
};

const isResultEmpty = (container) => {
  container.innerHTML += '<li>No comment found.</li>';
};

// export const refreshComments = () => displayComments();
export default getComment;

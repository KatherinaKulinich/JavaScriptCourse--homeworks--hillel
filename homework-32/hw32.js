/**
 * Використовуючи API https://jsonplaceholder.typicode.com/ зробити пошук поста за ід.
 * 
    Ід має бути введений в інпут (валідація: ід від 1 до 100) Якщо знайдено пост, 
    то вивести на сторінку блок з постом і зробити кнопку для отримання комкоментарів до посту.

    Зробити завдання використовуючи проміси, перехопити помилки.
 */

const form = document.querySelector('#getPost');

const buttonGetPost = document.querySelector('#submitId');
const buttonGetComment = document.querySelector('#getComment');

const postBox = document.querySelector('.postBox');
const postImage = document.querySelector('#postImage');
const postName = document.querySelector('#postName');
const postDescription = document.querySelector('#postDescription');

const commentsList = document.querySelector('.comments');
const message = document.querySelector('#error');




form.addEventListener('submit', (event) => {
    event.preventDefault();
    
    const value = form.elements['enterId'].value;
    const userValue = value.replaceAll(/\b0+/g, '').replaceAll(/\D/g, '');

    if (userValue < 1 || userValue > 100) {
        isError('invalid value. try again!');
        return;
    }
    message.innerHTML = 'loading...';

    
    fetch(`https://jsonplaceholder.typicode.com/posts/${userValue}`)
    .then((response) => response.json())
    .then((json) => {
        postBox.classList.remove('hidden');
        postName.innerHTML = `${json.title}`;
        postDescription.innerHTML = `${json.body}`;
        message.innerHTML = '';
    })
    .catch((error) => {
        isError('Oops, something went wrong. Try later');
    })
    
    .then(() => fetch(`https://jsonplaceholder.typicode.com/photos/${userValue}`))
    .then((response) => response.json())
    .then((json) => {
        postImage.setAttribute('src', `${json.url}`)
    })
    .catch((error) => {
        isError('error: picture not found');
    })
})



buttonGetComment.addEventListener('click', () => {

    message.innerHTML = 'loading...';
    const userValue = form.elements['enterId'].value;
    
    fetch(`https://jsonplaceholder.typicode.com/comments`)
    .then((response) => response.json())
    .then((json) => {

        for (let obj of json) {
            
            if (obj.postId === Number(userValue)) {
                
                commentsList.classList.remove('hidden');

                const commentName = document.createElement('p');
                const commentMail = document.createElement('p');
                const commentText = document.createElement('p');
                const userComment = document.createElement('div');
                userComment.classList.add('user-comment');

                commentName.innerHTML = `<b> Name: </b> ${obj.name}`;
                commentMail.innerHTML = `<b> Email: </b> ${obj.email}`;
                commentText.innerHTML = `<b> Comment: </b> ${obj.body}`;

                userComment.append(commentName, commentMail, commentText);
                commentsList.append(userComment);
                message.innerHTML = '';
            }
        } 
    })

    .catch((error) => {
        isError('error: comments not found');
    })
})



const input = form.elements['enterId'];
input.addEventListener('focus', () => {

    form.elements['enterId'].value = '';
    postImage.setAttribute('src', '');
    postBox.classList.add('hidden');
    commentsList.replaceChildren();
    commentsList.classList.add('hidden');
})


function isError(text) {
    message.innerHTML = text;
    setTimeout(() => {
        message.innerHTML = '';
    }, 3000);
}



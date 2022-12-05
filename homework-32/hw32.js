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

        let error = new Error('invalid value. try again!');
        message.innerHTML = `${error.message}`
        setTimeout(() => {
            message.innerHTML = '';
        }, 3000);
        return;
    }
    message.innerHTML = 'loading...';

    
    fetch(`https://jsonplaceholder.typicode.com/posts/${userValue}`)

    .then((Response) => Response.json())
    .then((json) => {
        postBox.classList.remove('hidden');
        postName.innerHTML = `${json.title}`;
        postDescription.innerHTML = `${json.body}`;
        message.innerHTML = '';
    })
    .catch((error) => {
        error = new Error('Oops, something went wrong. Try later');

        message.innerHTML = `${error.message}`
        setTimeout(() => {
            message.innerHTML = '';
        }, 3000);
    })
    

    .then(() => fetch(`https://jsonplaceholder.typicode.com/photos/${userValue}`))
    .then((Response) => Response.json())
    .then((json) => {
        postImage.setAttribute('src', `${json.url}`)
    })
    .catch((error) => {
        error = new Error('error: picture not found');

        message.innerHTML = `${error.message}`
        setTimeout(() => {
            message.innerHTML = '';
        }, 3000);
    })
})



buttonGetComment.addEventListener('click', () => {

    message.innerHTML = 'loading...';
    const userValue = form.elements['enterId'].value;
    
    fetch(`https://jsonplaceholder.typicode.com/comments`)

    .then((Response) => Response.json())
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
        error = new Error('error: comments not found');

        message.innerHTML = `${error.message}`
        setTimeout(() => {
            message.innerHTML = '';
        }, 3000);
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




//Написати функцію generateList(array), яка приймає масив із чисел та масивів чисел 
//і генерує список з елементів:

//Якщо за числом йде підмасив, додавати це число, потім крапку, 
//а потім поточний елемент підмасиву. 
//Ви можете розраховувати на коректність вхідних данинх - перед підмасивом обовʼязково має бути число.


const body = document.querySelector('body');
const container = document.createElement('div');
body.append(container);



let subArray = [];
function generateList(array) {

    const list = document.createElement('ul');

	for (let item = 0; item < array.length; item++) {

        if (Number(array[item])) {

            const li = document.createElement('li');
            li.textContent = `${subArray.join('')}${array[item]}`;
            list.append(li);     
        }

		if (Array.isArray(array[item])) { 

			subArray.push(`${array[item - 1]}. `);
            list.innerHTML = list.innerHTML + `${generateList(array[item]).outerHTML}`;
		}


		if (array[item] === array.at(-1)) { 

			subArray.splice(subArray.length - 1);
		}

    }

    return list;

}



let test1 = [1,2,3];
let test2 = [1,2,3, [4,5,6,7]];
let test3 = [1,2,[3,4,[5,6,7]]];
let test4 = [1,2, [3,4, [5,6], 7,8, [10,[20,21,23],11]], 5, 6];
let test5 = [1, 2, 3, 4, 5, [1, 2, 3], 6, 7, [1,2], 8, 9, [1, 2, 3, [1, 2, 3, 4, 5, [1, 2, 3], 6, 7], 4, 5], 10, 11, [1, 2, 3]];

container.appendChild(generateList(test5));



// //-----------------------працює без номерації----------------------------


// const body = document.querySelector('body');
// const container = document.createElement('div');
// body.append(container);

// function generateList(array) {

//     const ul = document.createElement('ul');
    
//     array.map((item) => {

//         if (Number(item))  {

//             const li = document.createElement('li');
//             li.textContent = `${item}`;
//             ul.append(li);
//         }

//         if (Array.isArray(item)) {

//             const li = document.createElement('li');
//             ul.append(li);

//             li.append(generateList(item));
//         }
           
//     })

//     return ul;
// }


// let test1 = [1,2,3];
// let test2 = [1,2,3, [4,5,6,7]];
// let test3 = [1,2,[3,4,[5,6,7]]];
// let test4 = [1,2, [3,4, [5,6], 7,8, [10,[20,21,23],11]], 5, 6];

// container.append(generateList(test4));
// //----------------------------------------------------------------


//------------------працююча НЕ рекурсія  тільки з цією вкладенностю-------------------------------------------------------------

// function generateList(array) {
    
//     const body = document.querySelector('body');
//     const ul = document.createElement('ul');
//     body.append(ul);


//     array.map((item) => {

//         if (Number.isInteger(item)) {
    
//             const li = document.createElement('li');
//             li.textContent = `${item}`;
//             ul.append(li);
//             return;
//         }
    
//             if (Array.isArray(item)) {
        
//                 let subArray = item;
//                 const subUl = document.createElement('ul');
//                 ul.lastElementChild.after(subUl);
    
    
//                 subArray.map((subItem) => {
        
//                     if (Number.isInteger(subItem)) {
        
//                         const subLi = document.createElement('li');
//                         let prev = subUl.previousSibling.lastChild.textContent;
//                         subLi.textContent = `${prev}.${subItem}`;
//                         subUl.append(subLi);
//                         return;
    
//                     }
        
//                     if (Array.isArray(subItem)) {

//                         const subSubUl = document.createElement('ul');
//                         subUl.lastElementChild.after(subSubUl);
//                         let subPrev = subSubUl.previousElementSibling.lastChild.textContent;
    
//                         subItem.map((elem) => {
        
//                             const subSubLi = document.createElement('li');
//                             subSubLi.textContent = `${subPrev}.${elem}`;
//                             subSubUl.append(subSubLi);
//                         })
        
//                     }
            
//                 })
                   
//             }
//      })               
// }
                                
// generateList([1,2,3, [2,3,4], 5, 6, 7, [8,9, [10, 11, 12]]]);
//====================================================












//------------------------------------дві функ---------------------------


// const container = document.createElement('div');
// const body = document.querySelector('body');
// body.append(container);


// const ul = document.createElement('ul');
// container.append(ul);

// function generateList(array) {
    
    
    //     array.map((item) => {

        //         if (Number(item)) {
            
            //             const li = document.createElement('li');
            //             li.textContent = `${item}`;
            //             ul.appendChild(li);
            //             return;
            
            //         }
            
            
            //         if (Array.isArray(item)) {
                //             return getArray(item);
                
                //         }
                
                //         return generateList(item);
                
                //     })
                
                //     if (array.indexOf(length) === -1) return;
                
                // }
                
                
                // function getArray(subArray) {
                    
                    //     const subUl = document.createElement('ul');
                    
                    //     // const prev = ul.previousElementSibling;
                    //     // console.warn(prev);
                    //     // prev.append(subUl);
                    //     ul.lastElementChild.after(subUl);

                    
                    //     subArray.map((subItem) => {
                        
                        //         if (Number.isInteger(subItem)) {
                            
                            //             const subLi = document.createElement('li');
                            //             let prev = subUl.previousSibling.lastChild.textContent;
                            //             subLi.textContent = `${prev}.${subItem}`;
                            //             subUl.append(subLi);
                            //             return;
                            
                            //         }
                            
                            //         if (Array.isArray(subItem)) {
                                
//             return getArray(subItem);
//         }
//     })
// }       



// let test = [1, 2, 3, [4,5,6, [10,11,12, 7,8, [20,22]]]]
// generateList(test);


// generateList([1,2,3, [2, 3, 4], 5, 6, 7, [8,9, [10, 11, 12]]]);


//==================================================================




//Вивести на сторінку таблицю 10 × 10,
// заповнену числами від 1 до 100 



const container = document.querySelector('.container');
const table = document.createElement('table');
container.append(table);


for (let k = 0; k < 10; k++) {
    
    const tr = document.createElement('tr');;
    table.append(tr);
    
    for (let i = 1; i <= 10; i++)  {
        
        const td = document.createElement('td'); 
        td.textContent = `${k * 10 + i}`;
        tr.append(td);
    }  
}


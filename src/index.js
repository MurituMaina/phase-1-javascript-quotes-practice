window.addEventListener('DOMContentLoaded', quotes)
// http://localhost:3000/quotes?_embed=likes
const quoteList = document.getElementById('quote-list');

function quotes(){
    fetch('http://localhost:3000/quotes?_embed=likes')
    .then((response)=> response.json())
    .then((data)=>{
        for (let q in data){
const quote = document.createElement("li")
quote.classList = "quote-card";
quote.innerHTML= `<blockquote class ='blockquote'>
<p class='mb-0'>${data[q].quote}</p>
<footer class="blockquote">${data[q].author}</footer>
<br/>
<button class='btn-success'>Likes:<span>0</span></button>
<button class='btn-danger'>Delete</button>
</blockquote>`;
quoteList.append(quote);        
    // console.log(data[q].author)
    }
})
}

const quoteForm = document.getElementById('new-quote-form');

quoteForm.addEventListener('submit', addQuote);

function addQuote(e){
    e.preventDefault();
const newQuote = document.getElementById("new-quote").value;
console.log(newQuote)
const author = document.getElementById('author').value;
console.log(author)
const quote = document.createElement("li")
quote.classList = "quote-card";
quote.innerHTML= `<blockquote class ='blockquote'>
<p class='mb-0'>${newQuote}</p>
<footer class="blockquote">${author}</footer>
<br/>
<button class='btn-success'>Likes:<span>0</span></button>
<button class='btn-danger'>Delete</button>
</blockquote>`
quoteList.append(quote);

quoteForm.reset();
}
//identify the classv location of the li item
const deleter = document.getElementsByClassName('btn-danger')
deleter.addEventListener('click',()=>{
const card = document.getElementsByClassName('quote-card')
 for(let c of card) { console.log(c); card[c].remove();}
})
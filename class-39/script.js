const getQuotes = async () => {
  try {
    const response = await fetch(`https://api.imgflip.com/get_memes`);

    const result = await response.json();

    return result.data.memes;
  } catch (error) {
    console.log(error);
  }
};

const contentDiv = document.getElementById("content");
// const pageInput = document.getElementById("page");

const createCard = (data) => {
  return `<div style="border: 1px solid black; margin: 10px; width: 500px">
  <p style="text-align: center">${data.name}</p>
  <img src="${data.url}" alt="" width="100%" />
</div>`;
};

getQuotes().then((result) => {
  result.forEach((data) => {
    console.log(contentDiv.innerHTML);
    contentDiv.innerHTML = contentDiv.innerHTML + createCard(data);
  });
});

// const createCardNode = (author, quote) => {
//   const div = document.createElement("div");
//   div.style = ` width: 400px;
//        min-height: 100px;
//        border: 1px solid black;
//        margin: 10px;
//        padding: 20px;
//      `;

//   const p = document.createElement("p");
//   p.textContent = quote;

//   div.appendChild(p);

//   const p2 = document.createElement("p");
//   p2.textContent = `By: ${author}`;

//   div.appendChild(p2);

//   return div;
// };

// getQuotes().then((result) => {
//   result.forEach((quote) => {
//     const newCard = createCardNode(quote.author, quote.content);
//     contentDiv.appendChild(newCard);
//   });
// });

// const clickable = () => {
//   getQuotes(pageInput.value).then((result) => {
//     contentDiv.innerHTML = "";
//     result.forEach((quote) => {
//       const newCard = createCardNode(quote.author, quote.content);
//       contentDiv.appendChild(newCard);
//     });
//   });
// };

// const button = document.getElementById("click");

// button.addEventListener("click", clickable);

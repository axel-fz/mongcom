const gallery = document.querySelector(".gallery");
const searchInput = document.getElementById("searchInput");

const modal = document.getElementById("modal");
const modalImg = document.getElementById("modalImg");
const modalText = document.getElementById("modalText");
const closeBtn = document.querySelector(".close");

const mainContent = document.getElementById("main-content");

const images = [
    {
        src:'asset/1(crreate, list DB).png',
        description: 'creating and listing databases'
    },
    {
        src:'asset/2(drop DB).png',
        description: 'deleting databases with the drop'
    },
    {
        src:'asset/3(create, list collection).png',
        description: 'creating and listing a collection found in a DB'
    },
    {
        src:'asset/4(drop collection).png',
        description: 'deleting a collection with the drop'
    },
    {
        src:'asset/5(inserting).png',
        description: 'insertion commands'
    },
    {
        src:'asset/6(insertOne).png',
        description: 'inserting One document in a collection'
    },
    {
        src:'asset/7(insertMany).png',
        description: 'inserting Many documents in a collection as array of objects'
    },
    {
        src:'asset/8(view, count, documents).png',
        description: 'listing/viewing and counting documents in a collection'
    },
    {
        src:'asset/9(findOne).png',
        description: 'finding/search One document in a collection'
    },
    {
        src:'asset/10(search, read operation).png',
        description: 'reading operaions'
    },
    {
        src:'asset/11(find).png',
        description: 'reading/finding operaions with criteria'
    },
    {
        src:'asset/12(update and replace ops).png',
        description: 'updates commands'
    },
    {
        src:'asset/13(updateOne syntax).png',
        description: 'update One document matching the filter'
    },
    {
        src:'asset/14(updateMany syntax).png',
        description: 'update All document matching the filter'
    },
    {
        src:'asset/15(update examples).png',
        description: 'practical case/ example of update'
    },
    {
        src:'asset/16(replaceOne synatax).png',
        description: 'replace One document matching the filter'
    },
    {
        src:'asset/18(delete one syntax, ex).png',
        description: 'deleting the first document that matches the filter'
    },
    {
        src:'asset/19(deleteMany plus all delete types).png',
        description: 'all the delete commands summarised practical case/ example'
    },
    {
        src:'asset/20(bulkwrite commands).png',
        description: 'performing various commands at once with the bulkwrite'
    },
    {
        src:'asset/21(example bulkrite).png',
        description: 'practical case/example of bulkwrite'
    },
    {
        src:'asset/22(accepted bulk write commands).png',
        description: 'accepted bulk write commands'
    },
    {
        src:'asset/23(upsert command).png',
        description: 'upsert command (updating and inserting at once)'
    },
    {
        src:'asset/24(upsert illustration).png',
        description: 'upsert command (updating and inserting at once) practical case/example'
    },
    {
        src:'asset/25(nested document in array).png',
        description: 'nested documents in array of documents'
    },
    {
        src:'asset/26(example of nested documents).png',
        description: 'nested documents in array of documents plus search/ find'
    },
    {
        src:'asset/27(reading nested documents).png',
        description: ' searching/ finding nested documents'
    },
]


// DISPLAY CARDS
function displayCards(data){
    gallery.innerHTML = "";

    if(data.length === 0){
        gallery.innerHTML = "<p style='color:white'>No results found</p>";
        return;
    }

    data.forEach((img)=>{
        const card = document.createElement("div");
        card.classList.add("card");

        card.innerHTML = `
            <img src="${img.src}" alt="">
            <h2>${img.description}</h2>
        `;

        // OPEN MODAL
        card.addEventListener("click", () => {
            modal.classList.add("show");
            modalImg.src = img.src;
            modalText.textContent = img.description;

            mainContent.classList.add("blur"); // ✅ FIXED
        });

        gallery.appendChild(card);
    });
}

// INITIAL LOAD
displayCards(images);

// SEARCH
searchInput.addEventListener("input", () => {
    const value = searchInput.value.toLowerCase();

    const filtered = images.filter(item =>
        item.description.toLowerCase().includes(value)
    );

    displayCards(filtered);
});

// CLOSE MODAL (X)
closeBtn.addEventListener("click", () => {
    modal.classList.remove("show");
    mainContent.classList.remove("blur");
});

// CLOSE MODAL (CLICK OUTSIDE)
modal.addEventListener("click", (e) => {
    if(e.target === modal){
        modal.classList.remove("show");
        mainContent.classList.remove("blur");
    }
});
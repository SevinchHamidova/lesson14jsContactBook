const elForm = document.querySelector(".js-contact-form");
const elInpName = document.querySelector(".js-inp-name");
const elSelect = document.querySelector(".js-select");
const elInpPhone = document.querySelector(".js-inp-phone");
const elBtn = document.querySelector(".js-btn");

const list = document.querySelector("#list");
const newListTemp = document.querySelector(".js-list-template").content;
const elIcon = document.querySelector(".fa");

elBtn.addEventListener("click", function (event) {
    event.preventDefault();
    if (!elInpName.value.trim() || !elSelect.value.trim() || !elInpPhone.value.trim()) {
        alert("Place the data!");
        return;
    }


    const existingPhone = Array.from(document.querySelectorAll(".phone")).find(element => element.textContent.trim() === elInpPhone.value.trim());

    if (existingPhone) {
        alert("This number was previously added!");
        return;
    }

    const listTemplateClone = newListTemp.cloneNode(true);

    listTemplateClone.querySelector(".people-name").textContent = elInpName.value;
    listTemplateClone.querySelector(".relationship").textContent = elSelect.value;
    listTemplateClone.querySelector(".phone").textContent = elInpPhone.value;

    list.appendChild(listTemplateClone);
    elInpName.value = " ";

    elSelect.value = " ";
    elInpPhone.value = "";
});

// list.addEventListener("click", function(evt) {
//     evt.preventDefault();
//     const target = evt.target;
//     if (target.classList.contains(".fa")) {
//       const listItem = target.parentNode;
//       if (listItem && listItem.classList.contains(".list-item")) {
//         listItem.remove();
//       }
//     }
// })


list.addEventListener("click", function (evt) {
    const target = evt.target;
    if (target.classList.contains("fa")) {
        const listItem = target.closest(".list-item");
        if (listItem) {
            setTimeout(() => {
                listItem.remove();
            }, 200);
        }
    }
});


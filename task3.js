let messages = [];
const input = document.getElementById("messageInput");
const addBtn = document.getElementById("addBtn");
const clearBtn = document.getElementById("clearBtn");
const count = document.getElementById("count");
const status = document.getElementById("status");
const messageBox = document.getElementById("messages");
input.addEventListener("input", function () {
    count.textContent = "Characters: " + input.value.length;
});
function displayMessages() {
    messageBox.innerHTML = "";
    messages.forEach(function (msg) {
        let div = document.createElement("div");
        div.className = "message";
        div.textContent = msg;
        messageBox.appendChild(div);
    });
}
addBtn.addEventListener("click", function () {
    let promise = new Promise(function (resolve, reject) {
        if (input.value.trim().length >= 3) {
            resolve(input.value);
        } else {
            reject("Message must contain at least 3 characters");
        }
    });
    promise.then(function (msg) {
        messages.push(msg);
        status.textContent = "Message Added Successfully";
        displayMessages();
        let currentMessage = msg;
        setTimeout(function () {
            let index = messages.indexOf(currentMessage);
            if (index !== -1) {
                messages.splice(index, 1);
                displayMessages();
                status.textContent = "Message Expired";
            }
        }, 10000);
        input.value = "";
        count.textContent = "Characters: 0";
    }).catch(function (error) {
        status.textContent = error;
    });
});
clearBtn.addEventListener("click", function () {
    messages = [];
    messageBox.innerHTML = "";
    status.textContent = "All Messages Cleared";
});
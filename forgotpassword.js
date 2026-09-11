const forgotForm = document.getElementById("forgotForm");
const forgotDesc = document.getElementById("forgotDesc");
const forgotSuccess = document.getElementById("forgotSuccess");

forgotForm.addEventListener("submit", (event) => {
    event.preventDefault();

    forgotForm.hidden = true;
    forgotDesc.hidden = true;
    forgotSuccess.hidden = false;
});

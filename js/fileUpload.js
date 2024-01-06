const fileUploads = document.querySelectorAll(".upload__group");

fileUploads?.forEach(fileUpload => {
    const inputElement = fileUpload.querySelector("input[type='file']");

    fileUpload.addEventListener("keypress", event => {
        const key = event.key || event.keyCode;

        if (key === " " || key === "Enter" || key === 13) {
            event.preventDefault();
            inputElement.click();
        }
    });
});

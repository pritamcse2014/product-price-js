function getProductInput(fieldId)
{
    const inputField = document.getElementById(fieldId);
    const inputAmount = inputField.innerText;
    return inputAmount;
}

function getProductValue(fieldId, fieldAmount)
{
    const inputField = document.getElementById(fieldId);
    inputField.innerText = parseInt(fieldAmount);
}

document.getElementById("memory").addEventListener("click", function()
{
    getProductInput("extra-memory-cost");
    getProductValue("extra-memory-cost", 0);
});

document.getElementById("extra-memory").addEventListener("click", function()
{
    getProductInput("extra-memory-cost");
    getProductValue("extra-memory-cost", 128);
});

document.getElementById("storage").addEventListener("click", function()
{
    getProductInput("extra-storage-cost");
    getProductValue("extra-storage-cost", 0);
});

document.getElementById("extra-one-storage").addEventListener("click", function()
{
    getProductInput("extra-storage-cost");
    getProductValue("extra-storage-cost", 128);
});

document.getElementById("extra-two-storage").addEventListener("click", function()
{
    getProductInput("extra-storage-cost");
    getProductValue("extra-storage-cost", 256);
});

document.getElementById("prime-delivery").addEventListener("click", function()
{
    getProductInput("extra-delivery-charge");
    getProductValue("extra-delivery-charge", 0);
});

document.getElementById("delivery-charge").addEventListener("click", function()
{
    getProductInput("extra-delivery-charge");
    getProductValue("extra-delivery-charge", 20);
});
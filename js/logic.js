
document.getElementById('add-btn').addEventListener('click', function () {
    var itemValue = document.getElementById('item').value;
    var output = document.getElementsByTagName('li');
    output.textContent = itemValue;
    
});


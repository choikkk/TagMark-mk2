document.getElementById('openModalBtn').onclick = function() {
    document.getElementById('myModal').style.display = 'block';
}

document.getElementsByClassName('close')[0].onclick = function() {
    document.getElementById('myModal').style.display = 'none';
}

document.getElementById('cancelBtn').onclick = function() {
    document.getElementById('myModal').style.display = 'none';
}
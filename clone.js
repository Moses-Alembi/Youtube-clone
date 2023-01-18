var icon = document.getElementById('icon');
localStorage.setItem('theme',' light');
icon.onclick = function(){
    document.body.classList.toggle('dark-theme');
    if(document.body.classList.contains('dark-theme')){
        icon.src = 'images/sun.png';
        localStorage.setItem('theme',' dark');
    }else{
        icon.src = 'images/moon.png';
        localStorage.setItem('theme',' light');
    }
}
document.getElementById('btn-update-title').addEventListener('click',function(){
    const title = document.getElementById('title-text');
    console.log(title)
    title.innerText = "text updated";
})
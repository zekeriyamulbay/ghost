function convertToSlug(Text) {
    return Text.toLowerCase()
        .replace(/ /g, '-')
        .replace(/[^\w-]+/g, '');
}
document.querySelectorAll('h2').forEach(el => el.id = convertToSlug(el.textContent));

function addSectionList(el) {
    if (el.innerHTML.length != 0)
        document.getElementsByClassName("section-list")[0].innerHTML += ('<li class="section-list-item" style="background-color: ' + el.parentElement.parentElement.parentElement.style.backgroundColor + '"><a href="#' + el.id + '"><img class="section-img" src="' + el.parentElement.parentElement.nextElementSibling.children[1].firstElementChild.src + '" width="200" height="200" decoding="async" loading="lazy" data-aspect-ratio="1"></img></a><div class="section-text"><a href="#' + el.id + '" style="color:' + el.parentElement.parentElement.children[0].children[0].style.color + '">' + el.parentElement.parentElement.children[0].children[0].innerText + '</a></div><p class="section-title"><a href="#' + el.id + '" style="color:' + el.style.color + '">' + el.textContent + '</a></p></li>');
}
window.addEventListener('load', function() {
    document.querySelectorAll('.single-content h2').forEach(el => addSectionList(el));
})

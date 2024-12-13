
let modeElement = document.getElementById('mode');
let dialogElement = document.querySelector('.floating-window');
let closeBtn = document.querySelector('.close-btn');

modeElement.addEventListener('click', function() {
    dialogElement.style.display= "block";
});

closeBtn.addEventListener('click', function() {
    dialogElement.style.display= "none";
});



// // 创建一个新的 <style> 标签，并为它添加唯一的 id
// let style = document.createElement('style');
// style.id = 'christmas-cupcake-tile-style';  // 添加一个标识用的 id
// style.innerHTML = `
//     .tile.tile-64 .tile-inner {
//         background-image: url(/path/to/your/new-image.webp) !important;
//     }
// `;
//
// // 将 <style> 标签添加到 <head> 中
// document.head.appendChild(style);
//
//
//
// // 根据 id 查找并移除 <style> 标签
// let styleElement = document.getElementById('custom-tile-style');
// if (styleElement) {
//     styleElement.remove();  // 移除 <style> 标签
// }

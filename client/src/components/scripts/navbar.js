// $(function navbarCollapse() {
//     // Sidebar toggle behavior
//     $('#sidebarCollapse').on('click', function () {
//         $('#sidebar, #content').toggleClass('active');
//     });
// });
function navbarCollapse() {
    let toggle = document.querySelector('#sidebarCollapse');
    toggle.classList.add('active');
}


export default navbarCollapse;
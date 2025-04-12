const switchBtn = document.getElementById('switchBtn')
const Toggle = document.getElementById('Toggle')
const Dark = document.getElementById('Dark')
const Light = document.getElementById('Light')
const DarkI = document.getElementById('DarkI')
const LightI = document.getElementById('LightI')
const body = document.querySelector('body')
const menuButton = document.getElementById('MenuButton')
const navMenu = document.getElementById('navMenu')


function Switch () {
    if(switchBtn.classList.contains('active')){
        switchBtn.classList.remove('active')
        switchBtn.classList.add('close')
    }else {
        switchBtn.classList.remove('close')
        switchBtn.classList.add('active') 
    }
}

function Switched () {
    if(Dark.style.display !== 'block'){
        Dark.style.display = 'block';
        Light.style.display = 'none';
    }else{
        Dark.style.display = 'none';
        Light.style.display = 'block'; 
    }

    if(DarkI.style.display !== 'block'){
        DarkI.style.display = 'block';
        LightI.style.display = 'none';
    }else{
        DarkI.style.display = 'none';
        LightI.style.display = 'block'; 
    }
}

function changeTheme () {
    if(body.classList.contains('active')){
        body.classList.remove('active')
        body.classList.add('close')
    }else {
        body.classList.remove('close')
        body.classList.add('active') 
    }
}

function HideMenu () {
    if(navMenu.classList.contains('hidden')){
        navMenu.classList.remove('hidden')
    }else {
        navMenu.classList.add('hidden') 
    }
}



menuButton.addEventListener('click', HideMenu)
Toggle.addEventListener('click', Switched)
Toggle.addEventListener('click', Switch)
Toggle.addEventListener('click', changeTheme)



    function changeStyle(element) {
        // Remove the active class from all items
        document.querySelectorAll('#navMenu .item').forEach(item => {
            item.classList.remove('active');
        });

        // Add the active class to the clicked item
        element.classList.add('active');
    }

    // Set the initial active item to 'Home'
    document.querySelector('#navMenu .item').classList.add('active');

    // Function to handle scroll and update active nav item
    function onScroll() {
        const sections = document.querySelectorAll('section');
        const navItems = document.querySelectorAll('#navMenu .item');

        let currentSection = '';

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            if (pageYOffset >= sectionTop - 50) {
                currentSection = section.getAttribute('id');
            }
        });

        navItems.forEach(item => {
            item.classList.remove('active');
            if (item.parentElement.getAttribute('href').substring(1) === currentSection) {
                item.classList.add('active');
            }
        });
    }

    window.addEventListener('scroll', onScroll);


  

document.addEventListener('DOMContentLoaded', () => {
    const body = document.body;
    const switchBtn = document.getElementById('switchBtn');
    const toggle = document.getElementById('Toggle');
    const lightI = document.getElementById('LightI');
    const darkI = document.getElementById('DarkI');
    const light = document.getElementById('Light');
    const dark = document.getElementById('Dark');

    // Vérifier le thème sauvegardé au chargement
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'light') {
        activateLightMode();
    }

    switchBtn.addEventListener('click', () => {
        if (body.classList.contains('active')) {
            // Passer au mode sombre
            body.classList.remove('active');
            switchBtn.classList.remove('active');
            toggle.classList.remove('switched');
            darkI.style.display = 'none';
            lightI.style.display = 'block';
            dark.style.display = 'none';
            light.style.display = 'block';
            localStorage.setItem('theme', 'dark');
        } else {
            // Passer au mode clair
            activateLightMode();
            localStorage.setItem('theme', 'light');
        }
    });

    function activateLightMode() {
        body.classList.add('active');
        switchBtn.classList.add('active');
        toggle.classList.add('switched');
        lightI.style.display = 'none';
        darkI.style.display = 'block';
        light.style.display = 'none';
        dark.style.display = 'block';
    }
});

// document.addEventListener('DOMContentLoaded', function() {
//     const navBtns = document.querySelectorAll('.nav-btn');
//     const tabs = document.querySelectorAll('.settings-tab');
    
//     function switchTab(tabId) {
//         tabs.forEach(tab => tab.classList.remove('active'));
//         navBtns.forEach(btn => btn.classList.remove('active'));
        
//         document.getElementById(`${tabId}-tab`).classList.add('active');
//         document.querySelector(`[data-tab="${tabId}"]`).classList.add('active');
//     }
    
//     navBtns.forEach(btn => {
//         btn.addEventListener('click', (event) => {
//             event.preventDefault();
//             switchTab(btn.dataset.tab);
//         });
//     });
let intro = document.querySelector('.close_block_toggle')
let logo = document.querySelector('.logo_close_block_toggle')


async function startanimate() {
    return new Promise((resolve) => {
        window.addEventListener('load', () => {



            setTimeout(() => {
                logo.classList.add('appear');
            }, 300);

            setTimeout(() => {
                intro.classList.add('hide');

                resolve();
            }, 900);
        });
    });
}

async function init() {
    await startanimate()
    return observe.observe(main_block)
}


init()

let navbar = document.querySelector('nav')

let observe = new IntersectionObserver(entries => {
    entries.forEach(item => {
        if (item.isIntersecting) {
            item.target.classList.add('visible')
        }


    })
})

document.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', function (e) {
        if (this.href.includes('google.com/maps')) {
            return;
        }
        e.preventDefault();
    });
});
let main_block = document.querySelector('.main_block')
let blocks = document.querySelectorAll('.blocks_services>div')

blocks.forEach(item => {
    observe.observe(item)
})

observe.observe(document.querySelector('.blocks_services'))
function handleScroll() {
    if (window.scrollY > 20) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
    lastScrollY = window.scrollY;
}

window.addEventListener('scroll', handleScroll);

handleScroll();

let buttons = document.querySelectorAll('.menu_buttons>a')

let services_menu = document.querySelector('.services_menu')
let rerct_services_menu = services_menu.getBoundingClientRect()

function createBlock(button) {
    let localMenu = button.nextElementSibling;
    if (!localMenu || !localMenu.classList.contains('services_menu')) return;

    let hideTimeout;


    button.addEventListener('mouseenter', () => {
        clearTimeout(hideTimeout);
        let rect = button.getBoundingClientRect();
        localMenu.style.top = (rect.bottom + 10) + 'px';
        localMenu.style.left = rect.left + 'px';
        localMenu.style.opacity = '1';
        localMenu.style.transform = 'translateY(15px)';
        localMenu.style.pointerEvents = 'auto';
    });



    button.addEventListener('mouseleave', () => {
        clearTimeout(hideTimeout);
        hideTimeout = setTimeout(() => {
            if (!localMenu.matches(':hover')) {
                localMenu.style.opacity = '0';
                localMenu.style.pointerEvents = 'none';
                localMenu.style.transform = 'translateY(-15px)';
            }
        }, 200);
    });

    localMenu.addEventListener('mouseenter', () => {
        clearTimeout(hideTimeout);
        localMenu.style.opacity = '1';
    });

    localMenu.addEventListener('mouseleave', () => {
        clearTimeout(hideTimeout);
        hideTimeout = setTimeout(() => {
            if (!button.matches(':hover')) {
                localMenu.style.opacity = '0';
                localMenu.style.pointerEvents = 'none';
                localMenu.style.transform = 'translateY(-15px)';
            }
        }, 150);
    });

}

let button_service = document.querySelector('.menu_buttons a:nth-child(1)')
let rect_button_service = button_service.getBoundingClientRect()


let button_ort = document.querySelector('.about_us_main')
let rect_button_ort = button_ort.getBoundingClientRect()


createBlock(button_service, rect_button_service)
createBlock(button_ort, rect_button_ort)


let menu_toggle = document.querySelector('.menu-toggle')
let sidebar_menu = document.querySelector('.sidebar_menu')

menu_toggle.addEventListener('click', () => {
    sidebar_menu.classList.toggle('active_menu_sidebar')
    document.body.classList.toggle('body_hide')
    menu_toggle.classList.toggle('active')
})

let localMenu = document.querySelectorAll('.menu_buttons_sd acc_sd')

let alla = document.querySelectorAll('.menu_buttons_sd >a')


alla.forEach(item => {
    item.addEventListener('click', () => {
        item.nextElementSibling.classList.toggle('active')
    })
})









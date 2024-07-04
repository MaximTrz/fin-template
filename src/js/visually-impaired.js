const bvi = document.querySelector('.bvi-open');
const visuallyImpaired = document.querySelectorAll('.visually-impaired');
let close = document.querySelector('[data-bvi="close"]');

if (bvi) {
    const elements = document.querySelectorAll('.js-visually-impaired');
        
    close = document.querySelector('[data-bvi="close"]');
    
    const closeHandler = () => {
        if (elements.length > 0) {
            elements.forEach(item => {
                item.classList.remove('--visually-impaired');
            });
        }
    };
    
    if (close) {        
        close.addEventListener('click', closeHandler);
        if (elements.length > 0) {
            elements.forEach(item => {
                item.classList.add('--visually-impaired');
            });
        }
    }

    const handler = () => {
        bvi.click();
    };

    visuallyImpaired.forEach(element => {
        element.addEventListener('click', (e) => {
            e.preventDefault();
            if (elements.length > 0) {
                elements.forEach(item => {
                    item.classList.add('--visually-impaired');
                });
            }

            handler();
            close = document.querySelector('[data-bvi="close"]');
            if (close) {        
                close.addEventListener('click', closeHandler);
            }
        });
    });
}

document.addEventListener('DOMContentLoaded', () => {
    
    // 1. Утилита для генерации декоративных точек (используется на about.html и index.html)
    function generateDots(containerId, count) {
        const container = document.getElementById(containerId);
        if (!container) return; // Прерываем выполнение, если контейнера нет на текущей странице
        
        for (let i = 0; i < count; i++) {
            const dot = document.createElement('div');
            dot.className = 'bg-primary rounded-circle';
            dot.style.width = '6px';
            dot.style.height = '6px';
            container.appendChild(dot);
        }
    }
    
    // Вызовы генерации точек
    generateDots('about-dots', 24);
    generateDots('hero-dots-1', 16);
    generateDots('hero-dots-2', 20);

    // 2. Закрытие мобильного меню при клике на ссылку
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', () => {
            const navbarCollapse = document.getElementById('navbarNav');
            if (navbarCollapse && navbarCollapse.classList.contains('show') && typeof bootstrap !== 'undefined') {
                bootstrap.Collapse.getInstance(navbarCollapse).hide();
            }
        });
    });

    // 3. Эффекты для ссылок в футере (смена цвета при наведении)
    const footerLinks = document.querySelectorAll('footer a');
    footerLinks.forEach(link => {
        link.addEventListener('mouseenter', () => link.style.color = 'white');
        link.addEventListener('mouseleave', () => link.style.color = '#cbd5e1');
    });

    // 4. Инициализация Яндекс Карты (только для contact.html)
    const mapContainer = document.getElementById('map');
    // Проверяем, есть ли контейнер для карты и загружен ли API Яндекса
    if (mapContainer && typeof ymaps !== 'undefined') {
        ymaps.ready(function () {
            var myMap = new ymaps.Map("map", {
                center: [47.2185, 38.9221], // Координаты г. Таганрог
                zoom: 16
            });

            var myPlacemark = new ymaps.Placemark([47.2185, 38.9221], {
                hintContent: 'English Hub',
                balloonContent: 'English Hub, ул. Ленина, 12'
            }, {
                preset: 'islands#blueEducationIcon'
            });

            myMap.geoObjects.add(myPlacemark);
        });
    }
});
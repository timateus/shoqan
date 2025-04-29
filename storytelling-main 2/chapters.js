    chapters: [
        {
            id: 'overview',
            alignment: 'center',
            title: 'Обзор маршрута',
            description: 'Экспедиция проложила маршрут через современный Казахстан, Кыргызстан и часть Китая.',
            location: { center: [80, 46], zoom: 4.5, pitch: 0, bearing: 0 },
            mapAnimation: 'easeTo',
            onChapterEnter: [ { layer: 'route-line', opacity: 1 } ],
            marker: false
        },
        {
            id: 'semey', alignment: 'left',
            title: 'Семей (Семипалатинск)',
            description: '18 апреля 1856 года начало пути из Семипалатинска по старому казачьему тракту.',
            location: { center: [80.2275, 50.4111], zoom: 7.5, pitch: 60, bearing: 20 },
            marker: { icon: 'shokan-icon', rotate: true },
            mapAnimation: 'easeTo'
        },
        {
            id: 'ayagoz', alignment: 'right',
            title: 'Аягоз', description: 'Протяжённая солонцеватая степь и казачьи пикеты.',
            location: { center: [80.4392, 47.9656], zoom: 7.5, pitch: 60, bearing: 45 },
            marker: { icon: 'shokan-icon' }, mapAnimation: 'easeTo'
        },
        {
            id: 'arkat', alignment: 'left',
            title: 'Сопка Аркат', description: 'Зубчатые синевы горного хребта Аркат.',
            location: { center: [80.95, 47.85], zoom: 8.5, pitch: 60, bearing: 60 },
            marker: { icon: 'shokan-icon' }, mapAnimation: 'easeTo'
        },
        {
            id: 'kozy-korpesh', alignment: 'right',
            title: 'Козы-Корпеш и Баян-Сулу', description: 'Могила героев киргизской поэмы.',
            location: { center: [79.375, 47.74], zoom: 8.5, pitch: 60, bearing: 30 },
            marker: { icon: 'shokan-icon' }, mapAnimation: 'easeTo'
        },
        {
            id: 'arganaty', alignment: 'left',
            title: 'Арганаты', description: 'Яркие ковры морковника и трав.',
            location: { center: [78.2, 46.3], zoom: 8.5, pitch: 60, bearing: 315 },
            marker: { icon: 'shokan-icon' }, mapAnimation: 'easeTo'
        },
        {
            id: 'lepsy', alignment: 'right',
            title: 'Река Лепсы', description: 'Камышовые заросли и водоплавающая фауна.',
            location: { center: [78.95, 46.25], zoom: 8.5, pitch: 60, bearing: 270 },
            marker: { icon: 'shokan-icon' }, mapAnimation: 'easeTo'
        },
        {
            id: 'aksu', alignment: 'left',
            title: 'Аксу', description: 'Чистая горная река у подножья Алатау.',
            location: { center: [79.6081, 45.5136], zoom: 8.5, pitch: 60, bearing: 240 },
            marker: { icon: 'shokan-icon' }, mapAnimation: 'easeTo'
        },
        {
            id: 'chilik', alignment: 'right',
            title: 'Чилик', description: 'Залежи болотных лугов и редкие птицы.',
            location: { center: [78.2117, 43.5642], zoom: 8.5, pitch: 60, bearing: 210 },
            marker: { icon: 'shokan-icon' }, mapAnimation: 'easeTo'
        },
        {
            id: 'toraygyr', alignment: 'left',
            title: 'Торайгыр', description: 'Проход Аир с вечными снегами.',
            location: { center: [78.7, 43.35], zoom: 8.5, pitch: 60, bearing: 180 }, marker: { icon: 'shokan-icon' }, mapAnimation: 'easeTo'
        },
        {
            id: 'charyn', alignment: 'right',
            title: 'Чарынский каньон', description: 'Удивительный каньон Чарын.',
            location: { center: [79.07, 43.35], zoom: 8.5, pitch: 60, bearing: 135 }, marker: { icon: 'shokan-icon' }, mapAnimation: 'easeTo'
        },
        {
            id: 'karkara', alignment: 'left',
            title: 'Каркара', description: 'Переговоры и летние кочевья.',
            location: { center: [79.1425, 42.7519], zoom: 8.5, pitch: 60, bearing: 90 }, marker: { icon: 'shokan-icon' }, mapAnimation: 'easeTo'
        },
        {
            id: 'santash', alignment: 'right',
            title: 'Санташ', description: 'Курган Тамерлана и пейзажи.',
            location: { center: [79.17, 42.724], zoom: 8.5, pitch: 60, bearing: 45 }, marker: { icon: 'shokan-icon' }, mapAnimation: 'easeTo'
        },
        {
            id: 'tup', alignment: 'left',
            title: 'Туп', description: 'Устье реки Туп и рыбалка.',
            location: { center: [78.3642, 42.7278], zoom: 8.5, pitch: 60, bearing: 0 }, marker: { icon: 'shokan-icon' }, mapAnimation: 'easeTo'
        },
        {
            id: 'karakol', alignment: 'right',
            title: 'Каракол', description: 'Город Каракол на Иссык-Куле.',
            location: { center: [78.3936, 42.49], zoom: 8.5, pitch: 60, bearing: 315 }, marker: { icon: 'shokan-icon' }, mapAnimation: 'easeTo'
        },
        {
            id: 'chaty-pass', alignment: 'left',
            title: 'Перевал Чаты', description: 'Один из самых опасных перевалов.',
            location: { center: [78.65, 43.2], zoom: 8.5, pitch: 60, bearing: 270 }, marker: { icon: 'shokan-icon' }, mapAnimation: 'easeTo'
        },
        {
            id: 'zhalanash', alignment: 'right',
            title: 'Жаланаш', description: 'Плато с каменными памятниками.',
            location: { center: [78.6103, 43.2031], zoom: 8.5, pitch: 60, bearing: 225 }, marker: { icon: 'shokan-icon' }, mapAnimation: 'easeTo'
        },
        {
            id: 'issyk-river', alignment: 'left',
            title: 'Иссык', description: 'Долина реки и плодородные луга.',
            location: { center: [77.4517, 43.355], zoom: 8.5, pitch: 60, bearing: 180 }, marker: { icon: 'shokan-icon' }, mapAnimation: 'easeTo'
        },
        {
            id: 'verny', alignment: 'right',
            title: 'Верный', description: 'Укрепление и пункт снабжения.',
            location: { center: [76.8897, 43.2389], zoom: 8.5, pitch: 60, bearing: 135 }, marker: { icon: 'shokan-icon' }, mapAnimation: 'easeTo'
        },
        {
            id: 'tamdaly-tas', alignment: 'left',
            title: 'Тамгалы-Тас', description: 'Петроглифы у Или.',
            location: { center: [76.8203, 43.8039], zoom: 8.5, pitch: 60, bearing: 90 }, marker: { icon: 'shokan-icon' }, mapAnimation: 'easeTo'
        },
        {
            id: 'altyn-emel', alignment: 'right',
            title: 'Алтын-Эмель', description: 'Национальный парк и дюны.',
            location: { center: [78.5, 44.0], zoom: 8.5, pitch: 60, bearing: 45 }, marker: { icon: 'shokan-icon' }, mapAnimation: 'easeTo'
        },
        {
            id: 'koksu', alignment: 'left',
            title: 'Коксу', description: 'Луга вдоль реки.',
            location: { center: [78.2078, 44.8681], zoom: 8.5, pitch: 60, bearing: 0 }, marker: { icon: 'shokan-icon' }, mapAnimation: 'easeTo'
        },
        {
            id: 'kapal-arasan', alignment: 'right',
            title: 'Капал-Арасан', description: 'Горячие источники.',
            location: { center: [79.0556, 45.1081], zoom: 8.5, pitch: 60, bearing: 315 }, marker: { icon: 'shokan-icon' }, mapAnimation: 'easeTo'
        },
        {
            id: 'chubar-agach', alignment: 'center',
            title: 'Чубар-Агач', description: 'Финальная точка экспедиции.',
            location: { center: [79.0569, 45.1314], zoom: 8.5, pitch: 60, bearing: 270 }, marker: { icon: 'shokan-icon' }, mapAnimation: 'easeTo'
        }
    ]
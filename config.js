var config = {
    style: 'mapbox://styles/mapbox/satellite-streets-v11',
    accessToken: 'pk.eyJ1IjoidGltYXRldXMiLCJhIjoiY205MnR5czk2MGIyYzJqczlkajVjbng4dCJ9.QgIpFcYvDjkRxPzHM9o5yA',
    projection: 'globe',
    inset: true,
    use3dTerrain: true,
    theme: 'dark',
    showMarkers: true,
    mapAnimation: 'flyTo',

    title: 'Путешествие Шокана Уалиханова (1856)',
    subtitle: 'Экспедиция от Семипалатинска до Иссык-Куля',
    byline: 'Автор: Шокан Уалиханов',

    chapters: [
        {
            id: 'overview', alignment: 'center',
            title: 'Обзор маршрута',
            description: 'С 18 апреля 1856 года Шокан Уалиханов выехал из Семипалатинска по старому казачьему тракту, посетил ключевые пункты маршрута: Аягоз, Аркат, Козы-Корпеш, Арганаты и Чарынский каньон, участвовал в переговорах в долине Каркара, исследовал курган Санташ, достиг Каракола, преодолел перевал Чаты и впервые увидел Иссык-Куль с горы Джаланач, завершив путь у дюн Алтын-Эмеля и в ауле Чубар-Агач.',
            location: { center: [80.2275, 50.4111], zoom: 3.5, pitch: 20, bearing: 0, speed: 0.3, curve: 1 },
            onChapterEnter: [ { layer: 'route-line', opacity: 1 } ], onChapterExit: [],
            marker: false
        },
        {
            id: 'semey', alignment: 'left',
            title: 'Семей (Семипалатинск)',
            description: 'Уалиханов отметил пустынность степи до Семипалатинска, первые проблески зелени и пение жаворонков, тщательно контролируя время выезда, чтобы застать рассвет для вдохновения.',
            location: { center: [80.2275, 50.4111], zoom: 7, pitch: 60, bearing: -10, speed: 0.1, curve: 1 },
            onChapterEnter: [], onChapterExit: [], marker: { icon: 'shokan-icon', rotate: true }
        },
        {
            id: 'ayagoz', alignment: 'right',
            title: 'Аягоз',
            description: 'В Аягозе Шокан зафиксировал шесть колодцев, впервые увидел уток турпан пли атайка и различил кормовые травы, морковник и одуванчик в водянистых лугах.',
            location: { center: [80.4392, 47.9656], zoom: 7, pitch: 60, bearing: -20, speed: 0.1, curve: 1 },
            onChapterEnter: [], onChapterExit: [], marker: { icon: 'shokan-icon' }
        },
        {
            id: 'arkat', alignment: 'left',
            title: 'Сопка Аркат',
            description: 'На Аркате Уалиханов любовался зубчатыми силуэтами гор, отмечал зимовки найманских и уваковских родов и записывал легенды о кочевниках.',
            location: { center: [80.95, 47.85], zoom: 7, pitch: 60, bearing: -30, speed: 0.1, curve: 1 },
            onChapterEnter: [], onChapterExit: [], marker: { icon: 'shokan-icon' }
        },
        {
            id: 'kozy-korpesh', alignment: 'right',
            title: 'Козы-Корпеш и Баян-Сулу',
            description: 'Шокан стремился увидеть могилу Козы-Корпеча на рассвете, но проливной дождь и разлив реки внесли коррективы; он всё же осмотрел красный кирпичный шпиль под дождём.',
            location: { center: [79.375, 47.74], zoom: 7, pitch: 60, bearing: -40, speed: 0.1, curve: 1 },
            onChapterEnter: [], onChapterExit: [], marker: { icon: 'shokan-icon' }
        },
        {
            id: 'arganaty', alignment: 'left',
            title: 'Арганаты',
            description: 'Уалиханов отмечал разноцветные ковры из морковника, дикой редьки, желтого тюльпана и ревеня, а также отсутствие привычных кормовых трав.',
            location: { center: [78.2, 46.3], zoom: 7, pitch: 60, bearing: -50, speed: 0.1, curve: 1 },
            onChapterEnter: [], onChapterExit: [], marker: { icon: 'shokan-icon' }
        },
        {
            id: 'lepsy', alignment: 'right',
            title: 'Река Лепсы',
            description: 'На Лепсе Шокан описал камышовые заросли, крик гусей и лягушек-колокольчиков, а также упоминал о фалангах и скорпионах в старые времена.',
            location: { center: [78.95, 46.25], zoom: 7, pitch: 60, bearing: -60, speed: 0.1, curve: 1 },
            onChapterEnter: [], onChapterExit: [], marker: { icon: 'shokan-icon' }
        },
        {
            id: 'aksu', alignment: 'left',
            title: 'Аксу',
            description: 'Уалиханов переправился через быстрый брод Аксу, любуясь ровными берегами и тополями, и сделал набросок снежных вершин Алатавских гор.',
            location: { center: [79.6081, 45.5136], zoom: 7, pitch: 60, bearing: -70, speed: 0.1, curve: 1 },
            onChapterEnter: [], onChapterExit: [], marker: { icon: 'shokan-icon' }
        },
        {
            id: 'chilik', alignment: 'right',
            title: 'Чилик',
            description: 'На Чилике Уалиханов отметил богатые сенокосные луга, леса тальника, джиды и жимолости, а также легенды о белых лягушках, кваканье которых слышали в Бакалах.',
            location: { center: [78.2117, 43.5642], zoom: 7, pitch: 60, bearing: -80, speed: 0.1, curve: 1 },
            onChapterEnter: [], onChapterExit: [], marker: { icon: 'shokan-icon' }
        },
        {
            id: 'toraygyr', alignment: 'left',
            title: 'Торайгыр',
            description: 'На перевале Аир Уалиханов застал сильный снег и ветер, отметив температуру до –5° по Реомюру, хотя местные утверждали, что буранов здесь почти не бывает.',
            location: { center: [78.7, 43.35], zoom: 7, pitch: 60, bearing: -90, speed: 0.1, curve: 1 },
            onChapterEnter: [], onChapterExit: [], marker: { icon: 'shokan-icon' }
        },
        {
            id: 'charyn', alignment: 'right',
            title: 'Чарынский каньон',
            description: 'Уалиханов восхитился гранитными утёсами, пирамидальными елями и шумом пенящихся волн реки в узком каньоне.',
            location: { center: [79.07, 43.35], zoom: 7, pitch: 60, bearing: -100, speed: 0.1, curve: 1 },
            onChapterEnter: [], onChapterExit: [], marker: { icon: 'shokan-icon' }
        },
        {
            id: 'karkara', alignment: 'left',
            title: 'Каркара',
            description: 'В Каркаре Уалиханов участвовал в переговорах с бугу и адбанами, отмечал дружелюбие киргизов и благоприятство долины для скота без комаров.',
            location: { center: [79.1425, 42.7519], zoom: 7, pitch: 60, bearing: -110, speed: 0.1, curve: 1 },
            onChapterEnter: [], onChapterExit: [], marker: { icon: 'shokan-icon' }
        },
        {
            id: 'santash', alignment: 'right',
            title: 'Санташ',
            description: 'Шокан изучил курган Санташ, запомнив легенду о Тамерлане, где каждый воин должен был вложить камень, создавая памятник.',
            location: { center: [79.17, 42.724], zoom: 7, pitch: 60, bearing: -120, speed: 0.1, curve: 1 },
            onChapterEnter: [], onChapterExit: [], marker: { icon: 'shokan-icon' }
        },
        {
            id: 'tup', alignment: 'left',
            title: 'Туп',
            description: 'У устья Тупа Уалиханов ловил рыбу неводом — карабалык, чабак и канылтер — и отмечал прозрачность воды и быстроту течения.',
            location: { center: [78.3642, 42.7278], zoom: 7, pitch: 60, bearing: -130, speed: 0.1, curve: 1 },
            onChapterEnter: [], onChapterExit: [], marker: { icon: 'shokan-icon' }
        },
        {
            id: 'karakol', alignment: 'right',
            title: 'Каракол',
            description: 'В Караколе Уалиханов описал деревянный форштат, мечеть и первые чалаказаки, формирующие облик укрепления у восточного берега Иссык-Куля.',
            location: { center: [78.3936, 42.49], zoom: 7, pitch: 60, bearing: -140, speed: 0.1, curve: 1 },
            onChapterEnter: [], onChapterExit: [], marker: { icon: 'shokan-icon' }
        },
        {
            id: 'chaty-pass', alignment: 'left',
            title: 'Перевал Чаты',
            description: 'Уалиханов испытал крутую гранитную тропу Чаты: лошадь сорвалась вниз, но выжила, укрепив доверие киргизов к его смелости.',
            location: { center: [78.65, 43.2], zoom: 7, pitch: 60, bearing: -150, speed: 0.1, curve: 1 },
            onChapterEnter: [], onChapterExit: [], marker: { icon: 'shokan-icon' }
        },
        {
            id: 'zhalanash', alignment: 'right',
            title: 'Жаланаш',
            description: 'Шокан отметил каменные «бабы» у Чилика: загадочные статуи с лицами и чашами, лишённые курганов, напоминающие древние памятники.',
            location: { center: [78.6103, 43.2031], zoom: 7, pitch: 60, bearing: -160, speed: 0.1, curve: 1 },
            onChapterEnter: [], onChapterExit: [], marker: { icon: 'shokan-icon' }
        },
        {
            id: 'issyk-river', alignment: 'left',
            title: 'Иссык',
            description: 'С вершины Джаланач Уалиханов впервые увидел Иссык-Куль, описав его «сияние чистейшим кобальтом» и единение синевы озера, неба и гор.',
            location: { center: [77.4517, 43.355], zoom: 7, pitch: 60, bearing: -170, speed: 0.1, curve: 1 },
            onChapterEnter: [], onChapterExit: [], marker: { icon: 'shokan-icon' }
        },
        {
            id: 'verny', alignment: 'right',
            title: 'Верный',
            description: 'При возвращении в Верный Уалиханов описал укрепление, мечеть и женский колорит киргизов в пестрых халатах, дополняя образ города.',
            location: { center: [76.8897, 43.2389], zoom: 7, pitch: 60, bearing: -180, speed: 0.1, curve: 1 },
            onChapterEnter: [], onChapterExit: [], marker: { icon: 'shokan-icon' }
        },
        {
            id: 'tamdaly-tas', alignment: 'left',
            title: 'Тамгалы-Тас',
            description: 'Он исследовал петроглифы у Или, фиксируя остатки древних молелен и могил, доказывающих существование оседлых племён.',
            location: { center: [76.8203, 43.8039], zoom: 7, pitch: 60, bearing: -190, speed: 0.1, curve: 1 },
            onChapterEnter: [], onChapterExit: [], marker: { icon: 'shokan-icon' }
        },
        {
            id: 'altyn-emel', alignment: 'right',
            title: 'Алтын-Эмель',
            description: 'В долине Алтын-Эмель Уалиханов записал монгольские названия гор и рек, связанные с преданиями о калмыцких ханах.',
            location: { center: [78.5, 44.0], zoom: 7, pitch: 60, bearing: -200, speed: 0.1, curve: 1 },
            onChapterEnter: [], onChapterExit: [], marker: { icon: 'shokan-icon' }
        },
        {
            id: 'koksu', alignment: 'left',
            title: 'Коксу',
            description: 'Пересекая Торесазы, он отметил следы древнего арыка, валов и рвов, оставленных по преданию калмыцкими ханами.',
            location: { center: [78.2078, 44.8681], zoom: 7, pitch: 60, bearing: -210, speed: 0.1, curve: 1 },
            onChapterEnter: [], onChapterExit: [], marker: { icon: 'shokan-icon' }
        },
        {
            id: 'kapal-arasan', alignment: 'right',
            title: 'Капал-Арасан',
            description: 'Шокан отмечал горячие источники, запахи трав като сафрана, кислицы и барбариса, и пользу целебной воды для купания.',
            location: { center: [79.0556, 45.1081], zoom: 7, pitch: 60, bearing: -220, speed: 0.1, curve: 1 },
            onChapterEnter: [], onChapterExit: [], marker: { icon: 'shokan-icon' }
        },
        {
            id: 'chubar-agach', alignment: 'center',
            title: 'Чубар-Агач',
            description: 'На финальной точке Уалиханов прощался с киргизами, оценив их гостеприимство и искусство приготовления кумыса.',
            location: { center: [79.0569, 45.1314], zoom: 7, pitch: 60, bearing: -230, speed: 0.1, curve: 1 },
            onChapterEnter: [], onChapterExit: [], marker: { icon: 'shokan-icon' }
        },
        {
            id: 'conclusion', alignment: 'center',
            title: 'Заключение',
            description: 'Уалиханов завершил маршрут возвращением через перевал Чаты, вписав свои наблюдения природы и встречи с кочевниками от солонцев до горных источников.',
            location: { center: [79.0569, 45.1314], zoom: 3.5, pitch: 20, bearing: 0, speed: 0.3, curve: 1 },
            onChapterEnter: [ { layer: 'route-line', opacity: 1 } ], onChapterExit: [], marker: false
        }
    ]
};
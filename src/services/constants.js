/* =============================================================
 Project		:	DeepBetBot
 Author			:	Dmitry Blinov, spellabs
 Created date	:	19.08.2019
 Description	:	Общие константы
 =============================================================== */

export const CONSTANTS = {
    LEAGUES: [
        { code: 2995, title: "Англия. Премьер-лига. Сезон 2019/2020 🇬🇧", type: "_england"},
        { code: 3051, title: "Англия. Чемпионшип. Сезон 2019/2020 🏴󠁧󠁢󠁥󠁮󠁧󠁿", type: "_england"},
        { code: 3055, title: "Англия. Первая лига. Сезон 2019/2020 🏴󠁧󠁢󠁥󠁮󠁧󠁿", type: "_england"},
        { code: 3175, title: "Англия. Национальная лига. Сезон 2019/2020 🏴󠁧󠁢󠁥󠁮󠁧󠁿", type: "_england"},
        { code: 3001, title: "Испания. Примера. Сезон 2019/2020 🇪🇸", type: "_spain" },
        { code: 3183, title: "Испания. Сегунда. Сезон 2019/2020 🇪🇸", type: "_spain" },
        { code: 2999, title: "Германия. Бундеслига. Сезон 2019/2020 🇩🇪", type: "_germany"},
        { code: 3081, title: "Германия. Вторая Бундеслига. Сезон 2019/2020 🇩🇪", type: "_germany"},
        { code: 2997, title: "Италия. Серия А. Сезон 2019/2020 🇮🇹", type: "_italy"},
        { code: 3181, title: "Италия. Серия B. Сезон 2019/2020 🇮🇹", type: "_italy"},
        { code: 3003, title: "Франция. Лига 1. Сезон 2019/2020 🇫🇷", type: "_france"},
        { code: 3153, title: "Франция. Лига 2. Сезон 2019/2020 🇫🇷", type: "_france"},
        { code: 3063, title: "Нидерланды. Эредивизия. Сезон 2019/2020 🇳🇱", type: "_other"},
        { code: 3199, title: "Нидерланды. Первый дивизион. Сезон 2019/2020 🇳🇱", type: "_other"},
        { code: 3189, title: "Португалия. Примейра. Сезон 2019/2020 🇵🇹", type: "_other" },
        { code: 3191, title: "Португалия. Сегунда. Сезон 2019/2020 🇵🇹", type: "_other" },
        { code: 3103, title: "Бельгия. Лига Жюпиле. Сезон 2019/2020 🇧🇪", type: "_other" },
        { code: 2973, title: "Россия. Премьер-Лига. Сезон 2019/2020 🇷🇺 🇷🇺 🇷🇺", type: "_russiapl" },
        { code: 2993, title: "Россия. ФНЛ - Первый дивизион. Сезон 2019/2020 🇷🇺", type: "_russia1d" },
        { code: 3083, title: "Россия. Второй дивизион - Запад. Сезон 2019/2020 🇷🇺", type: "_russia2d" },
        { code: 3085, title: "Россия. Второй дивизион - Центр. Сезон 2019/2020 🇷🇺", type: "_russia2d" },
        { code: 3087, title: "Россия. Второй дивизион - Юг. Сезон 2019/2020 🇷🇺", type: "_russia2d" },
        { code: 3089, title: "Россия. Второй дивизион - Урал-Приволжье. Сезон 2019/2020 🇷🇺", type: "_russia2d" },
        { code: 3097, title: "Россия. Молодежное первенство. Сезон 2019/2020 🇷🇺", type: "_russiapl" },
        { code: 3071, title: "Турция. Суперлига. Сезон 2019/2020 🇵🇹", type: "_other" },
        { code: 3215, title: "Греция. Суперлига. Сезон 2019/2020 🇬🇷", type: "_other"},
        { code: 3043, title: "Израиль. Премьер-лига. Сезон 2019/2020 🇮🇱", type: "_other"},
        { code: 3217, title: "Кипр. Первый дивизион. Сезон 2019/2020 🇨🇾", type: "_other"},
        { code: 3205, title: "Уэльс. Премьер-лига. Сезон 2019/2020 🏴󠁧󠁢󠁷󠁬󠁳󠁿󠁧󠁢󠁥󠁮󠁧󠁿", type: "_other"},
        { code: 3075, title: "Шотландия. Премьер-лига. Сезон 2019/2020 󠁧󠁢󠁷󠁬󠁳󠁿󠁧󠁢󠁥󠁮󠁧󠁿🏴󠁧󠁢󠁳󠁣󠁴󠁿", type: "_other"},
        { code: 3067, title: "Сербия. Суперлига. Сезон 2019/2020 󠁧󠁢󠁷󠁬󠁳󠁿󠁧󠁢󠁥󠁮󠁧󠁿🇷🇸", type: "_other"},
	    { code: 3145, title: "Мексика. Лига MX. Сезон 2019/2020 🇲🇽", type: "_other"},
        { code: 3131, title: "Румыния. Лига 1. Сезон 2019/2020 🇷🇴", type: "_other"},
        { code: 2867, title: "Колумбия. Примера А 🇨🇴", type: "_southamerica"},
        { code: 3153, title: "Франция. Лига 2. Сезон 2019/2020 🇫🇷", type: "_france"},
        { code: 2935, title: "Финляндия. Вейккауслиига. Сезон 2019/2020 🇫🇮", type: "_other" },
        { code: 3009, title: "Болгария. Первая лига. Сезон 2019/2020 🇧🇬", type: "_other" },
        { code: 2883, title: "Ирландия. Высшая лига. Сезон 2019/2020 🇮🇪", type: "_other" },
        { code: 2885, title: "Чили. Примера. Сезон 2019/2020 🇨🇱", type: "_southamerica" },
        { code: 3129, title: "Чехия. Высшая лига. Сезон 2019/2020 🇨🇿", type: "_other" },
        { code: 3187, title: "Черногория. Первая лига. Сезон 2019/2020 🇲🇪", type: "_other" },
        { code: 3073, title: "Хорватия. Первая лига. Сезон 2019/2020 🇭🇷", type: "_other" },
        { code: 3005, title: "Украина. Премьер-лига. Сезон 2019/2020 🇺🇦", type: "_other" },
        { code: 3151, title: "Украина. Первая ига. Сезон 2019/2020 🇺🇦", type: "_other"},
        { code: 2891, title: "США. МЛС 🇺🇸", type: "_other" },
        { code: 2897, title: "Латвия. Высшая лига 🇱🇻", type: "_other" },
        { code: 2913, title: "Китай. Суперлига 🇨🇳", type: "_other" },
        { code: 2921, title: "Беларусь. Высшая лига 🇧🇾", type: "_other" },
        { code: 2889, title: "Грузия. Высшая лига 🇬🇪", type: "_other" },
        { code: 2929, title: "Швеция. Аллсвенскан 🇸🇪", type: "_other" },
        { code: 2915, title: "Литва. А лига 🇱🇹", type: "_other" },
        { code: 2901, title: "Казахстан. Премьер-лига 🇰🇿", type: "_other" },
        { code: 2927, title: "Норвегия. Типпелига 🇳🇴", type: "_other" },
        { code: 3007, title: "Дания. Суперлига 🇩🇰", type: "_other" },
        { code: 2947, title: "Бразилия. Серия А 🇧🇷", type: "_southamerica" },
        { code: 2909, title: "Япония. Джей-лига 🇯🇵", type: "_other" },
        { code: 2911, title: "Узбекистан. ПФЛ 🇺🇿", type: "_other" }
    ],
    URL_FOR_CORS: "https://cors-anywhere.herokuapp.com/",
    URL_FOR_DATA_SOURCE: "https://www.championat.com/football/",
    MAX_GOALS_COUNT: 6,
    CHANCE_CEILING: 3.5,
    HOME_CHART_COLOR: "#c23531",
    AWAY_CHART_COLOR: "#547b95",
    RESERVE_CHART_COLOR: "#fec42c"
}
/* =============================================================
 Project		:	DeepBetBot
 Author			:	Dmitry Blinov, spellabs
 Created date	:	19.08.2019
 Description	:	Общие константы
  =============================================================== */

export const CONSTANTS = {
    LEAGUES: [
        { code: 2973, title: "Россия. Премьер-Лига. Сезон 2019/2020 🇷🇺 🇷🇺 🇷🇺", type: "_russiapl" },
        { code: 2993, title: "Россия. ФНЛ - Первый дивизион. Сезон 2019/2020 🇷🇺", type: "_russia1d" },
        { code: 3083, title: "Россия. Второй дивизион - Запад. Сезон 2019/2020 🇷🇺", type: "_russia2d" },
        { code: 3085, title: "Россия. Второй дивизион - Центр. Сезон 2019/2020 🇷🇺", type: "_russia2d" },
        { code: 3087, title: "Россия. Второй дивизион - Юг. Сезон 2019/2020 🇷🇺", type: "_russia2d" },
        { code: 3089, title: "Россия. Второй дивизион - Урал-Приволжье. Сезон 2019/2020 🇷🇺", type: "_russia2d" },
        { code: 3097, title: "Россия. Молодежное первенство. Сезон 2019/2020 🇷🇺", type: "_russiapl" },
        { code: 2935, title: "Финляндия. Вейккауслиига. Сезон 2019/2020 🇫🇮", type: "_other" },
        { code: 3009, title: "Болгария. Первая лига. Сезон 2019/2020 🇧🇬", type: "_other" },
        { code: 2883, title: "Ирландия. Высшая лига. Сезон 2019/2020 🇮🇪", type: "_other" },
        { code: 2885, title: "Чили. Примера. Сезон 2019/2020 🇨🇱", type: "_southamerica" },
        { code: 3129, title: "Чехия. Высшая лига. Сезон 2019/2020 🇨🇿", type: "_other" },
        { code: 3187, title: "Черногория. Первая лига. Сезон 2019/2020 🇲🇪", type: "_other" },
        { code: 3073, title: "Хорватия. Первая лига. Сезон 2019/2020 🇭🇷", type: "_other" },
        { code: 3005, title: "Украина. Премьер-лига. Сезон 2019/2020 🇺🇦", type: "_other" },
        { code: 2891, title: "США. МЛС 🇺🇸", type: "_other" },
        { code: 2897, title: "Латвия. Высшая лига 🇱🇻", type: "_other" },
        { code: 2913, title: "Китай. Суперлига 🇨🇳", type: "_other" },
        { code: 2921, title: "Беларусь. Высшая лига 🇧🇾", type: "_other" },
        { code: 2889, title: "Грузия. Высшая лига 🇬🇪", type: "_other" },
        { code: 2929, title: "Швеция. Аллсвенскан 🇸🇪", type: "_other" },
        { code: 2915, title: "Литва. А лига 🇱🇹", type: "_other" },
        { code: 2901, title: "Казахстан. Премьер-лига 🇰🇿", type: "_other" },
        { code: 2927, title: "Норвегия. Типпелига 🇳🇴", type: "_other" },
        { code: 2947, title: "Бразилия. Серия А 🇧🇷", type: "_southamerica" },
        { code: 2909, title: "Япония. Джей-лига 🇯🇵", type: "_other" },
        { code: 2911, title: "Узбекистан. ПФЛ 🇺🇿", type: "_other" },
        { code: 2703, title: "Португалия. Примейра 🇵🇹", type: "_other" }
    ],
    URL_FOR_CORS: "https://cors-anywhere.herokuapp.com/",
    URL_FOR_DATA_SOURCE: "https://www.championat.com/football/",
    MAX_GOALS_COUNT: 6,
    CHANCE_CEILING: 3.5
}
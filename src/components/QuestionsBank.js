const questions = [
    // FIRST
    {
        // 0
        text: 'Вы уже играли в покер?',
        answers: [
            { text: 'Да', nextQuestion: 1 },
            { text: 'Нет', nextQuestion: 4 },
        ],
    },
    // QUESTIONS FOR "ДА"
    {
        // 1
        text: 'Какие игры предпочитаете?',
        answers: [
            { text: 'Техас (2 карты)\nОписание', nextQuestion: 2 },
            { text: 'Омаха (5 карт)\nОписание', nextQuestion: 2 },
            { text: 'Китайский покер\nОписание', nextQuestion: 2 },
        ],
        allowMultipleAnswers: true, // Разрешить выбирать несколько ответов
    },
    {
        // 2
        text: 'Сколько времени вы готовы уделять игре?',
        answers: [
            { text: '2-5ч в неделю', nextQuestion: 3 },
            { text: '5-8ч в неделю', nextQuestion: 3 },
            { text: '8-12ч в неделю', nextQuestion: 3 },
        ],
    },
    {
        // 3
        text: 'Какие лимиты хотели бы играть?',
        answers: [
            { text: 'Микро лимиты', nextQuestion: null },
            { text: 'Маленькие лимиты', nextQuestion: null },
            { text: 'Средние лимиты', nextQuestion: null },
            { text: 'Высокие лимиты', nextQuestion: null },
        ],
        allowMultipleAnswers: true, // Разрешить выбирать несколько ответов
    },

    // QUESTIONS FOR "НЕТ"
    {
        // 4
        text: 'Хотели бы пройти обучение?',
        answers: [
            { text: 'Да', nextQuestion: 5 },
            { text: 'Нет', nextQuestion: 5 },
        ],
    },

    {
        // 5
        text: 'У вас есть основной источник дохода?',
        answers: [
            { text: 'Да', nextQuestion: 6 },
            { text: 'Нет', nextQuestion: 6 },
        ],
    },
    {
        // 6
        text: 'Какие лимиты хотели бы играть?',
        answers: [
            { text: 'Микро лимиты\nОписание', nextQuestion: null },
            { text: 'Маленькие лимиты\nОписание', nextQuestion: null },
            { text: 'Средние лимиты\nОписание', nextQuestion: null },
            { text: 'Высокие лимиты\nОписание', nextQuestion: null },
        ],
        allowMultipleAnswers: true, // Разрешить выбирать несколько ответов
    },
];

export default questions;
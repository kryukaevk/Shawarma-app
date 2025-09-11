import type {
    ProductPrice,
    SauceSelect,
    WeightSelect,
    categorySelect,
} from './types/types';

export interface Product {
    id: string;
    title: string;
    imageUrl: string;
    price: ProductPrice;
    description: string;
    category: categorySelect;
    sauce: SauceSelect[];
    weight: WeightSelect[];
    popularity: number;
}

export const PRODUCTS_MOCK: Product[] = [
    {
        id: '001',
        title: 'Микс',
        imageUrl: '/src/assets/image/mix.webp',
        price: 350,
        description:
            'Лаваш, филе цыпленка, соус на выбор, свежие огурцы, морковь по-корейски, капуста, томаты свежие, картофель фри',
        category: 'Фри',
        sauce: ['Без соуса', 'Классический', 'Сырный', 'Чесночный'],
        weight: [300, 400, 500],
        popularity: 8,
    },
    {
        id: '002',
        title: 'Классическая',
        imageUrl: '/src/assets/image/classic.webp',
        price: 350,
        description:
            'Лаваш, филе цыпленка, соус на выбор, свежие огурцы, капуста, томаты свежие',
        category: 'Россия',
        sauce: ['Без соуса', 'Классический', 'Сырный', 'Чесночный'],
        weight: [300, 400, 500],
        popularity: 7,
    },
    {
        id: '003',
        title: 'Домашняя',
        imageUrl: '/src/assets/image/home.webp',
        price: 350,
        description:
            'Лаваш, филе цыпленка, соус на выбор, свежие огурцы, капуста, томаты свежие, картофель фри',
        category: 'Россия',
        sauce: ['Без соуса', 'Классический', 'Сырный', 'Чесночный'],
        weight: [300, 400, 500],
        popularity: 5,
    },
    {
        id: '004',
        title: 'Деревенская',
        imageUrl: '/src/assets/image/rustic.webp',
        price: 350,
        description:
            'Лаваш, филе цыпленка, соус на выбор, огурцы маринованные, морковь по-корейски, капуста, лук красный, томаты свежие, картофель фри, горчица зернистая',
        category: 'Россия',
        sauce: ['Без соуса', 'Классический', 'Сырный', 'Чесночный'],
        weight: [300, 400, 500],
        popularity: 3,
    },
    {
        id: '005',
        title: 'Мясная',
        imageUrl: '/src/assets/image/meat.webp',
        price: 350,
        description:
            'Лаваш, филе цыпленка, соус на выбор, картофель фри, капуста, соус барбекю, томаты свежие, огурцы маринованные, лук красный',
        category: 'Фри',
        sauce: ['Без соуса', 'Классический', 'Сырный', 'Чесночный'],
        weight: [300, 400, 500],
        popularity: 1,
    },
    {
        id: '006',
        title: 'Грибная',
        imageUrl: '/src/assets/image/mushroom.webp',
        price: 350,
        description:
            'Лаваш, филе цыпленка, соус на выбор, шампиньоны жареные, картофель фри, лук красный',
        category: 'Россия',
        sauce: ['Без соуса', 'Классический', 'Сырный', 'Чесночный'],
        weight: [300, 400, 500],
        popularity: 4,
    },
    {
        id: '007',
        title: 'Гавайская',
        imageUrl: '/src/assets/image/hawaii.webp',
        price: 350,
        description:
            'Лаваш, филе цыпленка, соус на выбор, ананасы консервированные, сыр моцарелла, капуста',
        category: 'Гавайи',
        sauce: ['Без соуса', 'Классический', 'Сырный', 'Чесночный'],
        weight: [300, 400, 500],
        popularity: 2,
    },
    {
        id: '008',
        title: 'Шаверма в пите',
        imageUrl: '/src/assets/image/pita.webp',
        price: 250,
        description:
            'Лепешка собственного приготовления, филе цыпленка, соус на выбор, томаты свежие, огурцы маринованные, капуста, салат айсберг, соус гриль, лук красный, паприка копченая',
        category: 'В пите',
        sauce: ['Без соуса', 'Классический', 'Сырный', 'Чесночный'],
        weight: [300, 400, 500],
        popularity: 6,
    },
];

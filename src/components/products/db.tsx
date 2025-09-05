import type {
    ProductPrice,
    SauceSelect,
    WeightSelect,
} from '../../types/types';

export interface Product {
    id: string;
    title: string;
    imageUrl: string;
    price: ProductPrice;
    description: string;
    category_id: 1;
    sauce: SauceSelect[];
    weight: WeightSelect[];
}

export const PRODUCTS_MOCK: Product[] = [
    {
        id: '001',
        title: 'Микс',
        imageUrl: '/src/assets/image/mix.webp',
        price: 350,
        description:
            'Лаваш, филе цыпленка, соус на выбор, свежие огурцы, морковь по-корейски, капуста, томаты свежие, картофель фри',
        category_id: 1,
        sauce: ['Без соуса', 'Классический', 'Сырный', 'Чесночный'],
        weight: [300, 400, 500],
    },
    {
        id: '002',
        title: 'Классическая',
        imageUrl: '/src/assets/image/mix.webp',
        price: 350,
        description:
            'Лаваш, филе цыпленка, соус на выбор, свежие огурцы, морковь по-корейски, капуста, томаты свежие, картофель фри',
        category_id: 1,
        sauce: ['Без соуса', 'Классический', 'Сырный', 'Чесночный'],
        weight: [300, 400, 500],
    },
    {
        id: '003',
        title: 'Домашняя',
        imageUrl: '/src/assets/image/mix.webp',
        price: 350,
        description:
            'Лаваш, филе цыпленка, соус на выбор, свежие огурцы, морковь по-корейски, капуста, томаты свежие, картофель фри',
        category_id: 1,
        sauce: ['Без соуса', 'Классический', 'Сырный', 'Чесночный'],
        weight: [300, 400, 500],
    },
    {
        id: '004',
        title: 'Деревенская',
        imageUrl: '/src/assets/image/mix.webp',
        price: 350,
        description:
            'Лаваш, филе цыпленка, соус на выбор, свежие огурцы, морковь по-корейски, капуста, томаты свежие, картофель фри',
        category_id: 1,
        sauce: ['Без соуса', 'Классический', 'Сырный', 'Чесночный'],
        weight: [300, 400, 500],
    },
];

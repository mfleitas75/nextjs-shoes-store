import { hashSync } from 'bcrypt-ts-edge';
const sampleData = {
    users: [
        {
            name: 'Kumar Admin',
            email: 'admin@admin.com',
            password: hashSync('123456', 10),
            role: 'admin',
        },
        {
            name: 'Kumar User',
            email: 'user@user.com',
            password: hashSync('123456', 10),
            role: 'user',
        },
    ],
    products: [
        {
            name: 'Skechers Sports Shoes',
            slug: 'skechers-sports-shoes',
            category: "Ladies Shoes",
            description: 'Skechers Sport shoes for lady',
            images: [
                "/images/150420_PRCL.jpg",
                "/images/150420_SLTP.jpg",
                "/images/150420_WHT.jpg"
            ],
            price: 59.99,
            brand: 'Skechers',
            rating: 4.5,
            numReviews: 10,
            stock: 1,
            isFeatured: false,
            banner: 'banner-1.jpg',
            sizes: ["6", "7", "8", "9", "10"],
            colors: ["Black", "White", "Pink", "Blue"],
        },
        {
            name: 'Sckechers High Shoes for mens',
            slug: 'skechers-high-shoes-for-mens',
            category: "Men's Shoes",
            description: 'Skechers Comfort shoes for full day',
            images: ['/images/232921_WBL.jpg'],
            price: 85.9,
            brand: 'Skechers',
            rating: 4.2,
            numReviews: 8,
            stock: 10,
            isFeatured: true,
            banner: 'https://utfs.io/f/HI9tOglpZNuR2Bo4JIYfOFWhzZ4EcU3PyMe6XqxtuwC79GV0',
            sizes: ["6", "7", "8", "9", "10"],
            colors: ["Black", "White", "Pink", "Blue"],
        },
        {
            name: 'Skechers Party wear lady sandals',
            slug: 'skechers-party-wear-lady-sandal',
            category: "Ladies Shoes",
            description: 'perfect golden sandals lady party wear ',
            images: ['/images/114413_TPA.png' ],
            price: 99.95,
            brand: 'Skechers',
            rating: 4.9,
            numReviews: 3,
            stock: 0,
            isFeatured: true,
            banner: 'https://utfs.io/f/HI9tOglpZNuRtseyEChEvak5ydHpsjz9LeVYAZlDQ38Nw4P2',
            sizes: ["6", "7", "8", "9", "10"],
            colors: ["Black", "White", "Pink", "Blue"],
        },
        {
            name: 'Skechers Party wear lady sandals',
            slug: 'skechers-sports-shoes',
            category: "Women's Shoes",
            description: 'Perfect style and premium comfort',
            images: ['/images/180272_SLTP.jpg' ],
            price: 39.95,
            brand: 'Skechers',
            rating: 3.6,
            numReviews: 5,
            stock: 10,
            isFeatured: true,
            banner: 'https://utfs.io/f/HI9tOglpZNuRAjqLmMF07kzPyJNMe23WYCwX1c9bnGimj8Sv',
            sizes: ["6", "7", "8", "9", "10"],
            colors: ["Black", "White", "Pink", "Blue"],
        },
        {
            name: 'Skechers Kids Shoes',
            slug: 'skechers-kids-shoes',
            category: "Kids Shoes",
            description: 'A perfect blend and comfort',
            images: [ '/images/403822_RDBK.jpg' ],
            price: 79.99,
            brand: 'Skechers',
            rating: 4.7,
            numReviews: 18,
            stock: 6,
            isFeatured: false,
            banner: null,
            sizes: ["6", "7", "8", "9", "10"],
            colors: ["Black", "White", "Pink", "Blue"],
        },
        {
            name: 'Skechers Office Shoes ',
            slug: 'skechers-office-shoes',
            category: "Men's Shoes",
            description: 'Comfort on full day premium product ',
            images: [ '/images/205319_NVY.jpg' ],
            price: 99.99,
            brand: 'Skechers',
            rating: 4.6,
            numReviews: 12,
            stock: 8,
            isFeatured: true,
            banner: 'https://utfs.io/f/HI9tOglpZNuR2BlzMeWfOFWhzZ4EcU3PyMe6XqxtuwC79GV0',
            sizes: ["6", "7", "8", "9", "10"],
            colors: ["Black", "White", "Pink", "Blue"],
        },
        {
            name: 'Skechers Ladies Office Sandal',
            slug: 'ladies-office-sandal',
            category: "Ladies Shoes",
            description: 'Comfort office sandals for ladies.',
            images: ['/images/177200_OFWT.jpg'],
            price: 99.99,
            brand: 'Skechers',
            rating: 4.6,
            numReviews: 12,
            stock: 8,
            isFeatured: false,
            banner: '',
            sizes: ["6", "7", "8", "9", "10"],
            colors: ["Black", "White", "Pink", "Blue"],
        },
    ],
};

export default sampleData;
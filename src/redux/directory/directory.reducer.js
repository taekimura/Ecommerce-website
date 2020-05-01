const INITIAL_STATE = {
    sections:[
        {
            title: 'New Arrival',
            imageUrl: 'https://i.ibb.co/02gj4cc/new.png',
            id: 1,
            linkUrl: 'shop/hats',
        },
        {
            title: '20 SS Sale',
            imageUrl: 'https://i.ibb.co/8bg9pbY/800sale.png',
            id: 2,
            linkUrl: 'shop/jackets'
        },
        {
            title: 'Accessories',
            imageUrl: 'https://i.ibb.co/m8gWcm2/800acce.png',
            id: 3,
            linkUrl: 'shop/sneakers'
        },
        {
            title: 'womens',
            imageUrl: 'https://i.ibb.co/FJqjzQB/woman1000.png',
            size: 'large',
            id: 4,
            linkUrl: 'shop/womens'
        },
        {
            title: 'mens',
            imageUrl: 'https://i.ibb.co/nrnsw5m/man1000.png',
            size: 'large',
            id: 5,
            linkUrl: 'shop/mens'
        }
    ]
};

const directoryReducer = (state = INITIAL_STATE, action) => {
    switch (action.type){
        default:
            return state;
    }
};

export default directoryReducer;
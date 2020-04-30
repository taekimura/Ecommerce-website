const INITIAL_STATE = {
    sections:[
        {
            title: 'New Arrival',
            imageUrl: 'https://i.ibb.co/mHH2y2L/yoann-boyer-9d-D0g-Fvr-Fn-Y-unsplash.jpg',
            id: 1,
            linkUrl: 'shop/hats',
        },
        {
            title: '20 SS Sale',
            imageUrl: 'https://i.ibb.co/MNyLm5b/aiony-haust-v-TIPbl-Wkvaw-unsplash.jpg',
            id: 2,
            linkUrl: 'shop/jackets'
        },
        {
            title: 'Accessories',
            imageUrl: 'https://i.ibb.co/G93Djg7/sylvie-tittel-9-PUHw-Nn-FIVc-unsplash.jpg',
            id: 3,
            linkUrl: 'shop/sneakers'
        },
        {
            title: 'womens',
            imageUrl: 'https://i.ibb.co/Z27wwY7/sasha-nadelyaeva-4-TRuq-Q6hr0-unsplash.jpg',
            size: 'large',
            id: 4,
            linkUrl: 'shop/womens'
        },
        {
            title: 'mens',
            imageUrl: 'https://i.ibb.co/F7fD471/sam-burriss-wadh-Smt4tt-I-unsplash.jpg',
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
export const platformDummy = () => {
    let data = [
        {
            id:1,
            name: 'Playstation 4',
            photo: 'no-image.png',
            company: 'Sony',
            platformType: {
                id: 1,
                description: 'Console'
            }    
        },
        {
            id:2,
            name: 'Steam',
            photo: 'no-image.png',
            company: 'Valve',
            platformType: {
                description: 'PC'
            }    
        },
        {
            id:3,
            name: 'Nintendo Switch',
            photo: 'no-image.png',
            company: 'Nintendo',
            platformType: {
                description: 'Handheld'
            }    
        }
    ];

    return data;
}
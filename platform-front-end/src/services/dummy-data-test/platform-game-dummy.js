export const platformGameDummy = () => {
    let data = [
        {
            platformId : 1,
            games: 
            [
                {
                    id:1,
                    name: 'Guilty Gear: Strive',
                    photo: 'no-image.png',
                    gamePrice: 120,
                    gameQtySold: 500000   
                },
                {
                    id:2,
                    name: 'Sekiro: Shadows die twice',
                    photo: 'no-image.png',
                    company: 'From Software',
                    gamePrice: 90,
                    gameQtySold: 1500000   
                }
            ]
        }
    ];

    return data;
}
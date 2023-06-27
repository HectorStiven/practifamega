export const PhotoService = {
    getData() {
        return [
            {
                
                itemImageSrc: '../images/inicio.jpeg',
                
                alt: '1',
                title: 'Title 1'
            },
            {

                itemImageSrc: '../images/inicio.jpeg',
                
                alt: '2',
                title: 'Title 2'
            },
            {

                itemImageSrc: '../images/inicio.jpeg',
          
                alt: '3',
                title: 'Title 3'
            },
            {

                itemImageSrc: '../images/inicio.jpeg',
               
                alt: '4',
                title: 'Title 4'
            }
        ];
    },

    getImages() {
        return Promise.resolve(this.getData());
    }
};


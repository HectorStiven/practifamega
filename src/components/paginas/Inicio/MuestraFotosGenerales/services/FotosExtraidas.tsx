export const PhotoService = {
    getData() {
        return [
            {
                
                itemImageSrc: '../images/catalogoinicio/1.jpeg',
                
                alt: '1',
                title: 'Title 1'
            },
            {

                itemImageSrc: '../images/catalogoinicio/2.jpeg',
                
                alt: '2',
                title: 'Title 2'
            },
            {

                itemImageSrc: '../images/catalogoinicio/3.jpeg',
          
                alt: '3',
                title: 'Title 3'
            },
            {

                itemImageSrc: '../images/catalogoinicio/4.jpeg',
               
                alt: '',
                title: 'Title 4'
            }
        ];
    },

    getImages() {
        return Promise.resolve(this.getData());
    }
};


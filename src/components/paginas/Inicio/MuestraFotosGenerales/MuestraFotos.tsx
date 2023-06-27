import { useState, useEffect } from 'react';
import { Galleria, GalleriaResponsiveOptions } from 'primereact/galleria';
import { PhotoService } from './services/FotosExtraidas';

export default function MostartImagenesInicio() {
    const [images, setImages] = useState<any[]>([]);

    const responsiveOptions: GalleriaResponsiveOptions[] = [
        {
            breakpoint: '991px',
            numVisible: 4
        },
        {
            breakpoint: '767px',
            numVisible: 3
        },
        {
            breakpoint: '575px',
            numVisible: 1
        }
    ];

    useEffect(() => {
        PhotoService.getImages().then(data => setImages(data));
    }, []);

    const itemTemplate = (item: any) => {
        return <img src={item.itemImageSrc} alt={item.alt} style={{ width: '100%', display: 'block' }} />;
    }

    const thumbnailTemplate = (item: any) => {
        return <img src={item.thumbnailImageSrc} alt={item.alt} style={{ display: 'block' }} />;
    }

    return (
        <div className="card">
            <div className="row">
                <div className="col-12">
                    <Galleria
                        value={images}
                        responsiveOptions={responsiveOptions}
                        numVisible={5}
                        circular
                        style={{ maxWidth: '640px' }}
                        showItemNavigators
                        showItemNavigatorsOnHover
                        item={itemTemplate}
                        thumbnail={thumbnailTemplate}
                    />
                </div>
            </div>
        </div>
    )
}
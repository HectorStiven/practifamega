export default function ContactosMegafietas() {
   
    const infoStyle = {
        display: 'flex',
        flexDirection: 'column' as 'column',
        justifyContent: 'space-between',
        padding: '1rem',
    };

    const buttonTextBlackStyle = {
        fontWeight: 'bold',
        color: '#333',
        whiteSpace: 'nowrap' as 'nowrap',
    };

    return (
        <div
            style={{
                borderRadius: '20px',
                background: 'var(--style-cards-bg)',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                backgroundBlendMode: 'normal, color-dodge',
                width: '300px',
            }}
        >
            <div
                style={{
                    background: '#fff',
                    height: '100%',
                    padding: '2px',
                }}
            >
                <div
                    style={{
                        fontWeight: 'bold',
                        color: '#333',
                        textAlign: 'center',
                        marginTop: '1rem',
                    }}
                >
                    Megafiestas de villavicencio
                </div>
               
                <div
                    style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        gap: '2px',
                        width: '100%',
                        marginTop: '2rem',
                        marginBottom: '2rem',
                    }}
                >
                    <i className="pi pi-star-fill" style={{ color: '#333' }}></i>
                    <i className="pi pi-star-fill" style={{ color: '#333' }}></i>
                    <i className="pi pi-star-fill" style={{ color: '#333' }}></i>
                    <i className="pi pi-star-fill" style={{ color: '#999' }}></i>
                    <i className="pi pi-star-fill" style={{ color: '#999' }}></i>
                </div>
                <div style={infoStyle}>
                    <div
                        style={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'space-between',
                            gap: '2px',
                            padding: '0.5rem',
                        }}
                    >
                        <div style={{ display: 'flex', alignItems: 'center', gap: '2px' }}>
                            <i className="pi pi-star-fill"></i>
                            <span style={{ fontWeight: 'bold', color: '#333' }}>Meta</span>
                        </div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '2px' }}>
                            <i className="pi pi-star-fill"></i>
                            <span style={{ fontWeight: 'bold', color: '#333' }}>Contactanos YA</span>
                        </div>
                    </div>
                    <div
                        style={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'space-between',
                            gap: '2px',
                            padding: '0.5rem',
                        }}
                    >
                        <div
                            style={{
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                gap: '1px',
                                borderRight: '1px solid #E5E7EB',
                                paddingRight: '0.5rem',
                            }}
                        >
                            <i className="pi pi-bolt"></i>
                            <span style={{ fontWeight: 'bold', color: '#333' }}>Energia</span>
                        </div>
                        <div
                            style={{
                                display: 'flex',
                                alignItems: 'center',
                                gap: '1px',
                                justifyContent: 'center',
                                borderRight: '1px solid #E5E7EB',
                                paddingLeft: '0.5rem',
                                paddingRight: '0.5rem',
                            }}
                        >
                            <i className="pi pi-wifi"></i>
                            <span style={{ fontWeight: 'bold', color: '#333' }}>Wifi</span>
                        </div>
                        <div
                            style={{
                                display: 'flex',
                                alignItems: 'center',
                                gap: '1px',
                                justifyContent: 'center',
                                paddingLeft: '0.5rem',
                            }}
                        >
                            <i className="pi pi-book"></i>
                            <span style={{ fontWeight: 'bold', color: '#333' }}>Musica</span>
                        </div>
                    </div>
                    <div
                        style={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            paddingTop: '0.5rem',
                            paddingLeft: '0.5rem',
                            paddingRight: '0.5rem',
                            gap: '2px',
                        }}
                    >
                        <button
                            style={{
                                padding: '0.75rem',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                width: '7rem',
                                gap: '2px',
                                background: '#fff',
                                border: '1px solid #E5E7EB',
                                boxShadow: '0px 1px 2px rgba(0, 0, 0, 0.1)',
                                cursor: 'pointer',
                                borderRadius: '50px',
                            }}
                        >
                            <span style={buttonTextBlackStyle}>Contact</span>
                            <i className="pi pi-send" style={{ color: '#333' }}></i>
                        </button>
                        <button
                            style={{
                                padding: '0.75rem',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                width: '5rem',
                                gap: '2px',
                                background: '#333',
                                border: 'none',
                                boxShadow: '0px 1px 2px rgba(0, 0, 0, 0.1)',
                                cursor: 'pointer',
                                borderRadius: '50px',
                            }}
                        >
                            <span style={{ fontWeight: 'bold', color: '#fff', whiteSpace: 'nowrap' }}>Rate</span>
                            <i className="pi pi-thumbs-up-fill" style={{ color: '#fff' }}></i>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
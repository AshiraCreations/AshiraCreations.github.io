import "../styles/components/Banner.css";

export default function Banner({children, src}) {
    
    return (
        <div className='banner' style={{backgroundImage: `url(${src})`}}>
            <div className='banner__overlay'>
                {children}
            </div>
        </div>
    );
}
import './Borders.css';

export default function Borders({ borders }) {
    return (
        <div className='borders'>
            <span className='borders-title'>Borders Countries: </span>
            <span className='countries'>
                {borders && borders.length > 0 ? (
                    borders.map((border, index) => (
                        <span key={index}>{border}</span>
                    ))
                ) : (
                    "N/A"
                )}
            </span>
        </div>
    )
}

import './Borders.css';

export default function Borders({ borders }) {
    return (
        <div className='borders'>
            <span className='borders-title'>Borders Countries: </span>
            <span className='countries'>
                {borders.map((border, index) => (
                    <span key={index}>{border}</span>
                ))}
            </span>
        </div>
    )
}
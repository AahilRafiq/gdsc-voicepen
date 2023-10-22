import '../styles/general.css'

export default function DisplayResult({textfromSpeech , textSummary}) {
    return (
        <div className='result-container'>
            <div className='result-displayer'>
                <h2 className='displayer-text'>Text from Speech</h2>
                <p className='displayer-text'>{textfromSpeech}</p>
            </div>
            <div className='result-displayer'>
                <h2 className='displayer-text'>Text Summary</h2>
                <p className='displayer-text'>{textSummary}</p>    
            </div>
        </div>
    )
}
import '../styles/general.css'

export default function DisplayResult({textfromSpeech , textSummary}) {
    return (
        <div className='result-container'>
            <div className='result-displayer'>
                <h2>Text from Speech</h2>
                <p>{textfromSpeech}</p>
            </div>
            <div className='result-displayer'>
                <h2>Text Summary</h2>
                <p>{textSummary}</p>    
            </div>
        </div>
    )
}
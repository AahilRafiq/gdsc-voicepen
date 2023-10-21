

async function getTextFromSpeech(audioBlob , hf) {
    return await hf.automaticSpeechRecognition({
        model: 'facebook/wav2vec2-large-960h-lv60-self',
        data: audioBlob
    })
}

async function getSummary(text , hf) {
    return await hf.summarization({
        model: 'facebook/bart-large-cnn',
        inputs: text
    })
}

export {
    getTextFromSpeech,
    getSummary
}
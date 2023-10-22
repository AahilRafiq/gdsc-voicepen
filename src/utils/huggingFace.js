import { async } from "regenerator-runtime"

async function getTextFromSpeech(audioBlob , hf) {
    return await hf.automaticSpeechRecognition({
        model: 'facebook/wav2vec2-large-960h-lv60-self',
        data: audioBlob
    })
}

async function getSummary(text , hf) {
    return await hf.summarization({
        model: 'facebook/bart-large-cnn',
        inputs: text ,
        max_length : 150
    })
}

async function getGpt2Result(text , hf){
    return await hf.questionAnswering({
        model: 'deepset/roberta-base-squad2',
        inputs: {
          question: 'Fix the grammer and vocabulary',
          context : text
        }
      })
}

export {
    getTextFromSpeech,
    getSummary,
    getGpt2Result
}
### Voicepen project live : https://gdsc-voicepen.netlify.app/
![image](https://github.com/AahilRafiq/gdsc-voicepen/assets/128609469/59001034-585a-421e-a6e1-be3f17fdb1a5)

### Demo video P1 : [Link](https://drive.google.com/file/d/1SKCxhwewNDJO6nRwpAcFYL32wKgTND94/view?usp=sharing) , P2 : [Link](https://drive.google.com/file/d/1SK6w-sFhTf6dLxYTTq6DmBH4w9JDgIls/view?usp=sharing)

### How it works :
* This project utilises huggingface api for speech recognition and summarization - [link](https://huggingface.co/docs/huggingface.js/inference/README)
* First, it records audio and sends it to the speech recognition API.
*  Audio recording is implemented using the React Audio Voice Recorder NPM package: [react-audio-voice-recorder](https://www.npmjs.com/package/react-audio-voice-recorder)
* If there is already an audio file available, it can be selected and sent for speech recognition instead.
* Once the speech is recognized and text is sent back, it is sent to the summarization API to get a summary back.

 #### V2 : Variant of this
  * Instead of recording audio and then sending it to speech recognition, this version tries to do live speech recognition.
  * This functionality is implemented using an npm package called [react-speech-recognition](https://www.npmjs.com/package/react-speech-recognition)
  * After you speak something, clicking the "Summarize" button sends the recognized speech to the summarization API.

### Techstack
* React JS - Vite

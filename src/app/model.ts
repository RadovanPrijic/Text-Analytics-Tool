export class Entity {
  title: string = '';
  abstract: string = '';
  categories: Array<string> = new Array<string>;
  image: Image = new Image;
}

export class Image {
  full: string = '';
  thumbnail: string = '';
}

export interface EntityExtObj {
  text: string,
  token: string
  annotations: Array<Entity>
}

export interface TextSimObj {
  text1: string,
  text2: string,
  token: string,
  similarity: number
}

export class DetectedLang {
  lang: string = '';
  confidence: number = 0;
}

export interface LanguageDetObj {
  text: string,
  option: boolean,
  token: string,
  detectedLangs: Array<DetectedLang>
}

export class Sentiment {
  score: number = 0;
  type: string = '';
}

export interface SentimentAnObj {
  text: string,
  token: string,
  sentiment: Sentiment
}

  export class ApiCallLog {
    date: string
    time: string
    requestType: string
    requestUrl: string

    constructor(date: string, time: string, requestType: string, requestUrl: string) {
      this.date = date
      this.time = time
      this.requestType = requestType
      this.requestUrl = requestUrl
    }
  }


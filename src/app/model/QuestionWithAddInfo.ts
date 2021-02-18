export interface QuestionWithAddInfo{
  
    questionId: string;
    userId: string;
	
	question: string;
	basicAnswer: string;
	intermediateAnswer: string;
	advancedAnswer: string;
	
	userNote: string;
    nextAnswerDateTime: Date;
	firstAnswerDateTime: Date;
	 markedAsKnowDateTime: Date;
	isMarkedAsKnow: boolean;

}
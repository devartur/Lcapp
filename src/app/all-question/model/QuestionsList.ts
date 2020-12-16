import { Question } from "./Question";

export interface QuestionsList{
    
    
    id: string;
    questions: Question[];
  
    creationTime: string;
    creationBy: string;

}
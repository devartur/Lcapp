import { Question } from "./Question";

export interface QuestionsList{
    
    
    id: string;
    name:string;
    description: string;
    questions: Question[];
  
    creationTime: string;
    creationBy: string;

}
import { Pipe, PipeTransform } from '@angular/core';
import { AllQuestions } from "src/app/all-question/model/AllQuestions";

import * as _ from 'lodash'; 
//import 'rxjs/Rx';


declare var _: any; 

@Pipe({
  name: 'allQuestionsFilter',
  pure: false
})
export class AllQuestionsFilterPipe implements PipeTransform {

    //transform(value: AllQuestions[], category: string): AllQuestions[] {
            transform(value: AllQuestions[]): AllQuestions[]{
                if(value!== undefined && value!== null){
                    return _.uniqBy(value, 'firstLevel');
                }
                return value;
            }


}


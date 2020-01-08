import { Pipe, PipeTransform } from '@angular/core';
import { AllQuestions } from "src/app/all-question/model/AllQuestions";

import * as _ from 'lodash'; 
//import 'rxjs/Rx';


@Pipe({
  name: 'allQuestionsFilter',
  pure: false
})
/*export class AllQuestionsFilterPipe implements PipeTransform {

            transform(value: AllQuestions[], level: String): AllQuestions[]{
                if(value!== undefined && value!== null){
                    return _.uniqBy(value, level);
                    
                }
            }


}*/



export class AllQuestionsFilterPipe implements PipeTransform {

    transform(value: AllQuestions[], level: String, valueButton: String): AllQuestions[]{
        if(value!== undefined && value!== null){
            
            
            if(level == 'secondLevel'){
                return _.filter(value, ['firstLevel', valueButton]);
                // return  _.dropWhile(value, {'firstLevel':'valueButton'});
            }
            
            return _.uniqBy(value, level);
            
        }
    }
}

//{ 'user': 'barney', 'active': false }
//_.filter(users, ['active', false]);



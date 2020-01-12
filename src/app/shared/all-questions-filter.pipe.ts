import { Pipe, PipeTransform } from '@angular/core';
import { AllQuestions } from "src/app/all-question/model/AllQuestions";

import * as _ from 'lodash';
//import 'rxjs/Rx';


@Pipe({
    name: 'allQuestionsFilter',
    pure: false
})

export class AllQuestionsFilterPipe implements PipeTransform {

    transform(value: AllQuestions[], level: String, valueButton: String, valueButton2?: String, valueButton3?: String): AllQuestions[] {
        if (value !== undefined && value !== null) {


            if (level == 'secondLevel') {
                return _.uniqBy(_.filter(value, ['firstLevel', valueButton]), level);
                // return  _.dropWhile(value, {'firstLevel':'valueButton'});
            }

            if (level == 'thirdLevel') {
                return _.uniqBy(_.filter(_.filter(value, ['secondLevel', valueButton2]), ['firstLevel', valueButton]), level);
            }

            if (level == 'fourthLevel') {
                return _.uniqBy(_.filter(_.filter(_.filter(value, ['thirdLevel', valueButton3]), ['secondLevel', valueButton2]), ['firstLevel', valueButton]), level);
            }


            // return _.uniqBy(_.filter(_.filter(value, ['first', valueButton]), ['secondLevel', valueButton]), level);
            //return _.uniqBy(_.filter(value, ['secondLevel', valueButton]), level);
            // return  _.dropWhile(value, {'firstLevel':'valueButton'});
            return _.uniqBy(value, level);

        }
    }
}



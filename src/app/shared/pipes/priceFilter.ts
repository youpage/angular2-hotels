import {Pipe, PipeTransform} from '@angular/core';

//Return the collection for prices lower than value
@Pipe({
    name: 'priceFilter'
})
export class PriceFilter implements PipeTransform {
    transform(collection: any[], args: any): any {
        if(collection)
        return collection
            .filter((item: any) => {
                if (args) {                    
                    return item.price <= args;
                } else
                    return true;
            }
            );
    }
}
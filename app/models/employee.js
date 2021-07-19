import Model from 'ember-data/model';
import DS from 'ember-data';
const{attr} = DS;

export default Model.extend({ 
    employee_name: attr('string'),
    employee_salary: attr('string')
});

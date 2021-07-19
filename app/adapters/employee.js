import DS from 'ember-data';

export default DS.JSONAPIAdapter.extend({
    host:"https://dummy.restapiexample.com",
    namespace:"api/v1",
    pathForType(){
        return 'employees';
    }
});

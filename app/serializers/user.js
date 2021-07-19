import DS from 'ember-data';

export default DS.RESTSerializer.extend({
    normalizeResponse(store, primaryModelClass, payload, id, requestType){

       //Note: Needs to format this way to show the output
        payload = { users: payload };

       return this._super(store, primaryModelClass, payload, id, requestType);
    }
});



"use strict";
var PhoneListController = (function () {
    function PhoneListController(Phone) {
        this.phones = Phone.query();
        this.orderProp = 'age';
        this.query = '';
    }
    PhoneListController.$inject = ['Phone'];
    return PhoneListController;
}());
angular.
    module('phoneList').
    component('phoneList', {
    templateUrl: 'phone-list/phone-list.template.html',
    controller: PhoneListController
});
//# sourceMappingURL=phone-list.component.js.map
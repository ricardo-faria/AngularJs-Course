/**
 * Created by Ricardo on 08/07/2016.
 */
angular.module("phoneList",[]);

angular.module("phoneList").controller("listCtrl", function ($scope) {
    $scope.contacts = [];
    $scope.addContact = function (contact) {
        $scope.contacts.push(angular.copy(contact));
        delete $scope.contact;
    };
    
    $scope.removeContact = function (contacts){
        //make a filter and assign only the contact not marked to "contacts"
        $scope.contacts = contacts.filter(function (contact) {
            if (!contact.selected) return contact;
        });
    };

    $scope.isSelected = function (contacts) {
        return contacts.some(function (contact) {
            return contact.selected;
        });
    };

    $scope.operators = [
        {name: "Claro"},
        {name: "Vivo"},
        {name: "Tim"},
        {name: "Oi"}
    ];

    $scope.isContactsEmpty = function (contacts) {
        return contacts.length;
    }
});



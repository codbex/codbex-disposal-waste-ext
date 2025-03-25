const viewData = {
    id: 'assets-waste',
    label: 'Generate Waste',
    link: '/services/web/codbex-disposal-waste-ext/ext/Waste/waste.html',
    perspective: 'Disposal',
    view: 'Disposal',
    type: 'entity',
    order: 20
};

if (typeof exports !== 'undefined') {
    exports.getDialogWindow = function () {
        return viewData;
    }
}
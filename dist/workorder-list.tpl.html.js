var ngModule;
try {
  ngModule = angular.module('wfm.workorder.directives');
} catch (e) {
  ngModule = angular.module('wfm.workorder.directives', []);
}

ngModule.run(['$templateCache', function ($templateCache) {
  $templateCache.put('wfm-template/workorder-list.tpl.html',
    '<md-toolbar>\n' +
    '  <div class="md-toolbar-tools">\n' +
    '    <h3>\n' +
    '      <span>Cases</span>\n' +
    '    </h3>\n' +
    '  </div>\n' +
    '</md-toolbar>\n' +
    '\n' +
    '<form action="#" class="persistent-search" hide-xs hide-sm>\n' +
    '  <label for="search"><i class="material-icons">search</i></label>\n' +
    '  <input type="text" name="search" placeholder="Search" ng-model="searchValue" ng-change="ctrl.applyFilter(searchValue)">\n' +
    '</form>\n' +
    '\n' +
    '<md-list>\n' +
    '  <md-list-item\n' +
    '    ng-repeat="workorder in ctrl.workorders"\n' +
    '    ng-click="ctrl.selectWorkorder($event, workorder)"\n' +
    '    ng-class="{active: ctrl.selected.id === workorder.id}"\n' +
    '    class="md-2-line workorder-item"\n' +
    '  >\n' +
    '<!--\n' +
    '  TODO: change class name according to the color:\n' +
    '    "success" = green\n' +
    '    danger = "red"\n' +
    '    warning = "yellow"\n' +
    '    no class = grey\n' +
    '  -->\n' +
    '  <workorder-status class="" status="ctrl.resultMap[workorder.id].status"></workorder-status>\n' +
    '\n' +
    '    <div class="md-list-item-text">\n' +
    '      <h3>{{workorder.caseType}} at {{workorder.breakdownAddress}}</h3>\n' +
    '      <p>{{workorder.name}} - {{workorder.phoneNumber}}</p>\n' +
    '    </div>\n' +
    '    <md-divider></md-divider>\n' +
    '  </md-list-item>\n' +
    '</md-list>\n' +
    '');
}]);

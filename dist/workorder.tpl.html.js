var ngModule;
try {
  ngModule = angular.module('wfm.workorder.directives');
} catch (e) {
  ngModule = angular.module('wfm.workorder.directives', []);
}

ngModule.run(['$templateCache', function ($templateCache) {
  $templateCache.put('wfm-template/workorder.tpl.html',
    '<md-list>\n' +
    '\n' +
    '    <md-list-item class="md-2-line" >\n' +
    '        <md-icon md-font-set="material-icons">portrait</md-icon>\n' +
    '        <div class="md-list-item-text">\n' +
    '            <h3>{{workorder.caseType}}</h3>\n' +
    '            <p>Case Type</p>\n' +
    '        </div>\n' +
    '        <md-divider></md-divider>\n' +
    '    </md-list-item>\n' +
    '\n' +
    '    <md-list-item class="md-2-line" >\n' +
    '        <md-icon>\n' +
    '            <workorder-status status="status"></workorder-status>\n' +
    '        </md-icon>\n' +
    '        <div class="md-list-item-text">\n' +
    '            <h3>{{status || "New"}}</h3>\n' +
    '            <p>Status</p>\n' +
    '        </div>\n' +
    '    </md-list-item>\n' +
    '    </md-button>\n' +
    '    <md-divider></md-divider>\n' +
    '\n' +
    '    <md-list-item class="md-2-line md-long-text">\n' +
    '        <md-icon md-font-set="material-icons">place</md-icon>\n' +
    '        <div class="md-list-item-text">\n' +
    '            <h3>{{workorder.location[0]}}, {{workorder.location[1]}}</h3>\n' +
    '            <p>\n' +
    '                {{workorder.breakdownAddress}}\n' +
    '            </p>\n' +
    '        </div>\n' +
    '    </md-list-item>\n' +
    '    <md-divider></md-divider>\n' +
    '\n' +
    '    <md-list-item class="md-2-line" >\n' +
    '        <md-icon md-font-set="material-icons">assignment</md-icon>\n' +
    '        <div class="md-list-item-text">\n' +
    '            <h3>{{workorder.passengerCount}}</h3>\n' +
    '            <p>Passenger Count</p>\n' +
    '        </div>\n' +
    '    </md-list-item>\n' +
    '    <md-divider></md-divider>\n' +
    '\n' +
    '    <md-list-item class="md-2-line" >\n' +
    '        <md-icon md-font-set="material-icons">event</md-icon>\n' +
    '        <div class="md-list-item-text">\n' +
    '            <h3>{{workorder.caseRaisedTimestamp}}</h3>\n' +
    '            <p>Raised at</p>\n' +
    '        </div>\n' +
    '    </md-list-item>\n' +
    '    <md-divider></md-divider>\n' +
    '\n' +
    '    <md-list-item class="md-2-line" ng-if="workorder.flatTyreCount">\n' +
    '        <md-icon md-font-set="material-icons">person</md-icon>\n' +
    '        <div class="md-list-item-text">\n' +
    '            <h3>{{workorder.flatTyreCount}}</h3>\n' +
    '            <p># of Flat Tyres</p>\n' +
    '        </div>\n' +
    '    </md-list-item>\n' +
    '    <md-divider></md-divider>\n' +
    '\n' +
    '    <md-list-item class="md-2-line" >\n' +
    '        <md-icon md-font-set="material-icons">event</md-icon>\n' +
    '        <div class="md-list-item-text">\n' +
    '            <h3>{{workorder.customerProximity}}</h3>\n' +
    '            <p>Where is the customer</p>\n' +
    '        </div>\n' +
    '    </md-list-item>\n' +
    '    <md-divider></md-divider>\n' +
    '\n' +
    '    <md-list-item class="md-2-line" >\n' +
    '        <md-icon md-font-set="material-icons">event</md-icon>\n' +
    '        <div class="md-list-item-text">\n' +
    '            <h3>{{workorder.caseComments}}</h3>\n' +
    '            <p>Additional Comments</p>\n' +
    '        </div>\n' +
    '    </md-list-item>\n' +
    '    <md-divider></md-divider>\n' +
    '\n' +
    '</md-list>\n' +
    '\n' +
    '<md-subheader class="md-no-sticky">Work Summary</md-subheader>\n' +
    '<p class="md-body-1" layout-padding layout-margin>\n' +
    '    {{workorder.summary}}\n' +
    '</p>\n' +
    '');
}]);

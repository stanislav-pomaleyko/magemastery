define([
    'uiComponent',
    'jquery'
], function (Component, $) {
    console.log('Component');
    'use strict';

    return Component.extend({
        defaults: {
            tasks: [
                {id: 1, label: "Task 1", status: false},
                {id: 2, label: "Task 2", status: false},
                {id: 3, label: "Task 3", status: false},
                {id: 4, label: "Task 4", status: true},
            ]
        },

        initObservable: function () {
            this._super().observe(['tasks']);

            this.tasks().push({label: 'Task 5'});

            return this;
        },

        switchStatus: function (data, event) {
            const taskid = $(event.target).data('id');

            var items = this.tasks().map(function (task) {
                if (task.id === taskid) {
                    task.status = !task.status;
                }

                return task;
            });

            this.tasks(items);
        },
    });
});

import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormlyFormOptions, FormlyFieldConfig } from '@ngx-formly/core';

@Component({
  selector: 'formly-app-example',
  templateUrl: './app.component.html',
})
export class AppComponent {
  form = new FormGroup({});
  model = {
    investments: [{
      investmentName: 1
    }, {
      investmentName: 8
    }],
  };
  options: FormlyFormOptions = {};

  fields: FormlyFieldConfig[] = [
    {
      key: 'investments',
      type: 'repeat',
      templateOptions: {
        addText: 'Add another investment',
      },
      validators: {
        ip: {
          expression: (c) => {
            const sum = c.value
                .map(v => v.investmentName)
                .reduce((sum, investmentName) => sum +=investmentName, 0);

            return sum === 10;
          },
          message: (error, field: FormlyFieldConfig) => `sum !== 10`,
        },
      },
      fieldArray: {
        fieldGroup: [
          {
            type: 'input',
            key: 'investmentName',
            templateOptions: {
              label: 'Number',
              type: 'number',
              required: true,
            },
          },
        ],
      },
    },
  ];

  submit() {}
}


/**  Copyright 2018 Google Inc. All Rights Reserved.
    Use of this source code is governed by an MIT-style license that
    can be found in the LICENSE file at http://angular.io/license */
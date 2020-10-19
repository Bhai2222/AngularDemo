// {
//     "display": "form",
//     "settings": {
//         "pdf": {
//             "id": "1ec0f8ee-6685-5d98-a847-26f67b67d6f0",
//             "src": "https://files.form.io/pdf/5692b91fd1028f01000407e3/file/1ec0f8ee-6685-5d98-a847-26f67b67d6f0"
//         }
//     },
//     "components": [
//         {
//             "title": "Basic Information",
//             "collapsible": false,
//             "key": "panel",
//             "type": "panel",
//             "label": "Panel",
//             "input": false,
//             "tableView": false,
//             "components": [
//                 {
//                     "label": "Columns",
//                     "columns": [
//                         {
//                             "components": [
//                                 {
//                                     "label": "Full Name",
//                                     "placeholder": "Enter Full Name",
//                                     "tableView": true,
//                                     "validate": {
//                                         "required": true
//                                     },
//                                     "key": "firstName",
//                                     "type": "textfield",
//                                     "input": true,
//                                     "hideOnChildrenHidden": false
//                                 },
//                                 {
//                                     "label": "Marital Status",
//                                     "widget": "choicesjs",
//                                     "tableView": true,
//                                     "data": {
//                                         "values": [
//                                             {
//                                                 "label": "",
//                                                 "value": ""
//                                             }
//                                         ]
//                                     },
//                                     "selectThreshold": 0.3,
//                                     "validate": {
//                                         "required": true
//                                     },
//                                     "key": "maritalStatus",
//                                     "type": "select",
//                                     "indexeddb": {
//                                         "filter": {}
//                                     },
//                                     "input": true,
//                                     "hideOnChildrenHidden": false
//                                 },
//                                 {
//                                     "label": "Your Surname",
//                                     "widget": "choicesjs",
//                                     "placeholder": "Enter Your Surname",
//                                     "tableView": true,
//                                     "data": {
//                                         "values": [
//                                             {
//                                                 "label": "",
//                                                 "value": ""
//                                             }
//                                         ]
//                                     },
//                                     "selectThreshold": 0.3,
//                                     "validate": {
//                                         "required": true
//                                     },
//                                     "key": "yourSurname",
//                                     "type": "select",
//                                     "indexeddb": {
//                                         "filter": {}
//                                     },
//                                     "input": true,
//                                     "hideOnChildrenHidden": false
//                                 },
//                                 {
//                                     "label": "Other Surname",
//                                     "placeholder": "If your surname is not in list",
//                                     "tableView": true,
//                                     "validate": {
//                                         "required": true
//                                     },
//                                     "key": "otherSurname",
//                                     "type": "textfield",
//                                     "input": true,
//                                     "hideOnChildrenHidden": false
//                                 },
//                                 {
//                                     "label": "Job / Business",
//                                     "placeholder": "Enter Job / Business",
//                                     "tableView": true,
//                                     "validate": {
//                                         "required": true
//                                     },
//                                     "key": "jobBusiness",
//                                     "type": "textfield",
//                                     "input": true,
//                                     "hideOnChildrenHidden": false
//                                 },
//                                 {
//                                     "label": "Father",
//                                     "optionsLabelPosition": "right",
//                                     "inline": false,
//                                     "tableView": false,
//                                     "defaultValue": "yes",
//                                     "values": [
//                                         {
//                                             "label": "Yes",
//                                             "value": "yes",
//                                             "shortcut": ""
//                                         },
//                                         {
//                                             "label": "No",
//                                             "value": "no",
//                                             "shortcut": ""
//                                         }
//                                     ],
//                                     "validate": {
//                                         "required": true
//                                     },
//                                     "key": "father",
//                                     "type": "radio",
//                                     "input": true,
//                                     "hideOnChildrenHidden": false
//                                 },
//                                 {
//                                     "label": "Mother",
//                                     "optionsLabelPosition": "right",
//                                     "inline": false,
//                                     "tableView": false,
//                                     "defaultValue": "yes",
//                                     "values": [
//                                         {
//                                             "label": "Yes",
//                                             "value": "yes",
//                                             "shortcut": ""
//                                         },
//                                         {
//                                             "label": "No",
//                                             "value": "no",
//                                             "shortcut": ""
//                                         }
//                                     ],
//                                     "key": "mother",
//                                     "type": "radio",
//                                     "input": true,
//                                     "hideOnChildrenHidden": false
//                                 },
//                                 {
//                                     "label": "Sister",
//                                     "tableView": true,
//                                     "data": {
//                                         "values": [
//                                             {
//                                                 "label": "",
//                                                 "value": ""
//                                             }
//                                         ]
//                                     },
//                                     "selectThreshold": 0.3,
//                                     "validate": {
//                                         "required": true
//                                     },
//                                     "key": "sister",
//                                     "type": "select",
//                                     "indexeddb": {
//                                         "filter": {}
//                                     },
//                                     "input": true,
//                                     "hideOnChildrenHidden": false
//                                 },
//                                 {
//                                     "label": "Married Sister",
//                                     "widget": "choicesjs",
//                                     "tableView": true,
//                                     "data": {
//                                         "values": [
//                                             {
//                                                 "label": "",
//                                                 "value": ""
//                                             }
//                                         ]
//                                     },
//                                     "selectThreshold": 0.3,
//                                     "validate": {
//                                         "required": true
//                                     },
//                                     "key": "marriedSister",
//                                     "type": "select",
//                                     "indexeddb": {
//                                         "filter": {}
//                                     },
//                                     "input": true,
//                                     "hideOnChildrenHidden": false
//                                 }
//                             ],
//                             "width": 6,
//                             "offset": 0,
//                             "push": 0,
//                             "pull": 0,
//                             "size": "md"
//                         },
//                         {
//                             "components": [
//                                 {
//                                     "label": "Date Of Birth",
//                                     "format": "yyyy-MM-dd",
//                                     "tableView": false,
//                                     "enableMinDateInput": false,
//                                     "datePicker": {
//                                         "disableWeekends": false,
//                                         "disableWeekdays": false
//                                     },
//                                     "enableMaxDateInput": false,
//                                     "validate": {
//                                         "required": true
//                                     },
//                                     "key": "dateOfBirth",
//                                     "type": "datetime",
//                                     "input": true,
//                                     "widget": {
//                                         "type": "calendar",
//                                         "displayInTimezone": "viewer",
//                                         "locale": "en",
//                                         "useLocaleSettings": false,
//                                         "allowInput": true,
//                                         "mode": "single",
//                                         "enableTime": true,
//                                         "noCalendar": false,
//                                         "format": "yyyy-MM-dd",
//                                         "hourIncrement": 1,
//                                         "minuteIncrement": 1,
//                                         "time_24hr": false,
//                                         "minDate": null,
//                                         "disableWeekends": false,
//                                         "disableWeekdays": false,
//                                         "maxDate": null
//                                     },
//                                     "hideOnChildrenHidden": false
//                                 },
//                                 {
//                                     "label": "Caste/Sub Caste",
//                                     "widget": "choicesjs",
//                                     "tableView": true,
//                                     "data": {
//                                         "values": [
//                                             {
//                                                 "label": "",
//                                                 "value": ""
//                                             }
//                                         ]
//                                     },
//                                     "selectThreshold": 0.3,
//                                     "validate": {
//                                         "required": true
//                                     },
//                                     "key": "casteSubCaste",
//                                     "type": "select",
//                                     "indexeddb": {
//                                         "filter": {}
//                                     },
//                                     "input": true,
//                                     "hideOnChildrenHidden": false
//                                 },
//                                 {
//                                     "label": "Maternal Uncle's Surname",
//                                     "widget": "choicesjs",
//                                     "placeholder": "Enter Maternal Uncle's Surname",
//                                     "tableView": true,
//                                     "data": {
//                                         "values": [
//                                             {
//                                                 "label": "",
//                                                 "value": ""
//                                             }
//                                         ]
//                                     },
//                                     "selectThreshold": 0.3,
//                                     "validate": {
//                                         "required": true
//                                     },
//                                     "key": "maternalUnclesSurname",
//                                     "type": "select",
//                                     "indexeddb": {
//                                         "filter": {}
//                                     },
//                                     "input": true,
//                                     "hideOnChildrenHidden": false
//                                 },
//                                 {
//                                     "label": "Maternal Uncle's Surname(If not in List)",
//                                     "placeholder": "Maternal Uncle's Surname",
//                                     "tableView": true,
//                                     "validate": {
//                                         "required": true
//                                     },
//                                     "key": "maternalUnclesSurnameIfNotInList",
//                                     "type": "textfield",
//                                     "input": true,
//                                     "hideOnChildrenHidden": false
//                                 },
//                                 {
//                                     "label": "Annual Income ",
//                                     "placeholder": "Enter Annual Income ",
//                                     "tableView": true,
//                                     "validate": {
//                                         "required": true
//                                     },
//                                     "key": "annualIncome",
//                                     "type": "textfield",
//                                     "input": true,
//                                     "hideOnChildrenHidden": false
//                                 },
//                                 {
//                                     "label": "Select",
//                                     "optionsLabelPosition": "right",
//                                     "inline": false,
//                                     "tableView": false,
//                                     "values": [
//                                         {
//                                             "label": "Groom",
//                                             "value": "groom",
//                                             "shortcut": ""
//                                         },
//                                         {
//                                             "label": "Bride",
//                                             "value": "bride",
//                                             "shortcut": ""
//                                         }
//                                     ],
//                                     "key": "select3",
//                                     "type": "radio",
//                                     "input": true,
//                                     "hideOnChildrenHidden": false
//                                 },
//                                 {
//                                     "label": "Brother",
//                                     "tableView": true,
//                                     "data": {
//                                         "values": [
//                                             {
//                                                 "label": "",
//                                                 "value": ""
//                                             }
//                                         ]
//                                     },
//                                     "selectThreshold": 0.3,
//                                     "validate": {
//                                         "required": true
//                                     },
//                                     "key": "brother",
//                                     "type": "select",
//                                     "indexeddb": {
//                                         "filter": {}
//                                     },
//                                     "input": true,
//                                     "hideOnChildrenHidden": false
//                                 },
//                                 {
//                                     "label": "Married Brother",
//                                     "tableView": true,
//                                     "data": {
//                                         "values": [
//                                             {
//                                                 "label": "",
//                                                 "value": ""
//                                             }
//                                         ]
//                                     },
//                                     "selectThreshold": 0.3,
//                                     "validate": {
//                                         "required": true
//                                     },
//                                     "key": "marriedBrother",
//                                     "type": "select",
//                                     "indexeddb": {
//                                         "filter": {}
//                                     },
//                                     "input": true,
//                                     "hideOnChildrenHidden": false
//                                 }
//                             ],
//                             "width": 6,
//                             "offset": 0,
//                             "push": 0,
//                             "pull": 0,
//                             "size": "md"
//                         }
//                     ],
//                     "key": "columns",
//                     "type": "columns",
//                     "input": false,
//                     "tableView": false
//                 }
//             ]
//         },
//         {
//             "title": "New Account Information",
//             "collapsible": false,
//             "key": "newAccountInformation",
//             "type": "panel",
//             "label": "Panel",
//             "input": false,
//             "tableView": false,
//             "components": [
//                 {
//                     "label": "Columns",
//                     "columns": [
//                         {
//                             "components": [
//                                 {
//                                     "label": "E-mail",
//                                     "placeholder": "Enter Your Email",
//                                     "tableView": true,
//                                     "key": "eMail",
//                                     "type": "textfield",
//                                     "input": true,
//                                     "hideOnChildrenHidden": false
//                                 },
//                                 {
//                                     "label": "Permanent Address(with pincode)",
//                                     "placeholder": "Enter Your Address",
//                                     "autoExpand": false,
//                                     "tableView": true,
//                                     "validate": {
//                                         "required": true
//                                     },
//                                     "key": "permanentAddressWithPincode",
//                                     "type": "textarea",
//                                     "input": true,
//                                     "hideOnChildrenHidden": false
//                                 },
//                                 {
//                                     "label": "City",
//                                     "placeholder": "Enter City",
//                                     "tableView": true,
//                                     "validate": {
//                                         "required": true
//                                     },
//                                     "key": "city",
//                                     "type": "textfield",
//                                     "input": true,
//                                     "hideOnChildrenHidden": false
//                                 },
//                                 {
//                                     "label": "Landline No.(If Available)",
//                                     "placeholder": "Enter Landline No.(If Available)",
//                                     "inputMask": "99999999999",
//                                     "tableView": true,
//                                     "validate": {
//                                         "customMessage": "Please Enter Valid Landline No.(If Available)"
//                                     },
//                                     "key": "landlineNoIfAvailable",
//                                     "type": "phoneNumber",
//                                     "input": true,
//                                     "hideOnChildrenHidden": false
//                                 }
//                             ],
//                             "width": 6,
//                             "offset": 0,
//                             "push": 0,
//                             "pull": 0,
//                             "size": "md"
//                         },
//                         {
//                             "components": [
//                                 {
//                                     "label": "Password",
//                                     "placeholder": "Enter Password",
//                                     "tableView": true,
//                                     "validate": {
//                                         "required": true
//                                     },
//                                     "key": "",
//                                     "type": "textfield",
//                                     "input": true,
//                                     "hideOnChildrenHidden": false
//                                 },
//                                 {
//                                     "label": "Current Address",
//                                     "placeholder": "Enter Current Address",
//                                     "autoExpand": false,
//                                     "tableView": true,
//                                     "validate": {
//                                         "required": true
//                                     },
//                                     "key": "currentAddress",
//                                     "type": "textarea",
//                                     "input": true,
//                                     "hideOnChildrenHidden": false
//                                 },
//                                 {
//                                     "label": "Contact No.1",
//                                     "placeholder": "Enter Contact No",
//                                     "inputMask": "9999999999",
//                                     "tableView": true,
//                                     "validate": {
//                                         "required": true,
//                                         "customMessage": "Please Enter 10 Digit Contact No"
//                                     },
//                                     "key": "contactNo1",
//                                     "type": "phoneNumber",
//                                     "input": true,
//                                     "hideOnChildrenHidden": false
//                                 },
//                                 {
//                                     "label": "Contact No 2",
//                                     "placeholder": "Enter Contact Number",
//                                     "inputMask": "9999999999",
//                                     "tableView": true,
//                                     "validate": {
//                                         "required": true,
//                                         "customMessage": "Please Enter 10 Digit Contact No"
//                                     },
//                                     "key": "contactNo2",
//                                     "type": "phoneNumber",
//                                     "input": true,
//                                     "hideOnChildrenHidden": false
//                                 }
//                             ],
//                             "width": 6,
//                             "offset": 0,
//                             "push": 0,
//                             "pull": 0,
//                             "size": "md"
//                         }
//                     ],
//                     "key": "columns3",
//                     "type": "columns",
//                     "input": false,
//                     "tableView": false
//                 }
//             ]
//         },
//         {
//             "title": "Religious Attributes",
//             "collapsible": false,
//             "key": "religiousAttributes",
//             "type": "panel",
//             "label": "Religious Attributes",
//             "input": false,
//             "tableView": false,
//             "components": [
//                 {
//                     "label": "Columns",
//                     "columns": [
//                         {
//                             "components": [
//                                 {
//                                     "label": "Zodiac Sign",
//                                     "widget": "choicesjs",
//                                     "placeholder": "Select",
//                                     "tableView": true,
//                                     "data": {
//                                         "values": [
//                                             {
//                                                 "label": "",
//                                                 "value": ""
//                                             }
//                                         ]
//                                     },
//                                     "selectThreshold": 0.3,
//                                     "validate": {
//                                         "required": true
//                                     },
//                                     "key": "zodiacSign",
//                                     "type": "select",
//                                     "indexeddb": {
//                                         "filter": {}
//                                     },
//                                     "input": true,
//                                     "hideOnChildrenHidden": false
//                                 },
//                                 {
//                                     "html": "<p>Birth Time</p>",
//                                     "label": "Content",
//                                     "refreshOnChange": false,
//                                     "key": "content",
//                                     "type": "content",
//                                     "input": false,
//                                     "tableView": false,
//                                     "hideOnChildrenHidden": false
//                                 },
//                                 {
//                                     "label": "Columns",
//                                     "columns": [
//                                         {
//                                             "components": [
//                                                 {
//                                                     "label": "Select",
//                                                     "widget": "choicesjs",
//                                                     "tableView": true,
//                                                     "data": {
//                                                         "values": [
//                                                             {
//                                                                 "label": "",
//                                                                 "value": ""
//                                                             }
//                                                         ]
//                                                     },
//                                                     "selectThreshold": 0.3,
//                                                     "key": "select",
//                                                     "type": "select",
//                                                     "indexeddb": {
//                                                         "filter": {}
//                                                     },
//                                                     "input": true,
//                                                     "hideOnChildrenHidden": false
//                                                 }
//                                             ],
//                                             "width": 4,
//                                             "offset": 0,
//                                             "push": 0,
//                                             "pull": 0,
//                                             "size": "md"
//                                         },
//                                         {
//                                             "components": [
//                                                 {
//                                                     "label": "Hr",
//                                                     "widget": "choicesjs",
//                                                     "tableView": true,
//                                                     "data": {
//                                                         "values": [
//                                                             {
//                                                                 "label": "",
//                                                                 "value": ""
//                                                             }
//                                                         ]
//                                                     },
//                                                     "selectThreshold": 0.3,
//                                                     "key": "select1",
//                                                     "type": "select",
//                                                     "indexeddb": {
//                                                         "filter": {}
//                                                     },
//                                                     "input": true,
//                                                     "hideOnChildrenHidden": false
//                                                 }
//                                             ],
//                                             "width": 4,
//                                             "offset": 0,
//                                             "push": 0,
//                                             "pull": 0,
//                                             "size": "md"
//                                         },
//                                         {
//                                             "components": [
//                                                 {
//                                                     "label": "Min",
//                                                     "widget": "choicesjs",
//                                                     "tableView": true,
//                                                     "data": {
//                                                         "values": [
//                                                             {
//                                                                 "label": "",
//                                                                 "value": ""
//                                                             }
//                                                         ]
//                                                     },
//                                                     "selectThreshold": 0.3,
//                                                     "key": "select2",
//                                                     "type": "select",
//                                                     "indexeddb": {
//                                                         "filter": {}
//                                                     },
//                                                     "input": true,
//                                                     "hideOnChildrenHidden": false
//                                                 }
//                                             ],
//                                             "size": "md",
//                                             "width": 4,
//                                             "offset": 0,
//                                             "push": 0,
//                                             "pull": 0
//                                         }
//                                     ],
//                                     "key": "columns2",
//                                     "type": "columns",
//                                     "input": false,
//                                     "tableView": false
//                                 },
//                                 {
//                                     "label": "Mangal",
//                                     "labelPosition": "left-left",
//                                     "optionsLabelPosition": "right",
//                                     "inline": false,
//                                     "tableView": false,
//                                     "values": [
//                                         {
//                                             "label": "Yes",
//                                             "value": "yes",
//                                             "shortcut": ""
//                                         },
//                                         {
//                                             "label": "No",
//                                             "value": "no",
//                                             "shortcut": ""
//                                         }
//                                     ],
//                                     "validate": {
//                                         "required": true
//                                     },
//                                     "key": "mangal",
//                                     "type": "radio",
//                                     "input": true,
//                                     "hideOnChildrenHidden": false
//                                 }
//                             ],
//                             "width": 6,
//                             "offset": 0,
//                             "push": 0,
//                             "pull": 0,
//                             "size": "md"
//                         },
//                         {
//                             "components": [
//                                 {
//                                     "label": "Nakshatras",
//                                     "widget": "choicesjs",
//                                     "placeholder": "Select",
//                                     "tableView": true,
//                                     "data": {
//                                         "values": [
//                                             {
//                                                 "label": "",
//                                                 "value": ""
//                                             }
//                                         ]
//                                     },
//                                     "selectThreshold": 0.3,
//                                     "key": "nakshatras",
//                                     "type": "select",
//                                     "indexeddb": {
//                                         "filter": {}
//                                     },
//                                     "input": true,
//                                     "hideOnChildrenHidden": false
//                                 },
//                                 {
//                                     "label": "Birth Time",
//                                     "tableView": true,
//                                     "validate": {
//                                         "required": true
//                                     },
//                                     "key": "birthTime",
//                                     "type": "textfield",
//                                     "input": true,
//                                     "hideOnChildrenHidden": false
//                                 },
//                                 {
//                                     "label": "Nadi",
//                                     "widget": "choicesjs",
//                                     "placeholder": "Select",
//                                     "tableView": true,
//                                     "data": {
//                                         "values": [
//                                             {
//                                                 "label": "",
//                                                 "value": ""
//                                             }
//                                         ]
//                                     },
//                                     "selectThreshold": 0.3,
//                                     "key": "nadi",
//                                     "type": "select",
//                                     "indexeddb": {
//                                         "filter": {}
//                                     },
//                                     "input": true,
//                                     "hideOnChildrenHidden": false
//                                 },
//                                 {
//                                     "label": "If Physical Disability,Please specify it",
//                                     "tableView": true,
//                                     "key": "ifPhysicalDisabilityPleaseSpecifyIt",
//                                     "type": "textfield",
//                                     "input": true,
//                                     "hideOnChildrenHidden": false
//                                 }
//                             ],
//                             "width": 6,
//                             "offset": 0,
//                             "push": 0,
//                             "pull": 0,
//                             "size": "md"
//                         }
//                     ],
//                     "key": "columns4",
//                     "type": "columns",
//                     "input": false,
//                     "tableView": false
//                 }
//             ]
//         },
//         {
//             "title": "Physical Attributes",
//             "collapsible": false,
//             "key": "physicalAttributes",
//             "type": "panel",
//             "label": "Panel",
//             "input": false,
//             "tableView": false,
//             "components": [
//                 {
//                     "label": "Columns",
//                     "columns": [
//                         {
//                             "components": [
//                                 {
//                                     "label": "Height",
//                                     "widget": "choicesjs",
//                                     "placeholder": "Select",
//                                     "tableView": true,
//                                     "data": {
//                                         "values": [
//                                             {
//                                                 "label": "",
//                                                 "value": ""
//                                             }
//                                         ]
//                                     },
//                                     "selectThreshold": 0.3,
//                                     "validate": {
//                                         "required": true
//                                     },
//                                     "key": "height",
//                                     "type": "select",
//                                     "indexeddb": {
//                                         "filter": {}
//                                     },
//                                     "input": true,
//                                     "hideOnChildrenHidden": false
//                                 },
//                                 {
//                                     "label": "Blood Group",
//                                     "widget": "choicesjs",
//                                     "placeholder": "Blood Group",
//                                     "tableView": true,
//                                     "data": {
//                                         "values": [
//                                             {
//                                                 "label": "",
//                                                 "value": ""
//                                             }
//                                         ]
//                                     },
//                                     "selectThreshold": 0.3,
//                                     "validate": {
//                                         "required": true
//                                     },
//                                     "key": "bloodGroup",
//                                     "type": "select",
//                                     "indexeddb": {
//                                         "filter": {}
//                                     },
//                                     "input": true,
//                                     "hideOnChildrenHidden": false
//                                 },
//                                 {
//                                     "label": "Blood Group",
//                                     "widget": "choicesjs",
//                                     "placeholder": "Select",
//                                     "tableView": true,
//                                     "data": {
//                                         "values": [
//                                             {
//                                                 "label": "",
//                                                 "value": ""
//                                             }
//                                         ]
//                                     },
//                                     "selectThreshold": 0.3,
//                                     "key": "bloodGroup1",
//                                     "type": "select",
//                                     "indexeddb": {
//                                         "filter": {}
//                                     },
//                                     "input": true,
//                                     "hideOnChildrenHidden": false
//                                 },
//                                 {
//                                     "label": "Physical Disability",
//                                     "labelPosition": "left-left",
//                                     "optionsLabelPosition": "right",
//                                     "inline": false,
//                                     "tableView": false,
//                                     "values": [
//                                         {
//                                             "label": "Yes",
//                                             "value": "yes",
//                                             "shortcut": ""
//                                         },
//                                         {
//                                             "label": "No",
//                                             "value": "no",
//                                             "shortcut": ""
//                                         }
//                                     ],
//                                     "validate": {
//                                         "required": true
//                                     },
//                                     "key": "physicalDisability",
//                                     "type": "radio",
//                                     "input": true,
//                                     "hideOnChildrenHidden": false
//                                 }
//                             ],
//                             "width": 6,
//                             "offset": 0,
//                             "push": 0,
//                             "pull": 0,
//                             "size": "md"
//                         },
//                         {
//                             "components": [
//                                 {
//                                     "label": "Weight",
//                                     "widget": "choicesjs",
//                                     "placeholder": "Select",
//                                     "tableView": true,
//                                     "data": {
//                                         "values": [
//                                             {
//                                                 "label": "",
//                                                 "value": ""
//                                             }
//                                         ]
//                                     },
//                                     "selectThreshold": 0.3,
//                                     "validate": {
//                                         "required": true
//                                     },
//                                     "key": "weight",
//                                     "type": "select",
//                                     "indexeddb": {
//                                         "filter": {}
//                                     },
//                                     "input": true,
//                                     "hideOnChildrenHidden": false
//                                 },
//                                 {
//                                     "label": "Complexion",
//                                     "widget": "choicesjs",
//                                     "placeholder": "Select",
//                                     "tableView": true,
//                                     "data": {
//                                         "values": [
//                                             {
//                                                 "label": "",
//                                                 "value": ""
//                                             }
//                                         ]
//                                     },
//                                     "selectThreshold": 0.3,
//                                     "validate": {
//                                         "required": true
//                                     },
//                                     "key": "complexion",
//                                     "type": "select",
//                                     "indexeddb": {
//                                         "filter": {}
//                                     },
//                                     "input": true,
//                                     "hideOnChildrenHidden": false
//                                 }
//                             ],
//                             "width": 6,
//                             "offset": 0,
//                             "push": 0,
//                             "pull": 0,
//                             "size": "md"
//                         }
//                     ],
//                     "key": "columns5",
//                     "type": "columns",
//                     "input": false,
//                     "tableView": false
//                 },
//                 {
//                     "title": "Expectation",
//                     "collapsible": false,
//                     "key": "expectation",
//                     "type": "panel",
//                     "label": "Panel",
//                     "input": false,
//                     "tableView": false,
//                     "components": [
//                         {
//                             "label": "Columns",
//                             "columns": [
//                                 {
//                                     "components": [
//                                         {
//                                             "label": "Education",
//                                             "tableView": true,
//                                             "key": "education",
//                                             "type": "textfield",
//                                             "input": true,
//                                             "hideOnChildrenHidden": false
//                                         },
//                                         {
//                                             "label": "Annual Income",
//                                             "tableView": true,
//                                             "key": "annualIncome1",
//                                             "type": "textfield",
//                                             "input": true,
//                                             "hideOnChildrenHidden": false
//                                         },
//                                         {
//                                             "label": "City Priority",
//                                             "tableView": true,
//                                             "key": "cityPriority",
//                                             "type": "textfield",
//                                             "input": true,
//                                             "hideOnChildrenHidden": false
//                                         }
//                                     ],
//                                     "width": 6,
//                                     "offset": 0,
//                                     "push": 0,
//                                     "pull": 0,
//                                     "size": "md"
//                                 },
//                                 {
//                                     "components": [
//                                         {
//                                             "label": "Job / Business",
//                                             "tableView": true,
//                                             "key": "jobBusiness1",
//                                             "type": "textfield",
//                                             "input": true,
//                                             "hideOnChildrenHidden": false
//                                         },
//                                         {
//                                             "label": "Age Difference",
//                                             "tableView": true,
//                                             "key": "ageDifference",
//                                             "type": "textfield",
//                                             "input": true,
//                                             "hideOnChildrenHidden": false
//                                         },
//                                         {
//                                             "label": "Other Expectation",
//                                             "tableView": true,
//                                             "key": "otherExpectation",
//                                             "type": "textfield",
//                                             "input": true,
//                                             "hideOnChildrenHidden": false
//                                         }
//                                     ],
//                                     "width": 6,
//                                     "offset": 0,
//                                     "push": 0,
//                                     "pull": 0,
//                                     "size": "md"
//                                 }
//                             ],
//                             "key": "columns1",
//                             "type": "columns",
//                             "input": false,
//                             "tableView": false
//                         }
//                     ]
//                 }
//             ],
//             "hideOnChildrenHidden": false
//         },
//         {
//             "label": "All information in the form is true. If any wrong/false information find then i will be only responsible for that. bhiovarvadhu.com website or company will not be responsible for that.I Accept All The Rules and Regulations of bhoivarvadhu.com . ",
//             "tableView": false,
//             "validate": {
//                 "required": true
//             },
//             "key": "allInformationInTheFormIsTrueIfAnyWrongFalseInformationFindThenIWillBeOnlyResponsibleForThatBhiovarvadhuComWebsiteOrCompanyWillNotBeResponsibleForThatIAcceptAllTheRulesAndRegulationsOfBhoivarvadhuCom",
//             "type": "checkbox",
//             "input": true,
//             "defaultValue": false
//         },
//         {
//             "type": "button",
//             "label": "Submit",
//             "key": "submit",
//             "disableOnInvalid": true,
//             "input": true,
//             "tableView": false
//         }
//     ]
// }
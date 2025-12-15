import { IForm } from "../../shared/interfaces/dynamic-form/form.interface";

export const formConfig:IForm = {
  formTitle: 'Registration form',
  saveBtnTitle: 'Register',
  resetBtnTitle: 'Reset',
  formControls: [
  {
    name: 'name',
    label: 'Name',
    value: '',
    palceholder: 'Enter name',
    class: 'col-md-6',
    type: 'text',
    validators: [
      {
        validationName: 'required',
        required: true,
        message: 'Name is required',
      }
    ],
  },
  {
    name: 'description',
    label: 'Description',
    value: '',
    palceholder: 'Enter description',
    class: 'col-md-6',
    type: 'text',
    validators: [
      {
        validationName: 'required',
        required: true,
        message: 'Description is required',
      }
    ],
  },
  {
    name: 'capacity',
    label: 'Capacity',
    value: '',
    palceholder: 'Enter capacity',
    class: 'col-md-4',
    type: 'number',
    validators: [
      {
        validationName: 'required',
        required: true,
        message: 'Capacity is required',
      }
    ],
  },
  {
    name: 'storage',
    label: 'Storage',
    value: '',
    palceholder: 'Enter storage',
    class: 'col-md-4',
    type: 'number',
    validators: [
      {
        validationName: 'required',
        required: true,
        message: 'Storage is required',
      }
    ],
  },
  {
    name: 'currentStock',
    label: 'Current Stock',
    value: '',
    palceholder: 'Enter current stock',
    class: 'col-md-4',
    type: 'number',
    validators: [
      {
        validationName: 'required',
        required: true,
        message: 'Current stock is required',
      }
    ],
  },
  {
    name: 'inwardStock',
    label: 'Inward Stock',
    value: '',
    palceholder: 'Enter inward stock',
    class: 'col-md-4',
    type: 'number',
    validators: [
      {
        validationName: 'required',
        required: true,
        message: 'Inward stock is required',
      }
    ],
  },
  {
    name: 'outwardStock',
    label: 'Outward Stock',
    value: '',
    palceholder: 'Enter outward stock',
    class: 'col-md-4',
    type: 'number',
    validators: [
      {
        validationName: 'required',
        required: true,
        message: 'Outward stock is required',
      }
    ],
  },
  {
    name: 'lastUpdated',
    label: 'Last Updated',
    value: '',
    palceholder: '',
    class: 'col-md-4',
    type: 'date',
    validators: [],
  },
  {
    name: 'status',
    label: 'Status',
    value: '',
    palceholder: '',
    class: 'col-md-6',
    type: 'select',
    options: [
      { id: 1, value: 'active' },
      { id: 2, value: 'inactive' }
    ],
    validators: [
      {
        validationName: 'required',
        required: true,
        message: 'Status is required',
      }
    ],
  },
  {
    name: 'location',
    label: 'Location',
    value: '',
    palceholder: 'Enter location',
    class: 'col-md-6',
    type: 'text',
    validators: [],
  },
  {
    name: 'contactPerson',
    label: 'Contact Person',
    value: '',
    palceholder: 'Enter contact person',
    class: 'col-md-6',
    type: 'text',
    validators: [],
  },
  {
    name: 'contactNumber',
    label: 'Contact Number',
    value: '',
    palceholder: 'Enter contact number',
    class: 'col-md-6',
    type: 'text',
    validators: [
       {
        validationName: 'required',
        required: true,
        message: 'Contact number is required',
      },
      {
        validationName: 'minlength',
        minLength: 10,
        message: 'Contact number must be at least 10 digits',
      }
    ],
  }
]

};

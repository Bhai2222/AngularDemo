export interface FormConfig {
    title?: string;
    form: any;
    submission: {data: {} };
    submitButtonTitle?: string;
    closeForm?: Function;
    onSubmit(data?: any): void;
    beforeSubmit(data?: any, form?: any): any;
}
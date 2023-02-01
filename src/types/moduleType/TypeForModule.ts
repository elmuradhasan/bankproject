export interface exampletwo {
    path: string
    showMenu?: boolean
    component: React.LazyExoticComponent<() => JSX.Element>
}
export interface IFormInputs {
    username: string;
    password: string;
}
export interface IFormInputsforREgister {
    username: string;
    email:string;
    password: string;
}
export type CustomTextFieldProps = {
    label: string;
    name: string;
    control: any;
    type: string;
    placeholder: string;
  };
  export type dataregisterType  = {
    email: string;
    username: string;
    password: string;
    name: {
        firstname: string;
        lastname: string;
    };
    address: {
        city: string;
        street: string;
        number: number;
        zipcode: string;
        geolocation: {
            lat: string;
            long: string;
        };
    };
    phone: string;
}
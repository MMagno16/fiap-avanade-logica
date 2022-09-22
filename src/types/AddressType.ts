export type AddressType = {
    name: string;
    age: number;
    email: string;
    address: AddressType;
    cpf: string;
    country?: string;
}
export type usersDataType = eachUserDataType[];

export type eachUserDataType = {
    id:number;
    name:string;
    email:string;
    gender:string;
    status:string;
}

export type userSelectionPropType = {
    data: usersDataType
}

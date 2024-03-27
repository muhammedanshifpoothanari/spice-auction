export interface login {
    email?: string;
    password?: string;
    companyName?: string;
}
export interface createUser {
    firstName?: string;
    lastName?: string;
    email?: string;
    companyName?: string;
    mobileNumber?: string;
    password?: string;
    userType?: string;
}





export interface user {
    token?: string;
}
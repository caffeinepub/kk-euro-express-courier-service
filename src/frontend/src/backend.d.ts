import type { Principal } from "@icp-sdk/core/principal";
export interface Some<T> {
    __kind__: "Some";
    value: T;
}
export interface None {
    __kind__: "None";
}
export type Option<T> = Some<T> | None;
export interface ContactDetails {
    email: string;
    website: string;
    address: string;
    phone: string;
}
export interface ContactInquiry {
    emailOrPhone: string;
    subject: string;
    name: string;
    message: string;
    timestamp: bigint;
}
export interface UserProfile {
    name: string;
}
export interface backendInterface {
    getAllInquiries(): Promise<Array<ContactInquiry>>;
    getCallerUserProfile(): Promise<UserProfile | null>;
    getContactDetails(): Promise<ContactDetails>;
    getUserProfile(user: Principal): Promise<UserProfile | null>;
    saveCallerUserProfile(profile: UserProfile): Promise<void>;
    submitInquiry(name: string, emailOrPhone: string, subject: string, message: string): Promise<void>;
}

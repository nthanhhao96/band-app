export interface IBand {
    members: IMember;
}

export interface IMember {
    current: IMemberInfo[];
    past: IMemberInfo[];
}

export interface IMemberInfo {
    name: string;
    age: number;
    plays: string[];
}

export interface ITransformedBand {
    members: ITransformedMember;
}

export interface ITransformedMember {
    current: IMemberInfo[];
    past: IMemberInfo[];
    all: Array<string>;
    plays: object;
}

export interface AboutInterface {
    lang: string;
    intro: string[];
    skills: string[];
    soft_skills: string[];
    conclusion: string[];
}

export default interface AboutsInterface {
    abouts: AboutInterface[]
}

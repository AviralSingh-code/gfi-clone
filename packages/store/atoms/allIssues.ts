import { atom } from 'recoil';


export const allIssues = atom({
    key: 'allIssues',
    default:{
        allIssuesArray: []
    }
});
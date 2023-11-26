import { atom } from 'recoil';

export const solvedIssues = atom<{solvedIssuesArray : string []}>({
    key: 'solvedIssue',
    default:{
        solvedIssuesArray: []
    }
});
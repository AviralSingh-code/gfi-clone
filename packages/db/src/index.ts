import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    username: String,
    password: String,
    solvedIssues: []
});

const issueSchema = new mongoose.Schema({
    ownerName: String,
    repoName: String,
    allIssues: [{issueTitle: String , issueUrl: String}]
});


export const User = mongoose.models.User || mongoose.model('User', userSchema);
export const Issue = mongoose.models.Issue || mongoose.model('Issue', issueSchema);
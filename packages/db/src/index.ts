import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    username: String,
    password: String,
    solvedIssues: [{type: mongoose.Schema.Types.ObjectId, ref: "Issue"}]
});

const issueSchema = new mongoose.Schema({
    allIssues: [{issueTitle: String , issueUrl: String}]
});


export const User = mongoose.models.User || mongoose.model('User', userSchema);
export const Issue = mongoose.models.Issue || mongoose.model('Issue', issueSchema);
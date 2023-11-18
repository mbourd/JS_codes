# In this challenge, your task is to write a shell script to print the n-th most recent commit message in a git repository.

# For example, if there are two commits in the repo:

# git init .
# echo hello > hello.txt
# git add .
# git commit -m "initial commit"
# echo goodbye >> hello.txt
# git add .
# git commit -m "add goodbye"
# The current history of the two commits in this repo is as follows:

# a683e80 add goodbye
# b42eb33 initial commit
# If your script is called with bash ./gmsg 1, it should print add goodbye. If called with bash ./gmsg 2, it should print initial commit.

# You can assume the n passed into your script is always within bounds of the commit range and is 1-indexed.

# You may also assume that the script is running from the relevant git directory context.

# Please see the sample tests for more examples:
# describe "show commit message" do
#   before(:all) do
#     `git config --global user.email "foo@example.com"
#      git config --global user.name "Foo"`
#   end
#   before(:each) {`git init .`}
#   after(:each) {`rm -rf .git`}

#   describe "sample tests" do
#     it "should return a single commit given n=1" do
#       `
#       echo hello > hello.txt
#       git add .
#       git commit -m "testing one commit"
#       `
#       result = run_shell(args: [1])
#       expect(result).to eq("testing one commit")
#     end

#     it "should return the oldest commit in a repo with two commits given n=2" do
#       `
#       echo hello > hello.txt
#       git add .
#       git commit -m "initial commit"
#       echo goodbye >> hello.txt
#       git add .
#       git commit -m "add goodbye"
#       `
#       result = run_shell(args: [2])
#       expect(result).to eq("initial commit")
#     end

#     it "should return the middle commit in a repo with three commits given n=2" do
#       `
#       echo hello > hello.txt
#       git add .
#       git commit -m "initial commit"
#       echo goodbye >> hello.txt
#       git add .
#       git commit -m "add goodbye"
#       echo ok >> hello.txt
#       git add .
#       git commit -m "add ok"
#       `
#       result = run_shell(args: [2])
#       expect(result).to eq("add goodbye")
#     end
#   end
# end

#!/bin/bash

# Get the nth most recent commit message
commit_message=$(git log --oneline | head -n $1 | tail -n 1 | cut -d ' ' -f 2-)

echo "$commit_message"

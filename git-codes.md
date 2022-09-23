### Creating git file inside actual directory

* git init 

### tracking file||folder

* git add "file||folder name" 

### tracking all

* git add .

### commit with msg

* git commit -m "my message"

### verifying branchs

* git branch

### Especifying the URL to push

* git remote add origin https://github.com/rufinoleonardo/my-studies


### pushing the commit to branch master

* git push --set-upstream origin master

> in case of permission denied open the credential menager (you can search it on windows's start menu), select Windows Credential, access git and remove.

### checking the versions (commits)

* git reflog

### restoring a version

* git reset --hard f521375

>> that code is one of the IDs returned by 'git reflog'. 
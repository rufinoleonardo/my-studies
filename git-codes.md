# Step by step - already existing branch
1. clone the repository
2. git pull of principal branch
3. generate a new branch from principal branch
4. Work on the new branch
5. Finalizate the updates in temporary branch
6. change to principal branch
7. merge temporary branch
8. push to github

### Cloning the repository
> git clone https://github.com/USER/REPOSITORY.git

### Creating git file inside actual directory

> git init 

### tracking file||folder

> git add "file||folder name" 

### tracking all

> git add .

### commit with msg

> git commit -m "my message"

### verifying branchs

> git branch

### Especifying the URL to push

> git remote add origin https://github.com/rufinoleonardo/my-studies


### pushing the commit to branch master

> git push --set-upstream origin master

* in case of permission denied open the credential menager (you can search it on windows's start menu), select Windows Credential, access git and remove.

### checking the versions (commits)

> git reflog

### restoring a version

> git reset --hard f521375
that code is one of the IDs returned by 'git reflog'. 


## Branchs

A comun name for branch is staging. There will be updates not yet tested.
> git branch staging

### showing branchs
> git branch

### changing the atual branch
> git checkout staging

### Pull
In the principal branch, you must pull for receive most recent updated files
> git pull

### Merge

* to merge branch staging with branch master, for exemple, you must enter the branch that will be updated.
* It's fundamental to pull before merge

> git checkout master
>> git branch (just for be secure)
>>> git merge staging

## git ingnore
When you don't want to send all files you can ingore some. 
> touch .gitignore
then you will scribe the files's name to ignore 

---
aliases:
  - pyvenv
  - pipenv
  - conda
  - pyenv
  - venv
  - virtualenv
created: 2024-01-14
modified: 2024-03-14
parent:
  - "[[Python|Python]]"
publish: true
tags:
  - computer/python
---

# Python Virtual Environments
## Virtualenv Vs Venv Vs Conda Vs Pipenv Vs Pyvenv Vs Pyenv
- **venv** is built-in in Python3
- **virtualenv** supports a super set of _venv_ features (and is the most popular one)
  - **virtualenvwrapper** extends _virtualenv_ with some additional features
- **pyenv** is used to isolate Python versions
  - **pyenv-virtualenv** is a plugin for _pyenv_ for interop with _virtualenv_
  - **pyenv-virtualenvwrapper** is similar
- **conda** manages environments in a centralized fashion (where _virtualenv_ & _venv_ manage them per-project)
- **pipenv** aims to combine _Pipfile_, _pip_ and _virtualenv_ into one command on the command-line.
- Some people think _conda_ and _pipenv_ shouldn't be used
- **pyvenv** is deprecated

## Use Virtualenv
Create a virtual environment install to the subdirectory `venv`
```
```sh
virtualenv venv
```

Activate environment
```sh
source venv/Scripts/activate
```
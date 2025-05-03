---
parent:
  - "[[network security|network security]]"
tags:
  - computing/security/exploits
created: 2025-05-02
modified: 2025-05-02
publish: true
---
**Server-Side Request Forgery** is an attack in which an attacker exploits a server's functionality to make requests to internal or otherwise inaccessible resources that the attacker should not have access to.

For example, an attacker may let a [[CORS proxy|CORS proxy]] to request
```
https://corsproxy.example/https://10.0.0.1/admin
```
which leaks the internal states of the server.
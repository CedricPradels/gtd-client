# Entités

## Actions

- doit avoir au moins un context d'execution
- peut être associée à un projet
- doit avoir un label
- peut avoir une durée estimée
- doit avoir un état
- peut avoir un niveau d'énergie associé

commands:

- getActions
  - show loader
  - apiGetActions
- apiGetActions
  - Success: setActions
  - hide loader
- deleteAction
  - showLoader
  - apiDeleteActions
- Update action

events:

- deleteSuccess
- getSuccess

documents:

- updateActions
- showLoader
- hideLoader

## Context d'execution

- doit avoir un label

Events:

- onRead
- onCreate
- onUpdate
- onDelete
